import * as pr from 'pareto-core-raw'
import {
    string,
    reference,
    boolean,
    array,
    dictionary, group, member, taggedUnion, types, typeReference, func, interfaceReference, type,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { algorithm, constructor, definitionReference } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pr.wrapRawDictionary

export const project: mproject.T.Project = {
    'author': "Corno",
    'description': "generates a typescript parser that provides a typed AST",
    'license': "ISC",

    'pubdependencies': d({
        "glo-pareto-common": {},
        "lib-fountain-pen": {},
        "res-pareto-foreach": {},
        "res-pareto-tostring": {},
    }),
    'type': ['library', {
        'main': {
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
                        "GenerateImplementationData": type( group({
                            "rootPath": member(reference("common", "Path")),
                            //"fpSettings": member(reference("fp", "Configuration")),
                            "generation": member(group({
                                "grammar": member(reference("definition", "Grammar")),
                                "pathToInterface": member(string()),
                            })),
                        })),
                        "GenerateInterfaceData": type( group({
                            "rootPath": member(reference("common", "Path")),
                            //"fpSettings": member(reference("fp", "Configuration")),
                            "generation": member(group({
                                "grammar": member(reference("definition", "Grammar")),
                            })),
                        })),


                        // export type FGenerateImplementation = (
                        //     $: {
                        //         readonly "rootPath": fs.TPath,
                        //         readonly "fpSettings": fp.TConfiguration,
                        //         readonly "generation": {
                        //             readonly "grammar": TGrammar
                        //             readonly "pathToInterface": string
                        //         }

                        //     },
                        //     $d: DDependencies,
                        //     $a: pt.ProcessAsyncValue,
                        // ) => void
                    }),
                    'functions': d({
                        "GenerateImplementation": func(typeReference("GenerateImplementationData"), null, interfaceReference("fp", "Writer"), null),
                        "GenerateInterface": func(typeReference("GenerateInterfaceData"), null, interfaceReference("fp", "Writer"), null),
                    }),
                    'interfaces': d({}),
                },
                "api": {
                    'imports': d({
                        "private": "../../submodules/private",
                        "definition": "../../submodules/definition",
                    }),
                    'algorithms': d({
                        "generateImplementation": algorithm(definitionReference("GenerateImplementation"), constructor(null, {

                            "generateImplementationIndex": definitionReference("private", {}, "GenerateImplementationFile"),
                            "generateParser": definitionReference("private", {}, "GenerateImplementationFile"),
                            "generateCreateDefaultVisitor": definitionReference("private", {}, "GenerateImplementationFile"),
                            "generateVisit": definitionReference("private", {}, "GenerateImplementationFile"),
                        })),
                        "generateInterface": algorithm(definitionReference("GenerateInterface"), constructor(null, {
                            "generateFunctions": definitionReference("private",  {}, "GenerateInterfaceFile"),
                            "generateInterfaceIndex": definitionReference("private", {}, "GenerateInterfaceFile"),
                            "generateTypes": definitionReference("private", {}, "GenerateInterfaceFile"),
                            "generateVisitorInterface": definitionReference("private", {}, "GenerateInterfaceFile"),
                        }))
                    })
                },
            },
        },
        'submodules': d({
            "definition": {
                'definition': {
                    'glossary': {
                        'imports': d({
                        }),
                        'parameters': d({}),
                        'types': d({
                            "Options": type( dictionary(reference("Value"))),
                            "Cardinality": type( taggedUnion({
                                "one": group({}),
                                "optional": group({}),
                                "array": group({}),
                            })),
                            "SequenceElement": type( group({
                                "name": member(string()),
                                "value": member(reference("Value"))
                            })),
                            "ValueType": type( taggedUnion({
                                "reference": group({
                                    "name": member(string())
                                }),
                                "choice": group({
                                    "options": member(reference("Options"))
                                }),
                                "node": reference("Node2"),
                                "sequence": group({
                                    "elements": member(array(reference("SequenceElement")))
                                })
                            })),
                            "Value": type( group({
                                "cardinality": member(reference("Cardinality"), true),
                                "type": member(reference("ValueType")),
                            })),
                            "Grammar": type( group({
                                "globalValueTypes": member(dictionary(reference("ValueType"))),
                                "root": member(reference("Node2"))
                            })),
                            "Node2": type( group({
                                "name": member(string()),
                                "type": member(taggedUnion({
                                    "composite": reference("Composite"),
                                    "leaf": reference("Leaf"),
                                }))
                            })),
                            "Leaf": type( group({
                                "hasTextContent": member(boolean()),

                            })),
                            "Composite": type( reference("Value")),
                        }),
                        'interfaces': d({}),
                        'functions': d({}),
                    },
                    "api": {
                        'imports': d({}),
                        'algorithms': d({})
                    },
                },
            },
            "private": {
                'definition': {
                    'glossary': {
                        'imports': d({
                            "fp": "lib-fountain-pen",
                            "definition": "../../../definition",
                        }),
                        'parameters': d({}),
                        'types': d({
                            "GenerateInterfaceFileData": type( group({
                                "grammar": member(reference("definition", "Grammar")),
                            })),
                            "GenerateImplementationFileData": type( group({
                                "grammar": member(reference("definition", "Grammar")),
                                "pathToInterface": member(string()),
                            })),
                        }),
                        'interfaces': d({}),
                        'functions': d({
                            "GenerateImplementationFile": func(typeReference("GenerateImplementationFileData"), null, interfaceReference("fp", "Block"), null),
                            "GenerateInterfaceFile": func(typeReference("GenerateInterfaceFileData"), null, interfaceReference("fp", "Block"), null),
                        }),
                    },
                    "api": {
                        'imports': d({
                            "foreach": "res-pareto-foreach",
                            "fp": "lib-fountain-pen",
                            "tostring": "res-pareto-tostring",
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
            },
        }),
        'executables': d({}),
        'test': {
            'dependencies': d({
            }),
        }
    }],
}