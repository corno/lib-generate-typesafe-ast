
import * as pw from 'pareto-core-raw'

import * as gr from "../../../pub/dist/submodules/definition"

export const $: gr.T.Grammar = {
    'globalValueTypes': pw.wrapRawDictionary({
        'block': ["node", {
            'name': `Block`,
            'type': ["composite", {
                'cardinality': ["array", {}],
                'type': ["reference", { 'name': `statement` }]
            }],
        }],
        'expression': ["choice", {
            'options': pw.wrapRawDictionary({
                'arrayLiteral': {
                    'type': ["node", {
                        'name': `ArrayLiteralExpression`,
                        'type': ["composite", {
                            'cardinality': ["array", {}],
                            'type': ["reference", { 'name': `expression` }],
                        }],
                    }]
                },
                'arrowFunction': {
                    'type': ["node", {
                        'name': `ArrowFunction`,
                        'type': ["composite", {
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `parameters`,
                                        'value': {
                                            'cardinality': ["array", {}],
                                            'type': ["reference", {
                                                'name': `parameter`
                                            }]
                                        }
                                    },
                                    {
                                        'name': `returnType`,
                                        'value': {
                                            'cardinality': ["optional", {}],
                                            'type': ["reference", { 'name': `type` }],
                                        }
                                    },
                                    {
                                        'name': `equalsGreaterThan`,
                                        'value': {
                                            'type': ["node", {
                                                'name': `EqualsGreaterThanToken`,
                                                'type': ["leaf", { 'hasTextContent': false }],
                                            }]
                                        }
                                    },
                                    {
                                        'name': `implementation`,
                                        'value': {
                                            'type': ["choice", {
                                                'options': pw.wrapRawDictionary({
                                                    "block": {
                                                        'type': ["reference", {
                                                            'name': `block`,
                                                        }]
                                                    },
                                                    "expression": {
                                                        'type': ["reference", { 'name': `expression` }],
                                                    },
                                                })
                                            }]
                                        }
                                    },
                                ]),
                            }],
                        }]
                    }]
                },
                'binary': {
                    'type': ["node", {
                        'name': `BinaryExpression`,
                        'type': ["composite", {
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `leftHandSide`,
                                        'value': {
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    },
                                    {
                                        'name': `operator`,
                                        'value': {
                                            'type': ["choice", {
                                                'options': pw.wrapRawDictionary({
                                                    'ampersandAmpersand': {
                                                        'type': ["node", {
                                                            'name': `AmpersandAmpersandToken`,
                                                            'type': ["leaf", { 'hasTextContent': false }]
                                                        }]
                                                    },
                                                    'barBar': {
                                                        'type': ["node", {
                                                            'name': `BarBarToken`,
                                                            'type': ["leaf", { 'hasTextContent': false }]
                                                        }]
                                                    },
                                                    'equals': {
                                                        'type': ["node", {
                                                            'name': `EqualsToken`,
                                                            'type': ["leaf", { 'hasTextContent': false }]
                                                        }]
                                                    },
                                                    'equalsEqualsEquals': {
                                                        'type': ["node", {
                                                            'name': `EqualsEqualsEqualsToken`,
                                                            'type': ["leaf", { 'hasTextContent': false }]
                                                        }]
                                                    },
                                                    'exclamationEqualsEquals': {
                                                        'type': ["node", {
                                                            'name': `ExclamationEqualsEqualsToken`,
                                                            'type': ["leaf", { 'hasTextContent': false }]
                                                        }]
                                                    },
                                                    'greaterThan': {
                                                        'type': ["node", {
                                                            'name': `GreaterThanToken`,
                                                            'type': ["leaf", { 'hasTextContent': false }],
                                                        }]
                                                    },
                                                    'lessThan': {
                                                        'type': ["node", {
                                                            'name': `LessThanToken`,
                                                            'type': ["leaf", { 'hasTextContent': false }],
                                                        }]
                                                    },
                                                    'minus': {
                                                        'type': ["node", {
                                                            'name': `MinusToken`,
                                                            'type': ["leaf", { 'hasTextContent': false }],
                                                        }]
                                                    },
                                                    'minusEquals': {
                                                        'type': ["node", {
                                                            'name': `MinusEqualsToken`,
                                                            'type': ["leaf", { 'hasTextContent': false }]
                                                        }]
                                                    },
                                                    'plus': {
                                                        'type': ["node", {
                                                            'name': `PlusToken`,
                                                            'type': ["leaf", { 'hasTextContent': false }]
                                                        }]
                                                    },
                                                    'plusEquals': {
                                                        'type': ["node", {
                                                            'name': `PlusEqualsToken`,
                                                            'type': ["leaf", { 'hasTextContent': false }]
                                                        }]
                                                    }
                                                })
                                            }],
                                        }
                                    },
                                    {
                                        'name': `rightHandSide`,
                                        'value': {
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    }
                                ])
                            }]
                        }]
                    }]
                },
                'call': {
                    'type': ["node", {
                        'name': `CallExpression`,
                        'type': ["composite", {
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `function`,
                                        'value': {
                                            "cardinality": ["one", {}],
                                            'type': ["reference", { 'name': `expression` }]
                                        }
                                    },
                                    {
                                        'name': `typeParameters`,
                                        'value': {
                                            "cardinality": ["array", {}],
                                            'type': ["reference", { 'name': `type` }],
                                        }
                                    },
                                    {
                                        'name': `parameters`,
                                        'value': {
                                            "cardinality": ["array", {}],
                                            'type': ["reference", { 'name': `expression` }]
                                        }
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'conditional': {
                    'type': ["node", {
                        'name': `ConditionalExpression`,
                        'type': ["composite", {
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `test`,
                                        'value': {
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    },
                                    {
                                        'name': `questionToken`,
                                        'value': {
                                            'type': ["node", {
                                                'name': `QuestionToken`,
                                                'type': ["leaf", { 'hasTextContent': false }]
                                            }],
                                        }
                                    },
                                    {
                                        'name': `ifExpression`,
                                        'value': {
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    },
                                    {
                                        'name': `colonToken`,
                                        'value': {
                                            'type': ["node", {
                                                'name': `ColonToken`,
                                                'type': ["leaf", { 'hasTextContent': false }],
                                            }],
                                        }
                                    },
                                    {
                                        'name': `elseExpression`,
                                        'value': {
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'elementAccess': {
                    'type': ["node", {
                        'name': `ElementAccessExpression`,
                        'type': ["composite", {
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `array`,
                                        'value': {
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    },
                                    {
                                        'name': `element`,
                                        'value': {
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    }
                                ])
                            }],
                        }]
                    }]
                },
                'false': {
                    'type': ["node", {
                        'name': `FalseKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }],
                    }]
                },
                'identifier': {
                    'type': ["reference", {
                        'name': `identifier`
                    }],
                },
                'new': {
                    'type': ["node", {
                        'name': `NewExpression`,
                        'type': ["composite", {
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `class`,
                                        'value': {
                                            'type': ["reference", {
                                                'name': `identifier`
                                            }],
                                        }
                                    },
                                    {
                                        'name': `parameters`,
                                        'value': {
                                            'cardinality': ["array", {}],
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'noSubstitutionTemplateLiteral': {
                    'type': ["node", {
                        'name': `NoSubstitutionTemplateLiteral`,
                        'type': ["leaf", { 'hasTextContent': false }]
                    }]
                },
                'numericLiteral': {
                    'type': ["reference", {
                        'name': `numericLiteral`,
                    }],
                },
                'nullKeyword': {
                    'type': ["node", {
                        'name': `NullKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }],
                    }]
                },
                'objectLiteral': {
                    'type': ["node", {
                        'name': `ObjectLiteralExpression`,
                        'type': ["composite", {
                            'cardinality': ["array", {}],
                            'type': ["node", {
                                'name': `PropertyAssignment`,
                                'type': ["composite", {
                                    'type': ["sequence", {
                                        'elements': pw.wrapRawArray([
                                            {
                                                'name': `name`,
                                                'value': {
                                                    'type': ["choice", {
                                                        'options': pw.wrapRawDictionary({
                                                            'identifier': {
                                                                'type': ["reference", {
                                                                    'name': `identifier`
                                                                }],
                                                            },
                                                            'numericLiteral': {
                                                                'type': ["reference", {
                                                                    'name': `numericLiteral`,
                                                                }],
                                                            },
                                                            'stringLiteral': {
                                                                'type': ["reference", {
                                                                    'name': `stringLiteral`
                                                                }]
                                                            },
                                                        })
                                                    }]
                                                }
                                            },
                                            {
                                                'name': `expression`,
                                                'value': {
                                                    'type': ["reference", { 'name': `expression` }],
                                                }
                                            },
                                        ])
                                    }]
                                }]
                            }]
                        }],
                    }]
                },
                'parenthesizedExpression': {
                    'type': ["node", {
                        'name': `ParenthesizedExpression`,
                        'type': ["composite", {
                            'type': ["reference", { 'name': `expression` }],
                        }],
                    }]
                },
                'postfixUnary': {
                    'type': ["node", {
                        'name': `PostfixUnaryExpression`,
                        'type': ["composite", {
                            'type': ["reference", { 'name': `expression` }],
                        }],
                    }]
                },
                'prefixUnary': {
                    'type': ["node", {
                        'name': `PrefixUnaryExpression`,
                        'type': ["composite", {
                            'type': ["reference", { 'name': `expression` }],
                        }],
                    }]
                },
                'propertyAccess': {
                    'type': ["node", {
                        'name': `PropertyAccessExpression`,
                        'type': ["composite", {
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `object`,
                                        'value': {
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    },
                                    {
                                        'name': `property`,
                                        'value': {
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    },
                                ])
                            }]
                        }],
                    }]
                },
                'stringLiteral': {
                    'type': ["reference", {
                        'name': `stringLiteral`
                    }]
                },
                'template': {
                    'type': ["node", {
                        'name': `TemplateExpression`,
                        'type': ["composite", {
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `head`,
                                        'value': {
                                            'type': ["node", {
                                                'name': `TemplateHead`,
                                                'type': ["leaf", { 'hasTextContent': true }],
                                            }]
                                        }
                                    },
                                    {
                                        'name': `spans`,
                                        'value': {
                                            'cardinality': ["array", {}],
                                            'type': ["node", {
                                                'name': `TemplateSpan`,
                                                'type': ["composite", {
                                                    'type': ["sequence", {
                                                        'elements': pw.wrapRawArray([
                                                            {
                                                                'name': `expression`,
                                                                'value': {
                                                                    'type': ["reference", { 'name': `expression` }],
                                                                }
                                                            },
                                                            {
                                                                'name': `x`,
                                                                'value': {
                                                                    'type': ["choice", {
                                                                        'options': pw.wrapRawDictionary({
                                                                            'middle': {
                                                                                'type': ["node", {
                                                                                    'name': `TemplateMiddle`,
                                                                                    'type': ["leaf", { 'hasTextContent': true }],
                                                                                }],
                                                                            },
                                                                            'tail': {
                                                                                'type': ["node", {
                                                                                    'name': `TemplateTail`,
                                                                                    'type': ["leaf", { 'hasTextContent': true }]
                                                                                }],
                                                                            }
                                                                        })
                                                                    }],
                                                                }
                                                            },
                                                        ])
                                                    }]
                                                }]
                                            }]
                                        }
                                    }
                                ])
                            }]
                        }]
                    }]
                },
                'true': {
                    'type': ["node", {
                        'name': `TrueKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }]
                    }]
                },
            })
        }],
        'functionDefinition': ["sequence", {
            'elements': pw.wrapRawArray([
                {
                    'name': `typeParameters`,
                    'value': {
                        'cardinality': ["array", {}],
                        'type': ["reference", {
                            'name': `typeParameter`
                        }]
                    },
                },
                {
                    'name': `parameters`,
                    'value': {
                        'cardinality': ["array", {}],
                        'type': ["reference", {
                            'name': `parameter`
                        }]
                    },
                },
                {
                    'name': `returnType`,
                    'value': {
                        'cardinality': ["optional", {}],
                        'type': ["reference", { 'name': `type` }],
                    },
                },
            ])
        }],
        'identifier': ["node", {
            'name': `Identifier`,
            'type': ["leaf", { 'hasTextContent': true }]
        }],
        'identifierOrStringLiteral': ["choice", {
            'options': pw.wrapRawDictionary({
                'identifier': {
                    'type': ["reference", {
                        'name': `identifier`
                    }],
                },
                'stringLiteral': {
                    'type': ["reference", {
                        'name': `stringLiteral`
                    }]
                },
            })
        }],
        'modifier': ["choice", {
            //AbstractKeyword | AsyncKeyword | ConstKeyword | DeclareKeyword | DefaultKeyword | ExportKeyword | PrivateKeyword | ProtectedKeyword | PublicKeyword | OverrideKeyword | ReadonlyKeyword | StaticKeyword;
            'options': pw.wrapRawDictionary({
                'declare': {
                    'type': ["node", {
                        'name': `DeclareKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }]
                    }]
                },
                'export': {
                    'type': ["node", {
                        'name': `ExportKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }],
                    }]
                },
                'readonly': {
                    'type': ["node", {
                        'name': `ReadonlyKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }],
                    }]
                },
            })
        }],
        'numericLiteral': ["node", {
            'name': `NumericLiteral`,
            'type': ["leaf", { 'hasTextContent': true }],
        }],
        'parameter': ["node", {
            'name': `Parameter`,
            'type': ["composite", {
                'type': ["sequence", {
                    'elements': pw.wrapRawArray([
                        {
                            'name': `name`,
                            'value': {
                                'type': ["reference", {
                                    'name': `identifier`
                                }],
                            }
                        },
                        {
                            'name': `questionToken`,
                            'value': {
                                'cardinality': ["optional", {}],
                                'type': ["node", {
                                    'name': `QuestionToken`,
                                    'type': ["leaf", { 'hasTextContent': false }],
                                }]
                            }
                        },
                        {
                            'name': `type`,
                            'value': {
                                'cardinality': ["optional", {}],
                                'type': ["reference", { 'name': `type` }],
                            }
                        }
                    ])
                }]
            }]
        }],
        'statement': ["choice", {
            'options': pw.wrapRawDictionary({
                'block': {
                    'type': ["reference", {
                        'name': `block`
                    }]
                },
                'break': {
                    'type': ["node", {
                        'name': `BreakStatement`,
                        'type': ["composite", {
                            'cardinality': ["optional", {}],
                            'type': ["reference", {
                                'name': `identifier`
                            }],
                        }],
                    }]
                },
                'export': {
                    'type': ["node", {
                        'name': `ExportDeclaration`,
                        'type': ["composite", {
                            'type': ["reference", {
                                'name': `stringLiteral`
                            }],
                        }]
                    }]
                },
                'expression': {
                    'type': ["node", {
                        'name': `ExpressionStatement`,
                        'type': ["composite", {
                            'type': ["reference", { 'name': `expression` }]
                        }],
                    }]
                },
                'for': {
                    'type': ["node", {
                        'name': `ForStatement`,
                        'type': ["composite", {
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `initializer`,
                                        'value': {
                                            "cardinality": ["one", {}],
                                            'type': ["reference", {
                                                'name': `variableDeclarationList`
                                            }]
                                        }
                                    },
                                    {
                                        'name': `condition`,
                                        'value': {
                                            "cardinality": ["one", {}],
                                            'type': ["reference", { 'name': `expression` }]
                                        }
                                    },
                                    {
                                        'name': `incrementer`,
                                        'value': {
                                            "cardinality": ["one", {}],
                                            'type': ["reference", { 'name': `expression` }]
                                        }
                                    },
                                    {
                                        'name': `block`,
                                        'value': {
                                            "cardinality": ["one", {}],
                                            'type': ["reference", {
                                                'name': `block`,
                                            }]
                                        }
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'function': {
                    'type': ["node", {
                        'name': `FunctionDeclaration`,
                        'type': ["composite", {
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `modifiers`,
                                        'value': {
                                            'cardinality': ["array", {}],
                                            'type': ["reference", { 'name': `modifier` }]
                                        },
                                    },
                                    {
                                        'name': `name`,
                                        'value': {
                                            'type': ["reference", {
                                                'name': `identifier`
                                            }],
                                        },
                                    },
                                    {
                                        'name': `definition`,
                                        'value': {
                                            'type': ["reference", {
                                                'name': `functionDefinition`
                                            }]
                                        },
                                    },
                                    {
                                        'name': `block`,
                                        'value': {
                                            'cardinality': ["optional", {}],
                                            'type': ["reference", {
                                                'name': `block`
                                            }]
                                        },
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'if': {
                    'type': ["node", {
                        'name': `IfStatement`,
                        'type': ["composite", {
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `expression`,
                                        'value': {
                                            'type': ["reference", { 'name': `expression` }],
                                        },
                                    },
                                    {
                                        'name': `thenStatement`,
                                        'value': {
                                            'type': ["reference", { 'name': `statement` }],
                                        },
                                    },
                                    {
                                        'name': `elseStatement`,
                                        'value': {
                                            'cardinality': ["optional", {}],
                                            'type': ["reference", { 'name': `statement` }],
                                        },
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'import': {
                    'type': ["node", {
                        'name': `ImportDeclaration`,
                        'type': ["composite", {
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `clause`,
                                        'value': {
                                            'type': ["node", {
                                                'name': `ImportClause`,
                                                'type': ["composite", {
                                                    'type': ["choice", {
                                                        'options': pw.wrapRawDictionary({
                                                            'namespace': {
                                                                'type': ["node", {
                                                                    'name': `NamespaceImport`,
                                                                    'type': ["composite", {
                                                                        'type': ["reference", {
                                                                            'name': `identifier`
                                                                        }],
                                                                    }],
                                                                }]
                                                            },
                                                            'named': {
                                                                'type': ["node", {
                                                                    'name': `NamedImports`,
                                                                    'type': ["composite", {
                                                                        'cardinality': ["array", {}],
                                                                        'type': ["node", {
                                                                            'name': `ImportSpecifier`,
                                                                            'type': ["composite", {
                                                                                'type': ["sequence", {
                                                                                    'elements': pw.wrapRawArray([
                                                                                        {
                                                                                            'name': `name`,
                                                                                            'value': {
                                                                                                'type': ["reference", {
                                                                                                    'name': `identifier`
                                                                                                }],
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            'name': `as`,
                                                                                            'value': {
                                                                                                'cardinality': ["optional", {}],
                                                                                                'type': ["reference", {
                                                                                                    'name': `identifier`
                                                                                                }],
                                                                                            }
                                                                                        },
                                                                                    ])
                                                                                }]
                                                                            }]
                                                                        }]
                                                                    }]
                                                                }]
                                                            }
                                                        })
                                                    }]
                                                }]
                                            }]
                                        }
                                    },
                                    {
                                        'name': `file`,
                                        'value': {
                                            'type': ["reference", {
                                                'name': `stringLiteral`
                                            }],
                                        }
                                    }
                                ])
                            }]
                        }]
                    }]
                },
                'interface': {
                    'type': ["node", {
                        'name': `InterfaceDeclaration`,
                        'type': ["composite", {
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `modifiers`,
                                        'value': {
                                            'cardinality': ["array", {}],
                                            'type': ["reference", { 'name': `modifier` }]
                                        },
                                    },
                                    {
                                        'name': `name`,
                                        'value': {
                                            'type': ["reference", {
                                                'name': `identifier`
                                            }],
                                        }
                                    },
                                    {
                                        'name': `typeParameters`,
                                        'value': {
                                            'cardinality': ["array", {}],
                                            'type': ["reference", {
                                                'name': `typeParameter`
                                            }]
                                        },
                                    },
                                    {
                                        'name': `signature`,
                                        'value': {
                                            'cardinality': ["array", {}],
                                            'type': ["reference", { 'name': `typeSignature` }]
                                        },
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'labeled': {
                    'type': ["node", {
                        'name': `LabeledStatement`,
                        'type': ["composite", {
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `label`,
                                        'value': {
                                            'type': ["reference", {
                                                'name': `identifier`
                                            }],
                                        }
                                    },
                                    {
                                        'name': `statement`,
                                        'value': {
                                            'type': ["reference", { 'name': `statement` }],
                                        }
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'return': {
                    'type': ["node", {
                        'name': `ReturnStatement`,
                        'type': ["composite", {
                            'cardinality': ["optional", {}],
                            'type': ["reference", { 'name': `expression` }],
                        }],
                    }]
                },
                'switch': {
                    'type': ["node", {
                        'name': `SwitchStatement`,
                        'type': ["composite", {
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `expression`,
                                        'value': {
                                            'type': ["reference", { 'name': `expression` }]
                                        }
                                    },
                                    {
                                        'name': `caseBlock`,
                                        'value': {
                                            'type': ["node", {
                                                'name': `CaseBlock`,
                                                'type': ["composite", {
                                                    'cardinality': ["array", {}],
                                                    'type': ["choice", {
                                                        'options': pw.wrapRawDictionary({
                                                            "case": {
                                                                'type': ["node", {
                                                                    'name': `CaseClause`,
                                                                    'type': ["composite", {
                                                                        'type': ["sequence", {
                                                                            'elements': pw.wrapRawArray([
                                                                                {
                                                                                    'name': `case`,
                                                                                    'value': {
                                                                                        'type': ["reference", { 'name': `expression` }]
                                                                                    }
                                                                                },
                                                                                {
                                                                                    'name': `statements`,
                                                                                    'value': {
                                                                                        'cardinality': ["array", {}],
                                                                                        'type': ["reference", { 'name': `statement` }]
                                                                                    },
                                                                                }
                                                                            ])
                                                                        }]
                                                                    }]
                                                                }]
                                                            },
                                                            "default": {
                                                                'type': ["node", {
                                                                    'name': `DefaultClause`,
                                                                    'type': ["composite", {
                                                                        'cardinality': ["array", {}],
                                                                        'type': ["reference", { 'name': `statement` }]
                                                                    }]
                                                                }]
                                                            },
                                                        })
                                                    }]
                                                }]
                                            }]
                                        }
                                    },
                                ])
                            }],
                        }]
                    }]
                },
                'throw': {
                    'type': ["node", {
                        'name': `ThrowStatement`,
                        'type': ["composite", {
                            'type': ["reference", { 'name': `expression` }],
                        }]
                    }]
                },
                'try': {
                    'type': ["node", {
                        'name': `TryStatement`,
                        'type': ["composite", {
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `block`,
                                        'value': {
                                            'type': ["reference", {
                                                'name': `block`
                                            }]
                                        },
                                    },
                                    {
                                        'name': `catchClause`,
                                        'value': {
                                            'type': ["node", {
                                                'name': `CatchClause`,
                                                'type': ["composite", {
                                                    'type': ["sequence", {
                                                        'elements': pw.wrapRawArray([
                                                            {
                                                                'name': `variable`,
                                                                'value': {
                                                                    'type': ["reference", {
                                                                        'name': `variableDeclaration`
                                                                    }]
                                                                }
                                                            },
                                                            {
                                                                'name': `block`,
                                                                'value': {
                                                                    'type': ["reference", {
                                                                        'name': `block`
                                                                    }]
                                                                }
                                                            },
                                                        ])
                                                    }]
                                                }]
                                            }]
                                        },
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'typeAlias': {
                    'type': ["node", {
                        'name': `TypeAliasDeclaration`,
                        'type': ["composite", {
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `modifiers`,
                                        'value': {
                                            'cardinality': ["array", {}],
                                            'type': ["reference", { 'name': `modifier` }]
                                        },
                                    },
                                    {
                                        'name': `name`,
                                        'value': {
                                            'type': ["reference", {
                                                'name': `identifier`
                                            }],
                                        }
                                    },
                                    {
                                        'name': `typeParameters`,
                                        'value': {
                                            'cardinality': ["array", {}],
                                            'type': ["reference", {
                                                'name': `typeParameter`
                                            }]
                                        },
                                    },
                                    {
                                        'name': `type`,
                                        'value': {
                                            'type': ["reference", { 'name': `type` }],
                                        },
                                    }
                                ])
                            }]
                        }]
                    }]
                },
                'variable': {
                    'type': ["node", {
                        'name': `VariableStatement`,
                        'type': ["composite", {
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `modifiers`,
                                        'value': {
                                            'cardinality': ["array", {}],
                                            'type': ["reference", { 'name': `modifier` }]
                                        },
                                    },
                                    {
                                        'name': `variableDeclarationList`,
                                        'value': {
                                            'type': ["reference", {
                                                'name': `variableDeclarationList`
                                            }]
                                        },
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'while': {
                    'type': ["node", {
                        'name': `WhileStatement`,
                        'type': ["composite", {
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `condition`,
                                        'value': {
                                            'type': ["reference", { 'name': `expression` }],
                                        },
                                    },
                                    {
                                        'name': `block`,
                                        'value': {
                                            'type': ["reference", {
                                                'name': `block`
                                            }],
                                        },
                                    },
                                ])
                            }]
                        }]
                    }]
                },
            })
        }],
        'stringLiteral': ["node", {
            'name': `StringLiteral`,
            'type': ["leaf", { 'hasTextContent': true }]
        }],
        'type': ["choice", {
            'options': pw.wrapRawDictionary({
                'any': {
                    'type': ["node", {
                        'name': `AnyKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }],
                    }]
                },
                'array': {
                    'type': ["node", {
                        'name': `ArrayType`,
                        'type': ["composite", {
                            'type': ["reference", { 'name': `type` }],
                        }]
                    }]
                },
                'boolean': {
                    'type': ["node", {
                        'name': `BooleanKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }]
                    }]
                },
                'function': {
                    'type': ["node", {
                        'name': `FunctionType`,
                        'type': ["composite", {
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `parameters`,
                                        'value': {
                                            'cardinality': ["array", {}],
                                            'type': ["reference", {
                                                'name': `parameter`
                                            }]
                                        },
                                    },
                                    {
                                        'name': `returnType`,
                                        'value': {
                                            'cardinality': ["optional", {}],
                                            'type': ["reference", { 'name': `type` }],
                                        },
                                    }
                                ])
                            }]
                        }]
                    }]
                },
                'literal': {
                    'type': ["node", {
                        'name': `LiteralType`,
                        'type': ["composite", {
                            'type': ["choice", {
                                'options': pw.wrapRawDictionary({
                                    'null': {
                                        'type': ["node", {
                                            'name': `NullKeyword`,
                                            'type': ["leaf", { 'hasTextContent': false }],
                                        }]
                                    },
                                    'string': {
                                        'type': ["reference", {
                                            'name': `stringLiteral`
                                        }],
                                    },
                                })
                            }]
                        }]
                    }]
                },
                'parenthesized': {
                    'type': ["node", {
                        'name': `ParenthesizedType`,
                        'type': ["composite", {
                            'type': ["reference", { 'name': `type` }],
                        }],
                    }]
                },
                'never': {
                    'type': ["node", {
                        'name': `NeverKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }],
                    }]
                },
                'number': {
                    'type': ["node", {
                        'name': `NumberKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }],
                    }]
                },
                'optional': {
                    'type': ["node", {
                        'name': `OptionalType`,
                        'type': ["composite", {
                            'type': ["reference", { 'name': `type` }],
                        }],
                    }]
                },
                'tuple': {
                    'type': ["node", {
                        'name': `TupleType`,
                        'type': ["composite", {
                            'cardinality': ["array", {}],
                            'type': ["reference", { 'name': `type` }],
                        }],
                    }]
                },
                'typeLiteral': {
                    'type': ["node", {
                        'name': `TypeLiteral`,
                        'type': ["composite", {
                            'cardinality': ["array", {}],
                            'type': ["reference", { 'name': `typeSignature` }],
                        }],
                    }]
                },
                'string': {
                    'type': ["node", {
                        'name': `StringKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }]
                    }]
                },
                'typeReference': {
                    'type': ["node", {
                        'name': `TypeReference`,
                        'type': ["composite", {
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `x`,
                                        'value': {
                                            "cardinality": ["one", {}],
                                            'type': ["choice", {
                                                'options': pw.wrapRawDictionary({
                                                    "identifier": {
                                                        'type': ["reference", {
                                                            'name': `identifier`
                                                        }],
                                                    },
                                                    "qualifiedName": {
                                                        'type': ["node", {
                                                            'name': `QualifiedName`,
                                                            'type': ["composite", {
                                                                'type': ["sequence", {
                                                                    'elements': pw.wrapRawArray([
                                                                        {
                                                                            'name': `context`,
                                                                            'value': {
                                                                                'type': ["reference", {
                                                                                    'name': `identifier`
                                                                                }],
                                                                            }
                                                                        },
                                                                        {
                                                                            'name': `type`,
                                                                            'value': {
                                                                                'type': ["reference", {
                                                                                    'name': `identifier`
                                                                                }],
                                                                            }
                                                                        },
                                                                    ])
                                                                }],
                                                            }]
                                                        }]
                                                    }
                                                })
                                            }]
                                        }
                                    },
                                    {
                                        'name': `parameters`,
                                        'value': {
                                            "cardinality": ["array", {}],
                                            'type': ["reference", { 'name': `type` }],
                                        }
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'undefined': {
                    'type': ["node", {
                        'name': `UndefinedKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }],
                    }]
                },
                'union': {
                    'type': ["node", {
                        'name': `UnionType`,
                        'type': ["composite", {
                            'cardinality': ["array", {}],
                            'type': ["reference", { 'name': `type` }],
                        }],
                    }]
                },
                'void': {
                    'type': ["node", {
                        'name': `VoidKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }]
                    }]
                },
            })
        }],
        'typeParameter': ["node", {
            'name': `TypeParameter`,
            'type': ["composite", {
                'type': ["reference", {
                    'name': `identifier`
                }],
            }]
        }],
        'typeSignature': ["choice", {
            'options': pw.wrapRawDictionary({
                'construct': {
                    'type': ["node", {
                        'name': `ConstructSignature`,
                        'type': ["composite", {
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `parameters`,
                                        'value': {
                                            'cardinality': ["array", {}],
                                            'type': ["reference", {
                                                'name': `parameter`
                                            }]
                                        }
                                    },
                                    {
                                        'name': `returnType`,
                                        'value': {
                                            'type': ["reference", {
                                                'name': `type`
                                            }]
                                        }
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'index': {
                    'type': ["node", {
                        'name': `IndexSignature`,
                        'type': ["composite", {
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `modifiers`,
                                        'value': {
                                            'cardinality': ["array", {}],
                                            'type': ["reference", { 'name': `modifier` }]
                                        },
                                    },
                                    {
                                        'name': `parameter`,
                                        'value': {
                                            'type': ["reference", {
                                                'name': `parameter`
                                            }],
                                        }
                                    },
                                    {
                                        'name': `type`,
                                        'value': {
                                            'cardinality': ["optional", {}],
                                            'type': ["reference", { 'name': `type` }],
                                        },
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'method': {
                    'type': ["node", {
                        'name': `MethodSignature`,
                        'type': ["composite", {
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `name`,
                                        'value': {
                                            'type': ["reference", {
                                                'name': `identifier`
                                            }],
                                        }
                                    },
                                    {
                                        'name': `definition`,
                                        'value': {
                                            'type': ["reference", {
                                                'name': `functionDefinition`
                                            }]
                                        }
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'property': {
                    'type': ["node", {
                        'name': `PropertySignature`,
                        'type': ["composite", {
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `modifiers`,
                                        'value': {
                                            'cardinality': ["array", {}],
                                            'type': ["reference", { 'name': `modifier` }]
                                        },
                                    },
                                    {
                                        'name': `name`,
                                        'value': {
                                            'type': ["reference", { 'name': `identifierOrStringLiteral` }],
                                        }
                                    },
                                    {
                                        'name': `quesionToken`,
                                        'value': {
                                            'cardinality': ["optional", {}],
                                            'type': ["node", {
                                                'name': `QuestionToken`,
                                                'type': ["leaf", { 'hasTextContent': false }],
                                            }],
                                        }
                                    },
                                    {
                                        'name': `type`,
                                        'value': {
                                            'cardinality': ["optional", {}],
                                            'type': ["reference", { 'name': `type` }],
                                        },
                                    }
                                ])
                            }]
                        }]
                    }]
                },
            })
        }],
        'variableDeclaration': ["node", {
            'name': `VariableDeclaration`,
            'type': ["composite", {
                'type': ["sequence", {
                    'elements': pw.wrapRawArray([
                        {
                            'name': `name`,
                            'value': {
                                'type': ["reference", {
                                    'name': `identifier`
                                }],
                            },
                        },
                        {
                            'name': `type`,
                            'value': {
                                'cardinality': ["optional", {}],
                                'type': ["reference", { 'name': `type` }],
                            },
                        },
                        {
                            'name': `expression`,
                            'value': {
                                'cardinality': ["optional", {}],
                                'type': ["reference", { 'name': `expression` }],
                            },
                        },
                    ])
                }]
            }]
        }],
        'variableDeclarationList': ["node", {
            'name': `VariableDeclarationList`,
            'type': ["composite", {
                'cardinality': ["array", {}],
                'type': ["reference", {
                    'name': `variableDeclaration`
                }]
            }],
        }]
    }),
    'root': {
        'name': `SourceFile`,
        'type': ["composite", {
            'type': ["sequence", {
                'elements': pw.wrapRawArray([
                    {
                        'name': `statements`,
                        'value': {
                            'cardinality': ["array", {}],
                            'type': ["reference", { 'name': `statement` }]
                        },
                    },
                    {
                        'name': `endOfFile`,
                        'value': {
                            'type': ["node", {
                                'name': `EndOfFileToken`,
                                'type': ["leaf", { 'hasTextContent': false }]
                            }]
                        }
                    }
                ])
            }]
        }]
    }
}