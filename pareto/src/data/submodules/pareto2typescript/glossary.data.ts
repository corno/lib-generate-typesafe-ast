import * as pd from 'pareto-core-data'

import { data, externalTypeReference, glossaryParameter, imp, procedure, sExternalInterfaceReference, type } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null
    }),
    'imports': d({
        "algorithm": imp({ "Annotation": glossaryParameter("Annotation") }),
        "fp": imp({}),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "SerializeImplementation": procedure(data(externalTypeReference("algorithm", "Implementation")), sExternalInterfaceReference("fp", "Directory")),
            "SerializeStates": procedure(data(externalTypeReference("algorithm", "States")), sExternalInterfaceReference("fp", "Block")),
        }),
    },
}