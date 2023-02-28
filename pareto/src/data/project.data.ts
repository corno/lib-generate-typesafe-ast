import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as grammar_resolved_old } from "./submodules/grammar_resolved_old/module.deprecated"
import { $ as alg } from "./submodules/algorithm/moduleDefinition.deprecated"
import { $ as p2t } from "./submodules/pareto2typescript/moduleDefinition.data"
import { $ as _2liana } from "./submodules/2liana/module.data"
import { $ as _private } from "./submodules/private/module.data"
import { $ as grammar } from "./submodules/grammar/module.generated"
import { $ as grammar_resolved } from "./submodules/grammar_resolved/module.generated"
import { $ as grammar_old } from "./submodules/grammar_old/module.deprecated"
import { $ as main } from "./main/module.data"

const d = pd.d

export const $: gproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "generates a typescript parser that provides a typed AST",
    'license': "TBD",

    'dependencies': d({
        "glo-pareto-common": {},
        "lib-fountain-pen": {},
        "lib-liana": {},
        "res-pareto-build": {},
        "res-pareto-foreach": {},
        "res-pareto-tostring": {},
    }),
    'type': ['library', {
        'main': main,
        'submodules': d({
            "pt2": {
                'definition': p2t,
                'implementation': ['typescript', {}],
            },
            "algorithm": {
                'definition': alg,
                'implementation': ['typescript', {}],
            },
            "2liana": _2liana,
            "grammar": grammar,
            "grammar_resolved": grammar_resolved,
            "grammar_old": grammar_old,
            "grammar_resolved_old": grammar_resolved_old,
            "private": _private,
        }),
        'executables': d({}),
        'test': {
            'dependencies': d({
            }),
            'glossary': {
                'functions': d({}),
                'imports': d({}),
                'parameters': d({}),
                'types': d({}),
                'interfaces': d({}),
            },
        }
    }],
}