import * as pd from 'pareto-core-data'
import * as pt from 'pareto-core-types'

import * as gliana2pareto from "lib-liana/dist/submodules/liana2pareto"

import { $ as grammar } from "./models/grammar.data"

export const $: pt.Array<gliana2pareto.T.GenerateModuleData<pd.SourceLocation>> = pd.a([
    {
        'path': `../../pareto/src/data/submodules/grammar`,
        'data': {
            'configuration': {
                'datamodel': [true, {
                    'annotations': true,
                    'properties optional': false,
                    'reference mapping': ['string', {}],
                }],
                'algorithms': {},
            },
            'mappedModel': {
                'model': grammar,

                'stringmapping': pd.d({
                    "identifier": ['string', null]
                }),
            },
        }
    },

    {
        'path': `../../pareto/src/data/submodules/grammar_resolved`,
        'data': {
            'configuration': {
                'datamodel': [true, {
                    'annotations': true,
                    'properties optional': false,
                    'reference mapping': ['reference and string', {}],
                }],
                'algorithms': {},
            },
            'mappedModel': {
                'model': grammar,

                'stringmapping': pd.d({
                    "identifier": ['string', null]
                }),
            },
        }
    }
])