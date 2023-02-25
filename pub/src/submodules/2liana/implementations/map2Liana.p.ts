import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'
import * as pm from 'pareto-core-map'

import * as gapi from "../api"
import * as gdefinition from "../../definitionNew"
import * as gliana from "lib-liana/dist/submodules/liana"

import { Cmap2Liana } from "../api"


export const $$: Cmap2Liana = <InAnnotation>($: gdefinition.T.Grammar<InAnnotation>) => {
    type OutAnnotation = gapi.T.AnnotationOrString<InAnnotation>
    return {
        'globalTypes': {
            'dictionary': $.types.map<gliana.T.GlobalType<OutAnnotation>>(($) => {
                function mapValue($: gdefinition.T.Value<InAnnotation>): gliana.T.LocalType<OutAnnotation> {
                    switch ($[0]) {
                        case 'array':
                            return pl.cc($[1], ($) => {
                                return ['array', {
                                    'type': mapValue($)
                                }]
                            })
                        case 'choice':
                            return pl.cc($[1], ($) => {
                                return ['taggedUnion', {
                                    'options': {
                                        'dictionary': $.options.map(($) => {
                                            return mapValue($)
                                        }),
                                        'annotation': ['string', "FOO"]
                                    },
                                    'default': {
                                        'key': "FIXMEDEFAULT",
                                        'annotation': ['string', "FOO"]
                                    }
                                }]
                            })
                        case 'component':
                            return pl.cc($[1], ($) => {
                                pd.implementMe(`case`)
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
                    'parameters': {
                        'dictionary': pm.wrapRawDictionary({}),
                        'annotation': ['string', "FOO"]
                    },
                    'type': mapValue($)
                }
            }),
            'annotation': ['string', "FOO"]
        },
        'stringTypes': {
            'dictionary': pm.wrapRawDictionary({}),
            'annotation': ['string', "FOO"]
        },
        'root': {
            'key': "FOO",
            'annotation': ['string', "FOO"]
        },
    }
}