import * as pd from 'pareto-core-data'

import {
    array, boolean, computed, data, dictionary, externalTypeReference, group, imp, member, optional, ref, sfunction, sInterface, sInterfaceMethod, string, taggedUnion, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'glossary parameters': d({}),
    'imports': d({
        "common": imp(),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "ValueType": type(taggedUnion({
                "reference": group({
                    "referencee": member(computed(ref(typeReference("ValueType")))),
                    "name": member(string()),
                }),
                "choice": group({
                    "options": member(dictionary(ref(typeReference("Value")))),
                }),
                "node": ref(typeReference("Node2")),
                "sequence": group({
                    "elements": member(array(group({
                        "name": member(string()),
                        "value": member(ref(typeReference("Value"))),
                    }))),
                }),
            })),
            "Value": type(group({
                "cardinality": member(taggedUnion({
                    "one": group({}),
                    "optional": group({}),
                    "array": group({}),
                })),
                "type": member(ref(typeReference("ValueType"))),
            })),
            "Grammar": type(group({
                "globalValueTypes": member(dictionary(ref(typeReference("ValueType")))),
                "root": member(ref(typeReference("Node2"))),
            })),
            "Node2": type(group({
                "name": member(string()),
                "type": member(taggedUnion({
                    "composite": ref(typeReference("Value")),
                    "leaf": group({
                        "hasTextContent": member(boolean()),
                    }),
                })),
            })),
            "PossibleGrammar": type(optional(ref(typeReference("Grammar")))),
            "ResolveError": type(group({
                "type": member(taggedUnion({
                    "no such global value type": string(),
                })),
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({
            "OnError": sInterface(sInterfaceMethod(externalTypeReference("common", "String")))
        }),
        'algorithms': d({
            "Resolve": sfunction(externalTypeReference("x", "Grammar"), data(typeReference("Grammar")))
        }),
    },
}