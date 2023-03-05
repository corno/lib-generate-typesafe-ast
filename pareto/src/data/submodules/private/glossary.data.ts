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
    dictionary, group, member, taggedUnion, types, func, data, interfaceReference, inf, type, number, glossaryParameter
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as mglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: mglossary.T.Glossary<string> = {
    'parameters': d({}),
    'types': d({
        "GenerateInterfaceFileData": type(group({
            "grammar": member(reference("definition", "Grammar")),
        })),
        "GenerateImplementationFileData": type(group({
            "grammar": member(reference("resolved", "Grammar")),
            "pathToInterface": member(string()),
        })),
    }),
    'builders': d({}),
    'interfaces': d({}),
    'functions': d({
        // "GenerateImplementationFile": func(typeReference("GenerateImplementationFileData"), null, interfaceReference("fp", "Block"), null),
        // "GenerateInterfaceFile": func(typeReference("GenerateInterfaceFileData"), null, interfaceReference("fp", "Block"), null),
    }),
}