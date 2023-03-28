import * as pd from 'pareto-core-data'

import * as gliana from "lib-liana/dist/submodules/liana"
import {
    component,
    dictionary,
    globalType,
    group,
    r,
    reference,
    taggedUnion,
    prop,
    option,
    terminal,
    typePath,
    tbd,
    grp,
    tu,
} from "lib-liana/dist/submodules/liana/shorthands"

const d = pd.d

export const $: gliana.T.Type__Library<pd.SourceLocation> = {
    'imports': d({}),
    'terminal types': d({
        "identifier": null,
        "text": null,
    }),
    'global types': d({
        "Value": globalType({}, taggedUnion({
            "component": option(group({
                "type": prop(reference(typePath("Grammar", [grp("types")]), tbd())),
            })),
            "choice": option(group({
                "options": prop(dictionary(component("Value", {}))),
                "default": prop(reference(typePath("Value", [tu("choice"), grp("options")]), tbd())),
            })),
            "node": option(group({
                "name": prop(terminal("identifier")),
                "type": prop(taggedUnion({
                    "composite": option(component("Value", {})),
                    "leaf": option(group({})),
                })),
                "flags": prop(dictionary(taggedUnion({
                    "string": option(group({})),
                    "enumeration": option(dictionary(terminal("identifier"))),
                }))),
            })),
            "group": option(group({
                "members": prop(dictionary(group({
                    "value": prop(component("Value", {})),
                }))),
            })),
            "array": option(component("Value", {})),
            "optional": option(component("Value", {})),
        })),
        "Grammar": globalType({}, group({
            "types": prop(dictionary(component("Value", {}))),
            "root": prop(reference(typePath("Grammar", [grp("types")]), tbd())),
        })),

    }),
}