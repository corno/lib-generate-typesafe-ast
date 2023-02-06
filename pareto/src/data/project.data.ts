import * as pr from "pareto-core-raw"
import {
    externalReference as er,
    string as str,
    nullType,
    type,
    reference as ref,
    boolean as bln,
    number as nr,
    nested,
    array,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"
import { dictionary, group, member, taggedUnion, types, _function } from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import {  } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"
import * as NProject from "lib-pareto-typescript-project/dist/modules/project"
const wd = pr.wrapRawDictionary


export const project: NProject.TProject = {
    'type': ["library", null],
    'modules': wd({
        "main": {
            'definition': {
                'glossary': {
                    'imports': wd({
                        "fp": "lib-fountain-pen",
                        "common": "glo-pareto-common",
                    }),
                    'types': types({

                        "Options": dictionary(ref("Value")),
                        "Cardinality": taggedUnion({
                            "one": nullType(),
                            "optional": nullType(),
                            "array": nullType(),
                        }),
                        "SequenceElement": group({
                            "name": member(str()),
                            "value": member(ref("Value"))
                        }),
                        "ValueType": taggedUnion({
                            "reference": type(group({
                                "name": member(str())
                            })),
                            "choice": type(group({
                                "options": member(ref("Options"))
                            })),
                            "node": type(ref("Node2")),
                            "sequence": type(group({
                                "elements": member(array(ref("SequenceElement")))
                            }))
                        }),
                        "Value": group({
                            "cardinality": member(ref("Cardinality"), true),
                            "type": member(ref("ValueType")),
                        }),
                        "Grammar": group({
                            "globalValueTypes": member(dictionary(ref("ValueType"))),
                            "root": member(ref("Node2"))
                        }),
                        "Node2": group({
                            "name": member(str()),
                            "type": member(taggedUnion({
                                "composite": type(ref("Composite")),
                                "leaf": type(ref("Leaf"))
                            }))
                        }),
                        "Leaf": group({
                            "hasTextContent": member(bln()),

                        }),
                        "Composite": ref("Value"),
                        "Config": group({
                            "fountainPen": member(er("fp", "Configuration"))
                        }),
                        "GenerateImplementationData": group({
                            "rootPath": member(er("common", "Path")),
                            "fpSettings": member(er("fp", "Configuration")),
                            "generation": member(group({
                                "grammar": member(ref("Grammar")),
                                "pathToInterface": member(str()),
                            })),
                        }),
                        "GenerateInterfaceData": group({
                            "rootPath": member(er("common", "Path")),
                            "fpSettings": member(er("fp", "Configuration")),
                            "generation": member(group({
                                "grammar": member(ref("Grammar")),
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
                    'functions': wd({}),
                    'callbacks': wd({
                    }),
                    'interfaces': wd({}),
                    'pipes': wd({}),
                },
                "api": {
                    'imports': wd({}),
                    'algorithms': wd({
                        "generateImplementation": {
                            'definition': ['procedure', ['type', reference("GenerateImplementationData")]],
                            'type': ['constructor', {
                                'configuration data': ['null', null],
                                'dependencies': wd({}),
                            }]
                        },
                        "generateInterface": {
                            'definition': ['procedure', ['type', reference("GenerateInterfaceData")]],
                            'type': ['constructor', {
                                'configuration data': ['null', null],
                                'dependencies': wd({}),
                            }]
                        }
                    })
                },
            },
            'implementation': {}

        },
        "private": {
            'definition': {
                'glossary': {
                    'imports': wd({
                        "fp": "lib-fountain-pen",
                        "main": "../../main",
                    }),
                    'types': types({
                        "GenerateInterfaceFileData": group({
                            "grammar": member(er("main", "Grammar")),
                        }),
                        "GenerateImplementationFileData": group({
                            "grammar": member(er("main", "Grammar")),
                            "pathToInterface": member(str()),
                        })
                    }),
                    'functions': wd({}),
                    'callbacks': wd({
                        "GenerateImplementationFile": {
                            'data': ['type', reference("GenerateImplementationFileData")],
                            'context': ['import', "fp"],
                            'interface': "Block"
                        },
                        "GenerateInterfaceFile": {
                            'data': ['type', reference("GenerateInterfaceFileData")],
                            'context': ['import', "fp"],
                            'interface': "Block"
                        }
                    }),
                    'interfaces': wd({}),
                    'pipes': wd({}),
                },
                "api": {
                    'imports': wd({
                    }),
                    'algorithms': wd({
                        "generateCreateDefaultVisitor": {
                            'definition': ['callback', {
                                'callback': "GenerateInterfaceFile"
                            }],
                            'type': ['constructor', {
                                'configuration data': ['null', null],
                                'dependencies': wd({

                                }),
                            }]
                        },
                        "generateFunctions": {
                            'definition': ['callback', {
                                'callback': "GenerateInterfaceFile"
                            }],
                            'type': ['constructor', {
                                'configuration data': ['null', null],
                                'dependencies': wd({

                                }),
                            }]
                        },
                        "generateImplementationIndex": {
                            'definition': ['callback', {
                                'callback': "GenerateImplementationFile"
                            }],
                            'type': ['constructor', {
                                'configuration data': ['null', null],
                                'dependencies': wd({

                                }),
                            }]
                        },
                        "generateInterfaceIndex": {
                            'definition': ['callback', {
                                'callback': "GenerateInterfaceFile"
                            }],
                            'type': ['constructor', {
                                'configuration data': ['null', null],
                                'dependencies': wd({

                                }),
                            }]
                        },
                        "generateParser": {
                            'definition': ['callback', {
                                'callback': "GenerateImplementationFile"
                            }],
                            'type': ['constructor', {
                                'configuration data': ['null', null],
                                'dependencies': wd({

                                }),
                            }]
                        },
                        "generateTypes": {
                            'definition': ['callback', {
                                'callback': "GenerateInterfaceFile"
                            }],
                            'type': ['constructor', {
                                'configuration data': ['null', null],
                                'dependencies': wd({

                                }),
                            }]
                        },
                        "generateVisit": {
                            'definition': ['callback', {
                                'callback': "GenerateInterfaceFile"
                            }],
                            'type': ['constructor', {
                                'configuration data': ['null', null],
                                'dependencies': wd({

                                }),
                            }]
                        },
                        "generateVisitorInterface": {
                            'definition': ['callback', {
                                'callback': "GenerateInterfaceFile"
                            }],
                            'type': ['constructor', {
                                'configuration data': ['null', null],
                                'dependencies': wd({

                                }),
                            }]
                        },
                    })
                },
            },
            'implementation': {}

        },
    }),
    'main': "main"
}