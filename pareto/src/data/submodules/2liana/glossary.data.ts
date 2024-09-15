import * as pd from 'pareto-core-data'

import { data, externalTypeReference, glossaryParameter, imp, ref, sfunction, string, taggedUnion, type, typeReference } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'glossary parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "def": imp(), //FIXME imp({ "Annotation": glossaryParameter("Annotation") }),
        "liana": imp(), //FIXME imp({ "Annotation": glossaryParameter("Annotation") }),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "OutAnnotation": type(taggedUnion({
                "source": ref(glossaryParameter("Annotation")),
                "internal": string(),
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
            "Map2Liana": sfunction(externalTypeReference("liana", "Model"), data(externalTypeReference("def", "Grammar"))),
        }),
    },
}