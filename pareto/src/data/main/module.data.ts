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
                "common": "glo-pareto-common",
                "definition": "../../../submodules/definition",
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
                "GenerateUnboundImplementation": func(typeReference("GenerateImplementationData"), null, interfaceReference("fp", "Writer"), null),
                "GenerateInterface2": func(typeReference("GenerateInterfaceData"), null, interfaceReference("fp", "Writer"), null),
                "Serialize": func(typeReference("SerializeData"), null, null, null)
            }),
            'interfaces': d({}),
        },
        'api': {
            'imports': d({
                "definition": "../../submodules/definition",
                "resolved": "../../submodules/resolved",
                "fp": "lib-fountain-pen",
                "private": "../../submodules/private",
            }),
            'algorithms': d({
                "generateImplementation": algorithm(definitionReference("GenerateImplementation")),
                "generateInterface": algorithm(definitionReference("GenerateInterface")),
                "unboundGenerateImplementation": algorithm(definitionReference("GenerateUnboundImplementation"), constructor(null, {
                    "generateImplementationIndex": definitionReference("private", {}, "GenerateImplementationFile"),
                    "generateParser": definitionReference("private", {}, "GenerateImplementationFile"),
                    "generateCreateDefaultVisitor": definitionReference("private", {}, "GenerateImplementationFile"),
                    "generateVisit": definitionReference("private", {}, "GenerateImplementationFile"),
                    "resolve": definitionReference("resolved", {}, "Resolve"),
                })),
                "unboundGenerateInterface": algorithm(definitionReference("GenerateInterface2"), constructor(null, {
                    "generateFunctions": definitionReference("private", {}, "GenerateInterfaceFile"),
                    "generateInterfaceIndex": definitionReference("private", {}, "GenerateInterfaceFile"),
                    "generateTypes": definitionReference("private", {}, "GenerateInterfaceFile"),
                    "generateVisitorInterface": definitionReference("private", {}, "GenerateInterfaceFile"),
                })),
                "serialize": algorithm(definitionReference("Serialize"), constructor(null, {
                    // "createFountainPen": definitionReference("fp", {}, "CreateWriter"),
                    // "serialize": definitionReference("definition", {}, "Serialize"),
                })),
                "serializeToNew": algorithm(definitionReference("Serialize"), constructor(null, {
                    // "createFountainPen": definitionReference("fp", {}, "CreateWriter"),
                    // "serialize": definitionReference("definition", {}, "Serialize"),
                }))
            })
        },
    },
}