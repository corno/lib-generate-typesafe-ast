import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'algorithms': d({
        "generateFunctions": algorithm(functionReference("this", {}, "GenerateInterfaceFile"), constructor(null, {})),
        "generateInterfaceIndex": algorithm(functionReference("this", {}, "GenerateInterfaceFile")),
        "generateTypes": algorithm(functionReference("this", {}, "GenerateInterfaceFile"), constructor(null, {
            "sortedForEach": functionReference("foreach", {}, "DictionaryForEach"),
            "joinNestedStrings": functionReference("tostring", {}, "JoinNestedStrings"),
        })),
        "generateVisitorInterface": algorithm(functionReference("this", {}, "GenerateInterfaceFile"), constructor(null, {
            "sortedForEach": functionReference("foreach", {}, "DictionaryForEach"),
        })),

        "generateImplementationIndex": algorithm(functionReference("this", {}, "GenerateImplementationFile")),
        "generateParser": algorithm(functionReference("this", {}, "GenerateImplementationFile"), constructor(null, {
            "getKeysAsString": functionReference("tostring", {}, "GetKeysAsString"),
            "sortedForEach": functionReference("foreach", {}, "DictionaryForEach"),
            "buildDictionary": functionReference("build", {}, "BuildDictionary"),
        })),
        "generateCreateDefaultVisitor": algorithm(functionReference("this", {}, "GenerateImplementationFile"), constructor(null, {
            "sortedForEach": functionReference("foreach", {}, "DictionaryForEach"),
        })),
        "generateVisit": algorithm(functionReference("this", {}, "GenerateImplementationFile"), constructor(null, {
            "sortedForEach": functionReference("foreach", {}, "DictionaryForEach"),
        })),
    })
}