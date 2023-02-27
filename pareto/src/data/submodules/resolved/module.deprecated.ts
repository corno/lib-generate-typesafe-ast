import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"
import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

import {
    array, boolean, computed, data, dictionary, func, glossaryParameter, group, interfaceReference, member, method, optional, parametrizedTypeReference, reference, string, taggedUnion, type, typeReference, types
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { algorithm, constructor, definitionReference } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

const d = pd.d
const a = pd.a

export const $: gproject.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'imports': d({
                "fp": "lib-fountain-pen",
                "definition": "../../../definition",
            }),
            'parameters': d({}),
            'types': d({
                "ValueType": type(taggedUnion({
                    "reference": group({
                        "referencee": member(computed(reference("ValueType"))),
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
                "PossibleGrammar": type(optional(reference("Grammar"))),
                "ResolveError": type(group({
                    "type": member(taggedUnion({
                        "no such global value type": string(),
                    }))
                }))
            }),
            'interfaces': d({
                "OnResolveError": method(typeReference("ResolveError"))
            }),
            'functions': d({
                "Resolve": func(typeReference("definition", "Grammar"), null, interfaceReference("OnResolveError"), data(typeReference("PossibleGrammar"), false))
            }),
        },
        'api': {
            'imports': d({
                "foreach": "res-pareto-foreach",
            }),
            'algorithms': d({
                "resolve": algorithm(definitionReference("Resolve"))
            })
        },
    },
    'implementation': ['manual', {}],
}