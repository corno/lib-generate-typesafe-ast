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
    parametrizedTypeReference,
    typeReference,
    dictionary, group, member, taggedUnion, types, func, data, interfaceReference, inf, method, type, number, glossaryParameter
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as mglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: mglossary.T.Glossary<string> = {
    'parameters': d({
        "Annotation": null
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
    }),
    'interfaces': d({
    }),
    'functions': d({
        "SerializeImplementation": func(parametrizedTypeReference("algorithm", { "Annotation": typeReference("Annotation") }, "Implementation"), null, interfaceReference("fp", "Directory"), null),
        "SerializeStates": func(parametrizedTypeReference("algorithm", { "Annotation": typeReference("Annotation") }, "States"), null, interfaceReference("fp", "Block"), null),
    }),
}