
import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'
import * as ps from 'pareto-core-state'
import * as pv from 'pareto-core-dev'

import * as mapi from "../api"
import * as mdefinition from "../../definition"


function buildArrayREPLACE_BY_mapAndSubscribe<T>($c: (add: (value: T) => void) => void): pt.Array<T> {
    const temp = ps.createArrayBuilder<T>()
    $c((value) => {
        temp.push(value)
    })
    return temp.getArray()
}

function mapAndSubscribe<T, RT>(
    dict: pt.Dictionary<T>,
    callback: (value: T, key: string, subscribe: Subscribe<RT>) => RT,
    onNotFound: ($: string) => void
): pt.Dictionary<RT> {
    const temp = ps.createUnsafeDictionaryBuilder<RT>()
    const subscribers = createSubscribers<RT>()

    dict.__forEach(() => false, ($, key) => {
        temp.add(key, callback($, key, (key, cb) => {
            subscribers.push({
                'name': key,
                'subscriber': cb
            })
        }))
    })
    const out = temp.getDictionary()
    resolve(subscribers, out, onNotFound)
    return out
}

type Subscribe<T> = (key: string, cb: IResolvedCallback<T>) => void
type IResolvedCallback<T> = ($: T) => void
type Subscription<T> = {
    'name': string,
    'subscriber': IResolvedCallback<T>,
}
type SubscriptionBuilder<T> = ps.ArrayBuilder<Subscription<T>>
function createSubscribers<T>() {
    return ps.createArrayBuilder<Subscription<T>>()
}

function createSubscribeFunction<T>(subscribers: SubscriptionBuilder<T>): Subscribe<T> {
    return (key, cb) => {
        subscribers.push({
            'name': key,
            'subscriber': cb
        })
    }
}
function resolve<T>(
    subscribers: SubscriptionBuilder<T>,
    dict: pt.Dictionary<T>,
    onNotFound: ($: string) => void
) {

    subscribers.getArray().__forEach(($) => {
        let found = false
        dict.__forEach(() => false, (value, key) => {
            if ($.name === key) {
                found = true
                $.subscriber(value)
            }
        })
        if (!found) {
            pv.logDebugMessage("NOT FOUND")
            onNotFound($.name)
        }
    })
}

export const $$: mapi.Cresolve = ($, $i) => {

    let hasError = false

    function mapNode2(
        $: {
            'context': mdefinition.T.Node2,
        },
        parameters: {
            'gt': Subscribe<mapi.T.ValueType>
        }
    ): mapi.T.Node2 {
        return pl.cc(($.context), ($) => {

            return {
                'name': $.name,
                'type': pl.cc($.type, ($) => {
                    switch ($[0]) {
                        case 'composite':
                            return pl.cc($[1], ($) => {
                                return ['composite', mapValue(
                                    {
                                        'context': $,
                                    },
                                    {
                                        'gt': parameters.gt
                                    },
                                )]
                            })
                        case 'leaf':
                            return pl.cc($[1], ($) => {
                                return ['leaf', {
                                    'hasTextContent': $.hasTextContent
                                }]
                            })
                        default: return pl.au($[0])
                    }
                }),
            }
        })
    }
    function mapValue(
        $: {
            'context': mdefinition.T.Value,
        },
        parameters: {
            'gt': Subscribe<mapi.T.ValueType>
        }
    ): mapi.T.Value {
        return pl.cc(($.context), ($) => {
            return {
                'cardinality': $.cardinality,
                'type': mapValueType(
                    {
                        'context': $.type,
                    },
                    {
                        'gt': parameters.gt
                    },
                ),
            }
        })
    }
    function mapValueType(
        $: {
            'context': mdefinition.T.ValueType,
        },
        parameters: {
            'gt': Subscribe<mapi.T.ValueType>
        }
    ): mapi.T.ValueType {
        return pl.cc(($.context), ($) => {

            switch ($[0]) {
                case 'choice':
                    return pl.cc($[1], ($) => {
                        return ['choice', {
                            'options': $.options.map(($) => {
                                return mapValue(
                                    {
                                        'context': $,
                                    },
                                    {
                                        'gt': parameters.gt,
                                    },
                                )
                            })
                        }]
                    })
                case 'node':
                    return pl.cc($[1], ($) => {
                        return ['node', mapNode2(
                            {
                                'context': $,
                            },
                            {
                                'gt': parameters.gt
                            },
                        )]
                    })
                case 'reference':
                    return pl.cc($[1], ($) => {
                        let x: null | mapi.T.ValueType = null
                        parameters.gt($.name, ($) => {
                            x = $
                        })
                        return ['reference', {
                            'name': $.name,
                            'referencee': () => {
                                if (x === null) {
                                    pl.panic(`Value should have been resolved: "${$.name}"`)
                                }
                                return x
                            }
                        }]
                    })
                case 'sequence':
                    return pl.cc($[1], ($) => {
                        return ['sequence', {
                            'elements': $.elements.map(($) => {
                                return {
                                    'name': $.name,
                                    'value': mapValue(
                                        {
                                            'context': $.value,
                                        },
                                        {
                                            'gt': parameters.gt
                                        },
                                    ),
                                }
                            })
                        }]
                    })
                default: return pl.au($[0])
            }
        })
    }
    const subscribers = createSubscribers<mapi.T.ValueType>()
    const gvt = $.globalValueTypes.map(($) => {
        return mapValueType(
            {
                'context': $,
            },
            {
                'gt': createSubscribeFunction(subscribers)
            }
        )
    })
    const out: mapi.T.Grammar = {
        'globalValueTypes': gvt,
        'root': mapNode2(
            {
                'context': $.root,
            },
            {
                'gt': (keyX, cb) => {
                    let found = false
                    gvt.__forEach(() => false, (value, key) => {
                        if (keyX === key) {
                            found = true
                            cb(value)
                        }
                    })
                    if (!found) {
                        pv.logDebugMessage("NOT FOUND")
                        hasError = true
                    }
                }
            },
        ),
    }
    resolve(
        subscribers,
        gvt,
        ($) => {
            $i({
                'type': ['no such global value type', $]
            })
            hasError = true
        }
    )
    return hasError
        ? [false]
        : [true, out]
}