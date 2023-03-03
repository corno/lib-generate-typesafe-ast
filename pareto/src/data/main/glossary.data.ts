import * as pd from 'pareto-core-data'

import {
    null_,
    array,
    string,
    reference,
    boolean,
    typeReference,
    dictionary, group, member, taggedUnion, types, func, data, interfaceReference, inf, method, type, glossaryParameter, parametrizedInterfaceReference, parametrizedTypeReference, nested
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as mglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: mglossary.T.Glossary<string> = {
    'parameters': d({}),
    'types': d({

        // "Config": group({
        //     "fountainPen": member(reference("fp", "Configuration"))
        // }),
        "GenerateImplementationData": type(group({
            "rootPath": member(reference("common", "Path")),
            //"fpSettings": member(reference("fp", "Configuration")),
            "generation": member(group({
                "grammar": member(reference("definition", "Grammar")),
                "pathToInterface": member(string()),
            })),
        })),
        "GenerateInterfaceData": type(group({
            "rootPath": member(reference("common", "Path")),
            //"fpSettings": member(reference("fp", "Configuration")),
            "generation": member(group({
                "grammar": member(reference("definition", "Grammar")),
            })),
        })),
        "SerializeData": type(group({
            "rootPath": member(reference("common", "Path")),
            "grammar": member(reference("definition", "Grammar")),
        })),
    }),
    'functions': d({
        "GenerateImplementation": func(typeReference("GenerateImplementationData"), null, null, null),
        "GenerateInterface": func(typeReference("GenerateInterfaceData"), null, null, null),
        "GenerateUnboundImplementation": func(typeReference("GenerateImplementationData"), null, interfaceReference("fp", "Directory"), null),
        "GenerateInterface2": func(typeReference("GenerateInterfaceData"), null, interfaceReference("fp", "Directory"), null),
        "Serialize": func(typeReference("SerializeData"), null, null, null)
    }),
    'interfaces': d({}),
}