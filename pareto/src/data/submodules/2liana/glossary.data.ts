import * as pd from 'pareto-core-data'

import {
    null_,
    array,
    string,
    reference,
    boolean,
    parametrizedTypeReference,
    typeParameter,
    computed,
    parametrizedType,
    typeReference,
    dictionary, group, member, taggedUnion, types, func, data, interfaceReference, inf, type, number, glossaryParameter
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: gglossary.T.Glossary<string> = {
    'parameters': d({
        "Annotation": null,
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
        "OutAnnotation": type(taggedUnion({
            "source": glossaryParameter("Annotation"),
            "internal": string(),
        })),
    }),
    'builders': d({}),
    'interfaces': d({}),
    'functions': d({
        "Map2Liana": func(parametrizedTypeReference("def", { "Annotation": typeReference("Annotation") }, "Grammar"), null, null, data(parametrizedTypeReference("liana", { "Annotation": typeReference("OutAnnotation") }, "Model"), false)),
    }),
}