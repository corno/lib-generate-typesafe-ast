import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'
import * as pm from 'pareto-core-map'

import * as gapi from "../api"
import * as gdefinition from "../../grammar"
import * as gliana from "lib-liana/dist/submodules/liana"

import { Cmap2Liana } from "../api"


export const $$: Cmap2Liana = <InAnnotation>($: gdefinition.T.Grammar<InAnnotation>) => {
    type OutAnnotation = gapi.T.OutAnnotation<InAnnotation>
    return {
        'type library': <gliana.T.Type__Library<OutAnnotation>>{
            'string types': pm.wrapRawDictionary({}),
            'global types': $.types.map<gliana.T.Type__Library.global__types.D<OutAnnotation>>(($) => {
                function mapValue($: gdefinition.T.Value<InAnnotation>): gliana.T.Type<OutAnnotation> {
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
                                        return mapValue($)
                                    }),
                                    'default': {
                                        'key': "FIXMEDEFAULT",
                                        //'annotation': ['internal', "FOO"]
                                    }
                                }]
                            })
                        case 'component':
                            return pl.cc($[1], ($) => {
                                return ['component', {
                                    'context': ['local', {}],
                                    'type': {
                                        'key': $.type.key,
                                        //  'annotation': ['source', $.annotation],
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
                                pd.implementMe(`case`)
                            })
                        case 'optional':
                            return pl.cc($[1], ($) => {
                                pd.implementMe(`case`)
                            })
                        default: return pl.au($[0])
                    }
                }
                return {
                    // 'parameters': {
                    //     'dictionary': pm.wrapRawDictionary({}),
                    //     'annotation': ['internal', "FOO"]
                    // }, 
                    'parameters': pm.wrapRawDictionary({}),
                    'type': mapValue($)
                }
            }),
            // 'string types': {
            //     'dictionary': pm.wrapRawDictionary({}),
            //     'annotation': ['internal', "FOO"]
            // },
        },
        'root': {
            'key': "FOO",
            'annotation': ['internal', "FOO"]
        },
    }
}