import * as pr from "pareto-core-raw"
import {
    string,
    reference,
    boolean,
    array,
    dictionary, group, member, taggedUnion, types, typeReference,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import * as mglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

import { } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"
import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pr.wrapRawDictionary

export const project: mproject.TProject = {
    'author': "Corno",
    'description': "generates a typescript parser that provides a typed AST",
    'license': "ISC",

    'pubdependencies': d({
    }),
    'type': ['library', {
        'main': {
            'definition': {
                'glossary': <mglossary.TGlossary>{
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
                        "Config": group({
                            "fountainPen": member(reference("fp", "Configuration"))
                        }),
                        "GenerateImplementationData": group({
                            "rootPath": member(reference("common", "Path")),
                            "fpSettings": member(reference("fp", "Configuration")),
                            "generation": member(group({
                                "grammar": member(reference("Grammar")),
                                "pathToInterface": member(string()),
                            })),
                        }),
                        "GenerateInterfaceData": group({
                            "rootPath": member(reference("common", "Path")),
                            "fpSettings": member(reference("fp", "Configuration")),
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
                    'functions': d({}),
                    'interfaces': d({}),
                },
                "api": {
                    'imports': d({}),
                    'algorithms': d({
                        // "generateImplementation": {
                        //     'definition': ['procedure', ['type', reference("GenerateImplementationData")]],
                        //     'type': ['constructor', {
                        //         'configuration data': ['null', null],
                        //         'dependencies': d({}),
                        //     }]
                        // },
                        // "generateInterface": {
                        //     'definition': ['procedure', ['type', reference("GenerateInterfaceData")]],
                        //     'type': ['constructor', {
                        //         'configuration data': ['null', null],
                        //         'dependencies': d({}),
                        //     }]
                        // }
                    })
                },
            },
        },
        'submodules': d({
            //         "private": {
            //             'definition': {
            //                 'glossary': {
            //                     'imports': d({
            //                         "fp": "lib-fountain-pen",
            //                         "main": "../../main",
            //                     }),
            //                     'types': types({
            //                         "GenerateInterfaceFileData": group({
            //                             "grammar": member(reference("main", "Grammar")),
            //                         }),
            //                         "GenerateImplementationFileData": group({
            //                             "grammar": member(reference("main", "Grammar")),
            //                             "pathToInterface": member(string()),
            //                         })
            //                     }),
            //                     'functions': d({}),
            //                     'callbacks': d({
            //                         "GenerateImplementationFile": {
            //                             'data': ['type', reference("GenerateImplementationFileData")],
            //                             'context': ['import', "fp"],
            //                             'interface': "Block"
            //                         },
            //                         "GenerateInterfaceFile": {
            //                             'data': ['type', reference("GenerateInterfaceFileData")],
            //                             'context': ['import', "fp"],
            //                             'interface': "Block"
            //                         }
            //                     }),
            //                     'interfaces': d({}),
            //                     'pipes': d({}),
            //                 },
            //                 "api": {
            //                     'imports': d({
            //                     }),
            //                     'algorithms': d({
            //                         "generateCreateDefaultVisitor": {
            //                             'definition': ['callback', {
            //                                 'callback': "GenerateInterfaceFile"
            //                             }],
            //                             'type': ['constructor', {
            //                                 'configuration data': ['null', null],
            //                                 'dependencies': d({
        
            //                                 }),
            //                             }]
            //                         },
            //                         "generateFunctions": {
            //                             'definition': ['callback', {
            //                                 'callback': "GenerateInterfaceFile"
            //                             }],
            //                             'type': ['constructor', {
            //                                 'configuration data': ['null', null],
            //                                 'dependencies': d({
        
            //                                 }),
            //                             }]
            //                         },
            //                         "generateImplementationIndex": {
            //                             'definition': ['callback', {
            //                                 'callback': "GenerateImplementationFile"
            //                             }],
            //                             'type': ['constructor', {
            //                                 'configuration data': ['null', null],
            //                                 'dependencies': d({
        
            //                                 }),
            //                             }]
            //                         },
            //                         "generateInterfaceIndex": {
            //                             'definition': ['callback', {
            //                                 'callback': "GenerateInterfaceFile"
            //                             }],
            //                             'type': ['constructor', {
            //                                 'configuration data': ['null', null],
            //                                 'dependencies': d({
        
            //                                 }),
            //                             }]
            //                         },
            //                         "generateParser": {
            //                             'definition': ['callback', {
            //                                 'callback': "GenerateImplementationFile"
            //                             }],
            //                             'type': ['constructor', {
            //                                 'configuration data': ['null', null],
            //                                 'dependencies': d({
        
            //                                 }),
            //                             }]
            //                         },
            //                         "generateTypes": {
            //                             'definition': ['callback', {
            //                                 'callback': "GenerateInterfaceFile"
            //                             }],
            //                             'type': ['constructor', {
            //                                 'configuration data': ['null', null],
            //                                 'dependencies': d({
        
            //                                 }),
            //                             }]
            //                         },
            //                         "generateVisit": {
            //                             'definition': ['callback', {
            //                                 'callback': "GenerateInterfaceFile"
            //                             }],
            //                             'type': ['constructor', {
            //                                 'configuration data': ['null', null],
            //                                 'dependencies': d({
        
            //                                 }),
            //                             }]
            //                         },
            //                         "generateVisitorInterface": {
            //                             'definition': ['callback', {
            //                                 'callback': "GenerateInterfaceFile"
            //                             }],
            //                             'type': ['constructor', {
            //                                 'configuration data': ['null', null],
            //                                 'dependencies': d({
        
            //                                 }),
            //                             }]
            //                         },
            //                     })
            //                 },
            //             },
            //             'implementation': {}
        
            //         },
        }),
        'executables': d({}),
        'test': {
            'dependencies': d({
            }),
        }
    }],
}