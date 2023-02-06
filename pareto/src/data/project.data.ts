import * as pr from "pareto-core-raw"
import {
    string,
    reference,
    boolean,
    array,
    dictionary, group, member, taggedUnion, types, typeReference, func, interfaceReference,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { algorithm, constructor, definitionReference } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pr.wrapRawDictionary

export const project: mproject.TProject = {
    'author': "Corno",
    'description': "generates a typescript parser that provides a typed AST",
    'license': "ISC",

    'pubdependencies': d({
        "glo-pareto-common": {},
        "lib-fountain-pen": {},
        "res-pareto-foreach": {},
    }),
    'type': ['library', {
        'main': {
            'definition': {
                'glossary': {
                    'imports': d({
                        "fp": "lib-fountain-pen",
                        "common": "glo-pareto-common",
                    }),
                    'parameters': d({}),
                    'templates': d({}),
                    'types': types({

                        "Options": dictionary(reference("Value")),
                        "Cardinality": taggedUnion({
                            "one": group({}),
                            "optional": group({}),
                            "array": group({}),
                        }),
                        "SequenceElement": group({
                            "name": member(string()),
                            "value": member(reference("Value"))
                        }),
                        "ValueType": taggedUnion({
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
                        }),
                        "Value": group({
                            "cardinality": member(reference("Cardinality"), true),
                            "type": member(reference("ValueType")),
                        }),
                        "Grammar": group({
                            "globalValueTypes": member(dictionary(reference("ValueType"))),
                            "root": member(reference("Node2"))
                        }),
                        "Node2": group({
                            "name": member(string()),
                            "type": member(taggedUnion({
                                "composite": reference("Composite"),
                                "leaf": reference("Leaf"),
                            }))
                        }),
                        "Leaf": group({
                            "hasTextContent": member(boolean()),

                        }),
                        "Composite": reference("Value"),
                        // "Config": group({
                        //     "fountainPen": member(reference("fp", "Configuration"))
                        // }),
                        "GenerateImplementationData": group({
                            "rootPath": member(reference("common", "Path")),
                            //"fpSettings": member(reference("fp", "Configuration")),
                            "generation": member(group({
                                "grammar": member(reference("Grammar")),
                                "pathToInterface": member(string()),
                            })),
                        }),
                        "GenerateInterfaceData": group({
                            "rootPath": member(reference("common", "Path")),
                            //"fpSettings": member(reference("fp", "Configuration")),
                            "generation": member(group({
                                "grammar": member(reference("Grammar")),
                            })),
                        }),


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
                        "GenerateImplementation": func(typeReference("GenerateImplementationData"), null, interfaceReference("fp", "Line"), null),
                        "GenerateInterface": func(typeReference("GenerateInterfaceData"), null, interfaceReference("fp", "Line"), null),
                    }),
                    'interfaces': d({}),
                },
                "api": {
                    'imports': d({}),
                    'algorithms': d({
                        "generateImplementation": algorithm(definitionReference("GenerateImplementation"), constructor(null, {

                        })),
                        "generateInterface": algorithm(definitionReference("GenerateInterface"), constructor(null, {

                        })),
                    })
                },
            },
        },
        'submodules': d({
            "private": {
                'definition': {
                    'glossary': {
                        'imports': d({
                            "fp": "lib-fountain-pen",
                            "main": "../../../../main",
                        }),
                        'parameters': d({}),
                        'templates': d({}),
                        'types': types({
                            "GenerateInterfaceFileData": group({
                                "grammar": member(reference("main", "Grammar")),
                            }),
                            "GenerateImplementationFileData": group({
                                "grammar": member(reference("main", "Grammar")),
                                "pathToInterface": member(string()),
                            })
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
                        }),
                        'algorithms': d({
                            "generateFunctions": algorithm(definitionReference("GenerateInterfaceFile"), constructor(null, {})),
                            "generateInterfaceIndex": algorithm(definitionReference("GenerateInterfaceFile")),
                            "generateTypes": algorithm(definitionReference("GenerateInterfaceFile"), constructor(null, {
                                "sortedForEach": definitionReference("foreach", "DictionaryForEach"),
                            })),
                            "generateVisitorInterface": algorithm(definitionReference("GenerateInterfaceFile"), constructor(null, {
                                "sortedForEach": definitionReference("foreach", "DictionaryForEach"),
                            })),

                            "generateImplementationIndex": algorithm(definitionReference("GenerateImplementationFile")),
                            "generateParser": algorithm(definitionReference("GenerateImplementationFile"), constructor(null, {
                                "sortedForEach": definitionReference("foreach", "DictionaryForEach"),
                            })),
                            "generateCreateDefaultVisitor": algorithm(definitionReference("GenerateImplementationFile"), constructor(null, {
                                "sortedForEach": definitionReference("foreach", "DictionaryForEach"),
                            })),
                            "generateVisit": algorithm(definitionReference("GenerateImplementationFile"), constructor(null, {
                                "sortedForEach": definitionReference("foreach", "DictionaryForEach"),
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