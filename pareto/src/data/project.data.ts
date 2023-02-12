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
                        "GenerateImplementation": func(typeReference("GenerateImplementationData"), null, null, null),
                        "GenerateInterface": func(typeReference("GenerateInterfaceData"), null, null, null),
                        "GenerateImplementation2": func(typeReference("GenerateImplementationData"), null, interfaceReference("fp", "Writer"), null),
                        "GenerateInterface2": func(typeReference("GenerateInterfaceData"), null, interfaceReference("fp", "Writer"), null),
                        "Serialize": func(typeReference("definition", "Grammar"), null, null, null)
                    }),
                    'interfaces': d({}),
                },
                "api": {
                    'imports': d({
                        "definition": "../../submodules/definition",
                        "fp": "lib-fountain-pen",
                        "private": "../../submodules/private",
                    }),
                    'algorithms': d({
                        "generateImplementation": algorithm(definitionReference("GenerateImplementation")),
                        "generateInterface": algorithm(definitionReference("GenerateInterface")),
                        "unboundGenerateImplementation": algorithm(definitionReference("GenerateImplementation2"), constructor(null, {
                            "generateImplementationIndex": definitionReference("private", {}, "GenerateImplementationFile"),
                            "generateParser": definitionReference("private", {}, "GenerateImplementationFile"),
                            "generateCreateDefaultVisitor": definitionReference("private", {}, "GenerateImplementationFile"),
                            "generateVisit": definitionReference("private", {}, "GenerateImplementationFile"),
                        })),
                        "unboundGenerateInterface": algorithm(definitionReference("GenerateInterface2"), constructor(null, {
                            "generateFunctions": definitionReference("private",  {}, "GenerateInterfaceFile"),
                            "generateInterfaceIndex": definitionReference("private", {}, "GenerateInterfaceFile"),
                            "generateTypes": definitionReference("private", {}, "GenerateInterfaceFile"),
                            "generateVisitorInterface": definitionReference("private", {}, "GenerateInterfaceFile"),
                        })),
                        "serialize": algorithm(definitionReference("Serialize"), constructor(null, {
                            // "createFountainPen": definitionReference("fp", {}, "CreateWriter"),
                            // "serialize": definitionReference("definition", {}, "Serialize"),
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
                            "fp": "lib-fountain-pen",
                        }),
                        'parameters': d({}),
                        'types': d({
                            "ValueType": type( taggedUnion({
                                "reference": group({
                                    "name": member(string())
                                }),
                                "choice": group({
                                    "options": member(dictionary(reference("Value")))
                                }),
                                "node": reference("Node2"),
                                "sequence": group({
                                    "elements": member(array(group({
                                        "name": member(string()),
                                        "value": member(reference("Value"))
                                    })))
                                })
                            })),
                            "Value": type( group({
                                "cardinality": member(taggedUnion({
                                    "one": group({}),
                                    "optional": group({}),
                                    "array": group({}),
                                }), true),
                                "type": member(reference("ValueType")),
                            })),
                            "Grammar": type( group({
                                "globalValueTypes": member(dictionary(reference("ValueType"))),
                                "root": member(reference("Node2"))
                            })),
                            "Node2": type( group({
                                "name": member(string()),
                                "type": member(taggedUnion({
                                    "composite": reference("Value"),
                                    "leaf": group({
                                        "hasTextContent": member(boolean()),
                                    }),
                                }))
                            })),
                        }),
                        'interfaces': d({}),
                        'functions': d({
                            "Serialize": func(typeReference("Grammar"), null, interfaceReference("fp", "Block"), null)
                        }),
                    },
                    "api": {
                        'imports': d({
                            "foreach": "res-pareto-foreach",
                        }),
                        'algorithms': d({
                            "serialize": algorithm(definitionReference("Serialize"), constructor(null, {
                                "dictionaryForEach": definitionReference("foreach", {}, "DictionaryForEach"),
                            }))
                        })
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