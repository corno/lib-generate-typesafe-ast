import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/main"

import { $ as grammar } from "./models/grammar.data"

export const $: g_liana.T.CompileParameters<pd.SourceLocation> = {
    'outputs': pd.a([
        {
            'path': `../../pareto/src/data/submodules/grammar/glossary.generated.ts`,
            'data': {
                'settings': {
                    'datamodel': [true, {
                        'annotations': true,
                        'reference mapping': ['string', null],
                    }],
                    'visitor interface': [false],
                    'algorithms': {
                        'serialize': [false],
                    },
                },
                'mapped library': {
                    'library': grammar,

                    'terminal mapping': pd.d({
                        "identifier": ['string', null],
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
                        'reference mapping': ['reference and string', null],
                    }],
                    'visitor interface': [false],
                    'algorithms': {
                        'serialize': [false],
                    },
                },
                'mapped library': {
                    'library': grammar,

                    'terminal mapping': pd.d({
                        "identifier": ['string', null],
                    }),
                },
            }
        },
    ])
}