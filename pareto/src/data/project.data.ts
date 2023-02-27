import {
    array, boolean, computed, data, dictionary, func, glossaryParameter, group, interfaceReference, member, method, optional, parametrizedTypeReference, reference, string, taggedUnion, type, typeReference, types
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"
import * as pd from 'pareto-core-data'

import { algorithm, constructor, definitionReference } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as resolved } from "./submodules/resolved/module.deprecated"
import { $ as alg } from "./submodules/algorithm.deprecated"
import { $ as p2t } from "./submodules/pareto2typescript.data"
import { $ as _2liana } from "./submodules/2liana/module.data"
import { $ as _private } from "./submodules/private/module.data"
import { $ as definition } from "./submodules/definition/module.deprecated"
import { $ as definitionNew } from "./submodules/definitionNew/module.deprecated"
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
                'implementation': ['manual', {}],
            },
            "algorithm": {
                'definition': alg,
                'implementation': ['manual', {}],
            },
            "2liana": _2liana,
            "definition": definition,
            "definitionNew": definitionNew,
            "resolved": resolved,
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