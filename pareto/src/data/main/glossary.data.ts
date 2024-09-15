import * as pd from 'pareto-core-data'

import { group, member, string, type, ref, typeReference, externalTypeReference, procedure, sInterfaceReference, data, imp, sInterface, sInterfaceMethod } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'glossary parameters': d({}),
    'imports': d({
        "common": imp(),
        "definition": imp(),
        "fp": imp(),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({

            // "Config": group({
            //     "fountainPen": member(ref(typeReference(("fp", "Configuration")),
            // }),
            "GenerateImplementationData": type(group({
                "rootPath": member(ref(externalTypeReference("common", "Path"))),
                //"fpSettings": member(ref(typeReference(("fp", "Configuration")),
                "generation": member(group({
                    "grammar": member(ref(externalTypeReference("definition", "Grammar"))),
                    "pathToInterface": member(string()),
                })),
            })),
            "GenerateInterfaceData": type(group({
                "rootPath": member(ref(externalTypeReference("common", "Path"))),
                //"fpSettings": member(ref(typeReference(("fp", "Configuration")),
                "generation": member(group({
                    "grammar": member(ref(externalTypeReference("definition", "Grammar"))),
                })),
            })),
            "SerializeData": type(group({
                "rootPath": member(ref(externalTypeReference("common", "Path"))),
                "grammar": member(ref(externalTypeReference("definition", "Grammar"))),
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({
            "Nothing": sInterface(sInterfaceMethod(null)),
        }),
        'algorithms': d({
            "GenerateImplementation": procedure(data(typeReference("GenerateImplementationData")), sInterfaceReference("Nothing")),
            "GenerateInterface": procedure(data(typeReference("GenerateInterfaceData")), sInterfaceReference("Nothing")),
            // "GenerateUnboundImplementation": func(typeref(typeReference(("GenerateImplementationData"), null, interfaceref(typeReference(("fp", "Directory"), null),
            // "GenerateInterface2": func(typeref(typeReference(("GenerateInterfaceData"), null, interfaceref(typeReference(("fp", "Directory"), null),
        }),
    },
}