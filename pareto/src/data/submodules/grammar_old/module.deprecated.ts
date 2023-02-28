import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"
import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

import {
    array, boolean, computed, data, dictionary, func, glossaryParameter, group, interfaceReference, member, method, optional, parametrizedTypeReference, reference, string, taggedUnion, type, typeReference, types
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { algorithm, constructor,  functionReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

const d = pd.d
const a = pd.a

export const $: gproject.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'imports': d({
                "fp": "lib-fountain-pen",
            }),
            'parameters': d({}),
            'types': d({
                "ValueType": type(taggedUnion({
                    "reference": group({
                        "name": member(string())
                    }),
                    "choice": group({
                        "options": member(dictionary(reference("Value")))
                    }),
                    "node": reference("Node2"),
                    "sequence": group({
                        "elements": member(array(group({
                            "name": member(string()),
                            "value": member(reference("Value"))
                        })))
                    })
                })),
                "Value": type(group({
                    "cardinality": member(taggedUnion({
                        "one": group({}),
                        "optional": group({}),
                        "array": group({}),
                    })),
                    "type": member(reference("ValueType")),
                })),
                "Grammar": type(group({
                    "globalValueTypes": member(dictionary(reference("ValueType"))),
                    "root": member(reference("Node2"))
                })),
                "Node2": type(group({
                    "name": member(string()),
                    "type": member(taggedUnion({
                        "composite": reference("Value"),
                        "leaf": group({
                            "hasTextContent": member(boolean()),
                        }),
                    }))
                })),
            }),
            'interfaces': d({}),
            'functions': d({
                "Serialize": func(typeReference("Grammar"), null, interfaceReference("fp", "Block"), null)
            }),
        },
        'api': {
            'imports': d({
                "foreach": "res-pareto-foreach",
                "this": "./glossary",
            }),
            'algorithms': d({
                "serialize": algorithm(functionReference("this", {}, "Serialize"), constructor(null, {
                    "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
                })),
                "serializeToNew": algorithm(functionReference("this", {}, "Serialize"), constructor(null, {
                    "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
                }))
            })
        },
    },
    'implementation': ['manual', {}],
}