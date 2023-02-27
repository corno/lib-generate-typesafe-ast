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
        'string types': d({
            "text": {},
        }),
        'global types': d({
            // "_Reference": parametrizedType({
            //     "ReferencedType": {},
            // }, group({
            //     "name": prop(string()),
            //     "referencee": prop(computed(typeParameter("ReferencedType")))
            // })),


            "Root": globalType({}, group({
                //"types": prop(dictionary(component("types", {}))),
                //"root type": prop()
                // "root type": prop(parametrizedReference("_Reference", { "ReferencedType": typeReference("types")})),

            })),

            // "types": globalType({}, group({
            //     "value": prop(component("value", {})),
            // })),
            // "simple string": globalType({}, group({
            //     // "default value": prop(string()),
            //     "quoted": prop(boolean()),
            // })),
            // "dictionary": globalType({}, group({
            //     // "key": prop(string()),
            //     "value": prop(component("value", {}))
            // })),
            // "properties": globalType({}, group({
            //     "value": prop(component("value", {}))
            // })),
            // "group": globalType({}, group({
            //     "properties": prop(dictionary(component("properties", {})))
            // })),
            // "list": globalType({}, group({
            //     "value": prop(component("value", {}))
            // })),
            // "multiline string": globalType({}, group({
            // })),
            // "simple string type": globalType({}, group({
            //     // "default value": prop(string()),
            //     "quoted": prop(boolean()),
            // })),
            // "options": globalType({}, group({
            //     "value": prop(component("value", {}))
            // })),
            // "tagged union": globalType({}, group({
            //     // "default option": prop(parametrizedReference("_Reference", { "ReferencedType": typeReference("options")})),
            //     "options": prop(dictionary(component("options", {}))),
            // })),
            // "type reference": globalType({}, group({
            //     // "type": prop(parametrizedReference("_Reference", { "ReferencedType": typeReference("types")})),
            // })),
            // "type": globalType({}, taggedUnion({
            //     "dictionary": component("dictionary", {}),
            //     "group": component("group", {}),
            //     "list": component("list", {}),
            //     "multiline string": component("multiline string", {}),
            //     "simple string": component("simple string type", {}),
            //     "tagged union": component("tagged union", {}),
            //     "type reference": component("type reference", {}),
            // })),
            // "value": globalType({}, group({
            //     "type": prop(component("type", {}))
            // })),

        }),
    },
    'root': r("Root"),
}