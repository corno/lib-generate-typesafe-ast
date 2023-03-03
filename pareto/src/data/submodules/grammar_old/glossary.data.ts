import * as pd from 'pareto-core-data'

import {
    null_,
    array,
    string,
    reference,
    boolean,
    parametrizedReference,
    typeParameter,
    computed,
    parametrizedType,
    typeReference,
    dictionary, group, member, taggedUnion, types, func, data, interfaceReference, inf, method, type, number, glossaryParameter
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as mglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: mglossary.T.Glossary<string> = {
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
}