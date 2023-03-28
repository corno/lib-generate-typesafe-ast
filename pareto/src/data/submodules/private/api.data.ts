import * as pd from 'pareto-core-data'

import { algorithm, dependent, procedure, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "generateFunctions": algorithm(procedure("this", {}, "GenerateInterfaceFile"), {}, dependent(null, {}, {})),
        "generateInterfaceIndex": algorithm(procedure("this", {}, "GenerateInterfaceFile")),
        "generateTypes": algorithm(procedure("this", {}, "GenerateInterfaceFile"), {}, dependent(null, {
            "sortedForEach": procedure("foreach", {}, "DictionaryForEach"),
            "joinNestedStrings": sfunction("tostring", {}, "JoinNestedStrings"),
        }, {})),
        "generateVisitorInterface": algorithm(procedure("this", {}, "GenerateInterfaceFile"), {}, dependent(null, {
            "sortedForEach": procedure("foreach", {}, "DictionaryForEach"),
        }, {})),

        "generateImplementationIndex": algorithm(procedure("this", {}, "GenerateImplementationFile")),
        "generateParser": algorithm(procedure("this", {}, "GenerateImplementationFile"), {}, dependent(null, {
            "getKeysAsString": sfunction("tostring", {}, "GetKeysAsString"),
            "sortedForEach": procedure("foreach", {}, "DictionaryForEach"),
            "buildDictionary": sfunction("build", {}, "BuildSafeDictionary"),
        }, {})),
        "generateCreateDefaultVisitor": algorithm(procedure("this", {}, "GenerateImplementationFile"), {}, dependent(null, {
            "sortedForEach": procedure("foreach", {}, "DictionaryForEach"),
        }, {})),
        "generateVisit": algorithm(procedure("this", {}, "GenerateImplementationFile"), {}, dependent(null, {
            "sortedForEach": procedure("foreach", {}, "DictionaryForEach"),
        }, {})),
    }),
}