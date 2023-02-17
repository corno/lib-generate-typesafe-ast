import * as pl from 'pareto-core-lib'
import * as ps from 'pareto-core-state'

import * as api from "../api"

import * as mdefinition from "../../definition"

export const $$: api.Cresolve = () => {
    return ($) => {

        type Subscriber = (key: string, cb: Subscriber2) => void
        type Subscriber2 = ($: api.T.ValueType) => void
        let hasError = false

        function mapNode2($: {
            'context': mdefinition.T.Node2,
            'parameters': {
                'gt': Subscriber
            },
        }): api.T.Node2 {
            const parameters = $.parameters
            return pl.cc(($.context), ($) => {

                return {
                    'name': $.name,
                    'type': pl.cc($.type, ($) => {
                        switch ($[0]) {
                            case 'composite':
                                return pl.cc($[1], ($) => {
                                    return ['composite', mapValue({
                                        'context': $,
                                        'parameters': {
                                            'gt': parameters.gt
                                        },
                                    })]
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
        function mapValue($: {
            'context': mdefinition.T.Value,
            'parameters': {
                'gt': Subscriber
            },
        }): api.T.Value {
            const parameters = $.parameters
            return pl.cc(($.context), ($) => {
                return {
                    'cardinality': $.cardinality,
                    'type': mapValueType({
                        'context': $.type,
                        'parameters': {
                            'gt': parameters.gt
                        },
                    }),
                }
            })
        }
        function mapValueType($: {
            'context': mdefinition.T.ValueType,
            'parameters': {
                'gt': Subscriber
            },
        }): api.T.ValueType {
            const parameters = $.parameters
            return pl.cc(($.context), ($) => {

                switch ($[0]) {
                    case 'choice':
                        return pl.cc($[1], ($) => {
                            return ['choice', {
                                'options': $.options.map(($) => {
                                    return mapValue({
                                        'context': $,
                                        'parameters': {
                                            'gt': parameters.gt,
                                        },
                                    })
                                })
                            }]
                        })
                    case 'node':
                        return pl.cc($[1], ($) => {
                            return ['node', mapNode2({
                                'context': $,
                                'parameters': {
                                    'gt': parameters.gt
                                },
                            })]
                        })
                    case 'reference':
                        return pl.cc($[1], ($) => {
                            let x: null | api.T.ValueType = null
                            parameters.gt($.name, ($) => {
                                x = $
                            })
                            return ['reference', {
                                'name': $.name,
                                'referencee': () => {
                                    if (x === null) {
                                        pl.panic("UNRESOLVED")
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
                                        'value': mapValue({
                                            'context': $.value,
                                            'parameters': {
                                                'gt': parameters.gt
                                            },
                                        }),
                                    }
                                })
                            }]
                        })
                    default: return pl.au($[0])
                }
            })
        }
        let subscribers = ps.createArrayBuilder<{
            'name': string,
            'subscriber': Subscriber2,
        }>()
        const gvt = $.globalValueTypes.map(($) => {
            return mapValueType({
                'context': $,
                'parameters': {
                    'gt': (key, cb) => {
                        subscribers.push({
                            'name': key,
                            'subscriber': cb
                        })
                    }
                },
            })
        })
        const out: api.T.Grammar = {
            'globalValueTypes': gvt,
            'root': mapNode2({
                'context': $.root,
                'parameters': {
                    'gt': (key, cb) => {
                        subscribers.push({
                            'name': key,
                            'subscriber': cb
                        })
                    }
                },
            }),
        }
        subscribers.getArray().forEach(($) => {
            let found = false
            gvt.forEach(() => false, (value, key) => {
                if ($.name === key) {
                    found = true
                    $.subscriber(value)
                }
            })
            if (!found) {
                pl.logDebugMessage("NOT FOUND")
                hasError = true
            }
        })
        return hasError
            ? [false]
            : [true, out]
    }
}