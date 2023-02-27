import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"
import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

import {
    array, boolean, computed, data, dictionary, func, glossaryParameter, group, interfaceReference, member, method, optional, parametrizedTypeReference, reference, string, taggedUnion, type, typeReference, types
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { algorithm, constructor, definitionReference } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

const d = pd.d
const a = pd.a

export const $: gproject.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'imports': d({
                "fp": "lib-fountain-pen",
                "definition": "../../../definition",
                "resolved": "../../../resolved",
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
            }),
            'algorithms': d({
                "generateFunctions": algorithm(definitionReference("GenerateInterfaceFile"), constructor(null, {})),
                "generateInterfaceIndex": algorithm(definitionReference("GenerateInterfaceFile")),
                "generateTypes": algorithm(definitionReference("GenerateInterfaceFile"), constructor(null, {
                    "sortedForEach": definitionReference("foreach", {}, "DictionaryForEach"),
                    "joinNestedStrings": definitionReference("tostring", {}, "JoinNestedStrings"),
                })),
                "generateVisitorInterface": algorithm(definitionReference("GenerateInterfaceFile"), constructor(null, {
                    "sortedForEach": definitionReference("foreach", {}, "DictionaryForEach"),
                })),

                "generateImplementationIndex": algorithm(definitionReference("GenerateImplementationFile")),
                "generateParser": algorithm(definitionReference("GenerateImplementationFile"), constructor(null, {
                    "getKeysAsString": definitionReference("tostring", {}, "GetKeysAsString"),
                    "sortedForEach": definitionReference("foreach", {}, "DictionaryForEach"),
                    "buildDictionary": definitionReference("build", {}, "BuildDictionary"),
                })),
                "generateCreateDefaultVisitor": algorithm(definitionReference("GenerateImplementationFile"), constructor(null, {
                    "sortedForEach": definitionReference("foreach", {}, "DictionaryForEach"),
                })),
                "generateVisit": algorithm(definitionReference("GenerateImplementationFile"), constructor(null, {
                    "sortedForEach": definitionReference("foreach", {}, "DictionaryForEach"),
                })),
            })
        },
    },
    'implementation': ['manual', {}],
}