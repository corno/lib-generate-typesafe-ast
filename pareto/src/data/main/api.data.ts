import * as pd from 'pareto-core-data'

import { algorithm, dependent, procedure, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "generateImplementation": algorithm(procedure("this", {}, "GenerateImplementation")),
        "generateInterface": algorithm(procedure("this", {}, "GenerateInterface")),
        
        "unboundGenerateImplementation": algorithm(procedure("this", {}, "GenerateUnboundImplementation"), {}, dependent(null, {
            "generateImplementationIndex": procedure("private", {}, "GenerateImplementationFile"),
            "generateParser": procedure("private", {}, "GenerateImplementationFile"),
            "generateCreateDefaultVisitor": procedure("private", {}, "GenerateImplementationFile"),
            "generateVisit": procedure("private", {}, "GenerateImplementationFile"),
            "resolve": sfunction("resolved", {}, "Resolve"),
        }, {})),
        "unboundGenerateInterface": algorithm(procedure("this", {}, "GenerateInterface2"), {}, dependent(null, {
            "generateFunctions": procedure("private", {}, "GenerateInterfaceFile"),
            "generateInterfaceIndex": procedure("private", {}, "GenerateInterfaceFile"),
            "generateTypes": procedure("private", {}, "GenerateInterfaceFile"),
            "generateVisitorInterface": procedure("private", {}, "GenerateInterfaceFile"),
        }, {})),
        "serialize": algorithm(procedure("this", {}, "Serialize"), {}, dependent(null, {
            // "createFountainPen": functionReference("this", {}, "fp", {}, "CreateWriter"),
            // "serialize": functionReference("this", {}, "definition", {}, "Serialize"),
        }, {})),
        "serializeToNew": algorithm(procedure("this", {}, "Serialize"), {}, dependent(null, {
            // "createFountainPen": functionReference("this", {}, "fp", {}, "CreateWriter"),
            // "serialize": functionReference("this", {}, "definition", {}, "Serialize"),
        }, {})),
    }),
}