import * as pd from 'pareto-core-data'

import * as gliana from "lib-liana/dist/submodules/liana"
import {
    array,
    boolean,
    component,
    dictionary,
    globalType,
    group,
    r,
    reference,
    //string,
    taggedUnion,
    string,
    prop,
} from "lib-liana/dist/submodules/liana/shorthands"

const d = pd.d

export const $: gliana.T.Model<pd.SourceLocation> = {
    'type library': {
        'imports': d({}),
        'string types': d({
            "text": {},
        }),
        'global types': d({
            "Value": globalType({}, taggedUnion({
                "component": group({
                    "type": prop(reference(['sibling', "SSFSF"], [])),
                }),
                "choice": group({
                    "options": prop(dictionary(component("Value", {}))),
                    "default": prop(reference(['sibling', "XXXX"], [])),
                }),
                "node": group({
                    "name": prop(string("identifier")),
                    "type": prop(taggedUnion({
                        "composite": component("Value", {}),
                        "leaf": group({}),
                    })),
                    "flags": prop(dictionary(taggedUnion({
                        "string": group({}),
                        "enumeration": dictionary(string("identifier")),
                    })))
                }),
                "group": group({
                    "members": prop(dictionary(group({
                        "value": prop(component("Value", {}))
                    })))
                }),
                "array": component("Value", {}),
                "optional": component("Value", {}),
            })),
            "Grammar": globalType({}, group({
                "types": prop(dictionary(component("Value", {}))),
                "root": prop(reference(['sibling', "XXX"], []))
            })),

        }),
    },
    'root': r("Grammar"),
}