import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import {
    array, boolean, computed, data, dictionary, func, glossaryParameter, group, interfaceReference, member, method, optional, parametrizedTypeReference, reference, string, taggedUnion, type, typeReference, types
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { algorithm, constructor,  functionReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

const d = pd.d
const a = pd.a

export const $: gproject.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'imports': d({
                "fp": "lib-fountain-pen",
                "definition": "../../../grammar_old",
                "resolved": "../../../grammar_resolved_old",
            }),
            'parameters': d({}),
            'types': d({
                "GenerateInterfaceFileData": type(group({
                    "grammar": member(reference("definition", "Grammar")),
                })),
                "GenerateImplementationFileData": type(group({
                    "grammar": member(reference("resolved", "Grammar")),
                    "pathToInterface": member(string()),
                })),
            }),
            'interfaces': d({}),
            'functions': d({
                "GenerateImplementationFile": func(typeReference("GenerateImplementationFileData"), null, interfaceReference("fp", "Block"), null),
                "GenerateInterfaceFile": func(typeReference("GenerateInterfaceFileData"), null, interfaceReference("fp", "Block"), null),
            }),
        },
        'api': {
            'imports': d({
                "foreach": "res-pareto-foreach",
                //"fp": "lib-fountain-pen",
                "tostring": "res-pareto-tostring",
                "build": "res-pareto-build",
                "this": "./glossary",
            }),
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
        },
    },
    'implementation': ['manual', {}],
}