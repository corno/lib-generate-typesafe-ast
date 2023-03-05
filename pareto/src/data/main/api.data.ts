import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'algorithms': d({
        "generateImplementation": algorithm(functionReference("this", {}, "GenerateImplementation")),
        "generateInterface": algorithm(functionReference("this", {}, "GenerateInterface")),
        "unboundGenerateImplementation": algorithm(functionReference("this", {}, "GenerateUnboundImplementation"), constructor(null, {
            "generateImplementationIndex": functionReference("private", {}, "GenerateImplementationFile"),
            "generateParser": functionReference("private", {}, "GenerateImplementationFile"),
            "generateCreateDefaultVisitor": functionReference("private", {}, "GenerateImplementationFile"),
            "generateVisit": functionReference("private", {}, "GenerateImplementationFile"),
            "resolve": functionReference("resolved", {}, "Resolve"),
        })),
        "unboundGenerateInterface": algorithm(functionReference("this", {}, "GenerateInterface2"), constructor(null, {
            "generateFunctions": functionReference("private", {}, "GenerateInterfaceFile"),
            "generateInterfaceIndex": functionReference("private", {}, "GenerateInterfaceFile"),
            "generateTypes": functionReference("private", {}, "GenerateInterfaceFile"),
            "generateVisitorInterface": functionReference("private", {}, "GenerateInterfaceFile"),
        })),
        "serialize": algorithm(functionReference("this", {}, "Serialize"), constructor(null, {
            // "createFountainPen": functionReference("this", {}, "fp", {}, "CreateWriter"),
            // "serialize": functionReference("this", {}, "definition", {}, "Serialize"),
        })),
        "serializeToNew": algorithm(functionReference("this", {}, "Serialize"), constructor(null, {
            // "createFountainPen": functionReference("this", {}, "fp", {}, "CreateWriter"),
            // "serialize": functionReference("this", {}, "definition", {}, "Serialize"),
        })),
    }),
}