import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"
import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

import {
    array, boolean, computed, data, dictionary, func, glossaryParameter, group, interfaceReference, member, method, optional, parametrizedTypeReference, reference, string, taggedUnion, type, typeReference, types
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { algorithm, constructor, functionReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

const d = pd.d
const a = pd.a

export const $: gproject.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'imports': d({
                "fp": "lib-fountain-pen",
                "common": "glo-pareto-common",
                "definition": "../../../submodules/grammar_old",
            }),
            'parameters': d({}),
            'types': d({

                // "Config": group({
                //     "fountainPen": member(reference("fp", "Configuration"))
                // }),
                "GenerateImplementationData": type(group({
                    "rootPath": member(reference("common", "Path")),
                    //"fpSettings": member(reference("fp", "Configuration")),
                    "generation": member(group({
                        "grammar": member(reference("definition", "Grammar")),
                        "pathToInterface": member(string()),
                    })),
                })),
                "GenerateInterfaceData": type(group({
                    "rootPath": member(reference("common", "Path")),
                    //"fpSettings": member(reference("fp", "Configuration")),
                    "generation": member(group({
                        "grammar": member(reference("definition", "Grammar")),
                    })),
                })),
                "SerializeData": type(group({
                    "rootPath": member(reference("common", "Path")),
                    "grammar": member(reference("definition", "Grammar")),
                })),
            }),
            'functions': d({
                "GenerateImplementation": func(typeReference("GenerateImplementationData"), null, null, null),
                "GenerateInterface": func(typeReference("GenerateInterfaceData"), null, null, null),
                "GenerateUnboundImplementation": func(typeReference("GenerateImplementationData"), null, interfaceReference("fp", "Directory"), null),
                "GenerateInterface2": func(typeReference("GenerateInterfaceData"), null, interfaceReference("fp", "Directory"), null),
                "Serialize": func(typeReference("SerializeData"), null, null, null)
            }),
            'interfaces': d({}),
        },
        'api': {
            'imports': d({
                "definition": "../../submodules/grammar_old",
                "resolved": "../../submodules/grammar_resolved_old",
                "fp": "lib-fountain-pen",
                "private": "../../submodules/private",
                "this": "./glossary",
            }),
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
                }))
            })
        },
    },
    'implementation': ['typescript', {}],
}