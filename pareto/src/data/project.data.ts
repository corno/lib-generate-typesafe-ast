import {
    array, boolean, computed, data, dictionary, func, glossaryParameter, group, interfaceReference, member, method, optional, reference, string, taggedUnion, type, typeReference, types
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"
import * as pd from 'pareto-core-data'

import { algorithm, constructor, definitionReference } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: gproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "generates a typescript parser that provides a typed AST",
    'license': "ISC",

    'dependencies': d({
        "glo-pareto-common": {},
        "lib-fountain-pen": {},
        "res-pareto-foreach": {},
        "res-pareto-tostring": {},
        "res-pareto-build": {},
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
                "api": {
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
                            "ValueType": type(taggedUnion({
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
                            "Value": type(group({
                                "cardinality": member(taggedUnion({
                                    "one": group({}),
                                    "optional": group({}),
                                    "array": group({}),
                                }), true),
                                "type": member(reference("ValueType")),
                            })),
                            "Grammar": type(group({
                                "globalValueTypes": member(dictionary(reference("ValueType"))),
                                "root": member(reference("Node2"))
                            })),
                            "Node2": type(group({
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
                            })),
                            "serializeToNew": algorithm(definitionReference("Serialize"), constructor(null, {
                                "dictionaryForEach": definitionReference("foreach", {}, "DictionaryForEach"),
                            }))
                        })
                    },
                },
            },
            "definitionNew": {
                'definition': {
                    'glossary': {
                        'imports': d({
                            "fp": "lib-fountain-pen",
                        }),
                        'parameters': d({
                            "Annotation": {},
                        }),
                        'types': d({
                            "Annotation": type(glossaryParameter("Annotation")),
                            "Value": type(taggedUnion({
                                "component": group({
                                    "name": member(string()),
                                    "annotation": member(reference("Annotation")),
                                }),
                                "choice": group({
                                    "options": member(dictionary(reference("Value")))
                                }),
                                "node": group({
                                    "name": member(string()),
                                    "type": member(taggedUnion({
                                        "composite": reference("Value"),
                                        "leaf": group({
                                            "hasTextContent": member(boolean()),
                                        }),
                                    }))
                                }),
                                "group": group({
                                    "members": member(dictionary(group({
                                        "value": member(reference("Value"))
                                    })))
                                }),
                                "array": reference("Value"),
                                "optional": reference("Value"),
                            })),
                            "Grammar": type(group({
                                "types": member(dictionary(reference("Value"))),
                                "root": member(string())
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
                        })
                    },
                },
            },
            "resolved": {
                'definition': {
                    'glossary': {
                        'imports': d({
                            "fp": "lib-fountain-pen",
                            "definition": "../../../definition",
                        }),
                        'parameters': d({}),
                        'types': d({
                            "ValueType": type(taggedUnion({
                                "reference": group({
                                    "referencee": member(computed(reference("ValueType"))),
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
                            "Value": type(group({
                                "cardinality": member(taggedUnion({
                                    "one": group({}),
                                    "optional": group({}),
                                    "array": group({}),
                                }), true),
                                "type": member(reference("ValueType")),
                            })),
                            "Grammar": type(group({
                                "globalValueTypes": member(dictionary(reference("ValueType"))),
                                "root": member(reference("Node2"))
                            })),
                            "Node2": type(group({
                                "name": member(string()),
                                "type": member(taggedUnion({
                                    "composite": reference("Value"),
                                    "leaf": group({
                                        "hasTextContent": member(boolean()),
                                    }),
                                }))
                            })),
                            "PossibleGrammar": type(optional(reference("Grammar"))),
                            "ResolveError": type(group({
                                "type": member(taggedUnion({
                                    "no such global value type": string(),
                                }))
                            }))
                        }),
                        'interfaces': d({
                            "OnResolveError": method(typeReference("ResolveError"))
                        }),
                        'functions': d({
                            "Resolve": func(typeReference("definition", "Grammar"), null, interfaceReference("OnResolveError"), data(typeReference("PossibleGrammar"), false))
                        }),
                    },
                    "api": {
                        'imports': d({
                            "foreach": "res-pareto-foreach",
                        }),
                        'algorithms': d({
                            "resolve": algorithm(definitionReference("Resolve"))
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
                    "api": {
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
            },
        }),
        'executables': d({}),
        'test': {
            'dependencies': d({
            }),
            'glossary': {
                'functions': d({}),
                'imports': d({}),
                'parameters': d({}),
                'types': d({}),
                'interfaces': d({}),
            },
        }
    }],
}