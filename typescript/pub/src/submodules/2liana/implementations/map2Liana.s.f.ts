import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'
import * as pm from 'pareto-core-map'

import * as g_this from "../glossary"
import * as g_definition from "../../grammar"
import * as g_liana from "lib-liana/dist/submodules/liana"

import { A } from "../api.generated"


export const $$: A.map2Liana = <InAnnotation>() => {
    return ($) => {
        type OutAnnotation = g_this.T.OutAnnotation<InAnnotation>
        return {
            'type library': <g_liana.T.Type__Library<OutAnnotation>>{
                'terminal types': pm.wrapRawDictionary({}),
                'global types': $.types.map<g_liana.T.Type__Library.global__types.D<OutAnnotation>>(($) => {
                    function mapValue($: g_definition.T.Value<InAnnotation>): g_liana.T.Type<OutAnnotation> {
                        switch ($[0]) {
                            case 'array':
                                return pl.cc($[1], ($) => {
                                    return ['array', {
                                        'type': mapValue($)
                                    }]
                                })
                            case 'choice':
                                return pl.cc($[1], ($) => {
                                    return ['tagged union', {
                                        // 'options': {
                                        //     'dictionary': $.options.map(($) => {
                                        //         return mapValue($)
                                        //     }),
                                        //     'annotation': ['internal', "FOO"]
                                        // },
                                        'options': $.options.map(($) => {
                                            return {
                                                'constrained': [false],
                                                'type': mapValue($)
                                            }
                                        }),
                                        'default': {
                                            'key': "FIXMEDEFAULT",
                                            'annotation': ['internal', "FOO"]
                                        }
                                    }]
                                })
                            case 'component':
                                return pl.cc($[1], ($) => {
                                    return ['component', {
                                        'context': ['local', null],
                                        'type': {
                                            'key': $.type.key,
                                            'annotation': ['source', $.type.annotation],
                                        },
                                        // 'arguments': {
                                        //     'dictionary': pm.wrapRawDictionary({}),
                                        //     //'annotation': ['internal', "FOO"]
                                        // },
                                        'arguments': pm.wrapRawDictionary({}),
                                    }]
                                })
                            case 'group':
                                return pl.cc($[1], ($) => {
                                    pd.implementMe(`case`)
                                })
                            case 'node':
                                return pl.cc($[1], ($) => {
                                    $.name
                                    $.flags
                                    $.type
                                    return ['group', {
                                        'properties': pm.wrapRawDictionary({

                                            "name": {
                                                'type': ['string', {
                                                    'constrained': ['no', {
                                                        'type': {
                                                            'key': "SDFSDFSFSDFSDFSFSDF",
                                                            'annotation': ['internal', "FOO"]
                                                        },
                                                    }],

                                                }],
                                            }
                                        })
                                    }]
                                })
                            case 'optional':
                                return pl.cc($[1], ($) => {
                                    return ['optional', {
                                        'type': mapValue($)
                                    }]
                                })
                            default: return pl.au($[0])
                        }
                    }
                    return {
                        'parameters': pm.wrapRawDictionary({}),
                        'type': mapValue($)
                    }
                }),
            },
            'root': {
                'key': $.root.key,
                'annotation': ['source', $.root.annotation],
            },
        }
    }
}