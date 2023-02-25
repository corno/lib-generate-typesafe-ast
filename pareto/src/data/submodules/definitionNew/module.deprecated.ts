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
            }),
            'parameters': d({
                "Annotation": {},
            }),
            'types': d({
                "Annotation": type(glossaryParameter("Annotation")),
                "Value": type(taggedUnion({
                    "component": group({
                        "name": member(string()),
                        "annotation": member(reference("Annotation")),
                    }),
                    "choice": group({
                        "options": member(dictionary(reference("Value")))
                    }),
                    "node": group({
                        "name": member(string()),
                        "type": member(taggedUnion({
                            "composite": reference("Value"),
                            "leaf": group({
                                "hasTextContent": member(boolean()),
                            }),
                        }))
                    }),
                    "group": group({
                        "members": member(dictionary(group({
                            "value": member(reference("Value"))
                        })))
                    }),
                    "array": reference("Value"),
                    "optional": reference("Value"),
                })),
                "Grammar": type(group({
                    "types": member(dictionary(reference("Value"))),
                    "root": member(string())
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
            }),
            'algorithms': d({
            })
        },
    },
}