import * as pd from 'pareto-core-data'

import {
    array, boolean, data, dictionary, group, imp, member, procedure, ref, sExternalInterfaceReference, string, taggedUnion, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'glossary parameters': d({}),
    'imports': d({
        "fp": imp(), //FIXME imp({}),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "ValueType": type(taggedUnion({
                "reference": group({
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
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "Serialize": procedure(data(typeReference("Grammar")), sExternalInterfaceReference("fp", "Block"))
        }),
    },
}