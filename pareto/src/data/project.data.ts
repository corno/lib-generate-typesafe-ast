import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as grammar_resolved_old } from "./submodules/grammar_resolved_old/module.data"
// import { $ as alg } from "./submodules/algorithm/module.data"
import { $ as p2t } from "./submodules/pareto2typescript/module.data"
import { $ as _2liana } from "./submodules/2liana/module.data"
import { $ as _private } from "./submodules/private/module.data"
import { $ as grammar } from "./submodules/grammar/module.data"
import { $ as grammar_resolved } from "./submodules/grammar_resolved/module.data"
import { $ as grammar_old } from "./submodules/grammar_old/module.data"
import { $ as main } from "./main/module.data"

const d = pd.d

export const $: g_project.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "generates a typescript parser that provides a typed AST",
    'license': "TBD",

    'dependencies': d({
        "glo-pareto-common": null,
        "lib-fountain-pen": null,
        "lib-liana": null,
        "res-pareto-build": null,
        "res-pareto-foreach": null,
        "res-pareto-tostring": null,
    }),
    'type': ['library', {
        'main': main,
        'submodules': d({
            "pt2": p2t,
            //"algorithm": alg,
            "2liana": _2liana,
            "grammar": grammar,
            "grammar_resolved": grammar_resolved,
            "grammar_old": grammar_old,
            "grammar_resolved_old": grammar_resolved_old,
            "private": _private,
        }),
        'bindings': [false],
        'executables': d({}),
        'test': {
            'dependencies': d({
            }),
            'definition': {
                'glossary': {
                    'root': {
                        'parameters': d({}),
                        'imports': d({}),
                        'types': d({}),
                        'asynchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),

                        },
                        'synchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),

                        },

                    },
                    'imports': d({}),
                },
                'api': {
                    'imports': d({}),
                    'root': {
                        'algorithms': d({}),
                    },
                }

            },
            'imports': d({}),
        }
    }],
}