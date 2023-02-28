import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"
import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

import {
    array, boolean, computed, data, dictionary, func, glossaryParameter, group, interfaceReference, member, method, optional, parametrizedTypeReference, reference, string, taggedUnion, type, typeReference, types
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { algorithm, constructor, functionReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

const d = pd.d
const a = pd.a

export const $: gproject.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'imports': d({
                "def": "../../../grammar",
                "liana": "lib-liana/dist/submodules/liana",
            }),
            'parameters': d({
                "Annotation": {},
            }),
            'types': d({
                "Annotation": type(glossaryParameter("Annotation")),
                "OutAnnotation": type(taggedUnion({
                    "source": glossaryParameter("Annotation"),
                    "internal": string(),
                })),
            }),
            'interfaces': d({}),
            'functions': d({
                "Map2Liana": func(parametrizedTypeReference("def", { "Annotation": typeReference("Annotation") }, "Grammar"), null, null, data(parametrizedTypeReference("liana", { "Annotation": typeReference("OutAnnotation") }, "Model"), false))
            }),
        },
        'api': {
            'imports': d({
                "this": "./glossary",
            }),
            'algorithms': d({
                "map2Liana": algorithm(functionReference("this", {}, "Map2Liana"))
            })
        },
    },
    'implementation': ['manual', {}],
}