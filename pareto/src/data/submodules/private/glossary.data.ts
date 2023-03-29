import * as pd from 'pareto-core-data'

import { data, externalTypeReference, group, imp, member, procedure, ref, sExternalInterfaceReference, sInterfaceReference, string, type, typeReference } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "definition": imp({}),
        "fp": imp({}),
        "resolved": imp({}),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "GenerateInterfaceFileData": type(group({
                "grammar": member(ref(externalTypeReference("definition", "Grammar"))),
            })),
            "GenerateImplementationFileData": type(group({
                "grammar": member(ref(externalTypeReference("resolved", "Grammar"))),
                "pathToInterface": member(string()),
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
            "GenerateImplementationFile": procedure(data(typeReference("GenerateImplementationFileData")), sExternalInterfaceReference("fp", "Block")),
            "GenerateInterfaceFile": procedure(data(typeReference("GenerateInterfaceFileData")), sExternalInterfaceReference("fp", "Block")),

        }),
    },
}