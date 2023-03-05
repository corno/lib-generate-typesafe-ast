import * as pd from 'pareto-core-data'
import * as pt from 'pareto-core-types'

import * as gliana2glossary from "lib-liana/dist/submodules/liana2glossary"

import { $ as grammar } from "./models/grammar.data"


export const $: pt.Array<gliana2glossary.T.GenerateData<pd.SourceLocation>> = pd.a([
    {
        'path': `../../pareto/src/data/submodules/grammar/glossary.generated.ts`,
        'data': {
            'settings': {
                'datamodel': [true, {
                    'annotations': true,
                    'properties optional': false,
                    'reference mapping': ['string', null],
                }],
                'visitor interface': [false],
                'algorithms': {
                    'serialize': [false],
                },
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
        'path': `../../pareto/src/data/submodules/grammar_resolved/glossary.generated.ts`,
        'data': {
            'settings': {
                'datamodel': [true, {
                    'annotations': true,
                    'properties optional': false,
                    'reference mapping': ['reference and string', null],
                }],
                'visitor interface': [false],
                'algorithms': {
                    'serialize': [false],
                },
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