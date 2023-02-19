import * as pd from 'pareto-core-data'

import * as mgr from "../../../pub/dist/submodules/definitionNew"


import {
    array,
    choice,
    component,
    group,
    member,
    node,
    optional
} from "../../../pub/dist/submodules/definitionNew/shorthands"

const d = pd.wrapRawDictionary

export const $: mgr.T.Grammar<pd.SourceLocation> = {
    'types': d({
        "block": node("Block", component("statements")),
        "caseClauses": array(node("CaseClause", group({
            "case": member(component("expression")),
            "statements": member(component("statements")),
        }))),
        "expression": choice({
            "arrayLiteral": node("ArrayLiteralExpression", array(component("expression"))),
            "arrowFunction": node("ArrowFunction", group({
                "parameters": member(component("parameters")),
                "returnType": member(optional(component("type"))),
                "equalsGreaterThan": member(node("EqualsGreaterThanToken", false)),
                "implementation": member(choice({
                    "block": component("block"),
                    "expression": component("expression"),
                })),
            })),
            "binary": node("BinaryExpression", group({
                "leftHandSide": member(component("expression")),
                "operator": member(choice({
                    "ampersandAmpersand": node("AmpersandAmpersandToken", false),
                    "barBar": node("BarBarToken", false),
                    "equals": node("EqualsToken", false),
                    "equalsEqualsEquals": node("EqualsEqualsEqualsToken", false),
                    "exclamationEqualsEquals": node("ExclamationEqualsEqualsToken", false),
                    "greaterThan": node("GreaterThanToken", false),
                    "lessThan": node("LessThanToken", false),
                    "minus": node("MinusToken", false),
                    "minusEquals": node("MinusEqualsToken", false),
                    "plus": node("PlusToken", false),
                    "plusEquals": node("PlusEqualsToken", false),
                })),
                "rightHandSide": member(component("expression")),
            })),
            "call": node("CallExpression", group({
                "function": member(component("expression")),
                "typeParameters": member(array(component("type"))),
                "parameters": member(array(component("expression"))),
            })),
            "conditional": node("ConditionalExpression", group({
                "test": member(component("expression")),
                "questionToken": member(component("questionToken")),
                "ifExpression": member(component("expression")),
                "colonToken": member(node("ColonToken", false)),
                "elseExpression": member(component("expression")),
            })),
            "elementAccess": node("ElementAccessExpression", group({
                "array": member(component("expression")),
                "element": member(component("expression")),
            })),
            "false": node("FalseKeyword", false),
            "identifier": component("identifier"),
            "new": node("NewExpression", group({
                "class": member(component("identifier")),
                "parameters": member(array(component("expression"))),
            })),
            "noSubstitutionTemplateLiteral": node("NoSubstitutionTemplateLiteral", false),
            "nullKeyword": node("NullKeyword", false),
            "numericLiteral": component("numericLiteral"),
            "objectLiteral": node("ObjectLiteralExpression", array(node("PropertyAssignment", group({
                "name": member(choice({
                    "identifier": component("identifier"),
                    "numericLiteral": component("numericLiteral"),
                    "stringLiteral": component("stringLiteral"),
                })),
                "expression": member(component("expression")),
            })))),
            "parenthesizedExpression": node("ParenthesizedExpression", component("expression")),
            "postfixUnary": node("PostfixUnaryExpression", component("expression")),
            "prefixUnary": node("PrefixUnaryExpression", component("expression")),
            "propertyAccess": node("PropertyAccessExpression", group({
                "object": member(component("expression")),
                "property": member(component("expression")),
            })),
            "stringLiteral": component("stringLiteral"),
            "template": node("TemplateExpression", group({
                "head": member(node("TemplateHead", true)),
                "spans": member(array(node("TemplateSpan", group({
                    "expression": member(component("expression")),
                    "x": member(choice({
                        "middle": node("TemplateMiddle", true),
                        "tail": node("TemplateTail", true),
                    })),
                })))),
            })),
            "true": node("TrueKeyword", false),
        }),
        "functionDefinition": group({
            "typeParameters": member(component("typeParameters")),
            "parameters": member(component("parameters")),
            "returnType": member(optional(component("type"))),
        }),
        "identifier": node("Identifier", true),
        "identifierOrStringLiteral": choice({
            "identifier": component("identifier"),
            "stringLiteral": component("stringLiteral"),
        }),
        "modifiers": array(choice({
            "declare": node("DeclareKeyword", false),
            "export": node("ExportKeyword", false),
            "readonly": node("ReadonlyKeyword", false),
        })),
        "nullKeyword": component("nullKeyword"),
        "numericLiteral": node("NumericLiteral", true),
        "parameter": node("Parameter", group({
            "name": member(component("identifier")),
            "questionToken": member(optional(component("questionToken"))),
            "type": member(optional(component("type"))),
        })),
        "parameters": array(component("parameter")),
        "questionToken": node("QuestionToken", false),
        "statement": choice({
            "block": component("block"),
            "break": node("BreakStatement", optional(component("identifier"))),
            "export": node("ExportDeclaration", component("stringLiteral")),
            "expression": node("ExpressionStatement", component("expression")),
            "for": node("ForStatement", group({
                "initializer": member(component("variableDeclarationList")),
                "condition": member(component("expression")),
                "incrementer": member(component("expression")),
                "block": member(component("block")),
            })),
            "function": node("FunctionDeclaration", group({
                "modifiers": member(component("modifiers")),
                "name": member(component("identifier")),
                "definition": member(component("functionDefinition")),
                "block": member(optional(component("block"))),
            })),
            "if": node("IfStatement", group({
                "expression": member(component("expression")),
                "thenStatement": member(component("statement")),
                "elseStatement": member(optional(component("statement"))),
            })),
            "import": node("ImportDeclaration", group({
                "clause": member(node("ImportClause", choice({
                    "named": node("NamedImports", array(node("ImportSpecifier", group({
                        "name": member(component("identifier")),
                        "as": member(optional(component("identifier"))),
                    })))),
                    "namespace": node("NamespaceImport", component("identifier")),
                }))),
                "file": member(component("stringLiteral")),
            })),
            "interface": node("InterfaceDeclaration", group({
                "modifiers": member(component("modifiers")),
                "name": member(component("identifier")),
                "typeParameters": member(component("typeParameters")),
                "signature": member(component("typeSignatures")),
            })),
            "labeled": node("LabeledStatement", group({
                "label": member(component("identifier")),
                "statement": member(component("statement")),
            })),
            "return": node("ReturnStatement", optional(component("expression"))),
            "switch": node("SwitchStatement", group({
                "expression": member(component("expression")),
                "caseClauses": member(component("caseClauses")),
                "default": member( node("DefaultClause", component("statements"))),
                "trailingCaseClauses": member(component("caseClauses")),
            })),
            "throw": node("ThrowStatement", component("expression")),
            "try": node("TryStatement", group({
                "block": member(component("block")),
                "catchClause": member(node("CatchClause", group({
                    "variable": member(component("variableDeclaration")),
                    "block": member(component("block")),
                }))),
            })),
            "typeAlias": node("TypeAliasDeclaration", group({
                "modifiers": member(component("modifiers")),
                "name": member(component("identifier")),
                "typeParameters": member(component("typeParameters")),
                "type": member(component("type")),
            })),
            "variable": node("VariableStatement", group({
                "modifiers": member(component("modifiers")),
                "variableDeclarationList": member(component("variableDeclarationList")),
            })),
            "while": node("WhileStatement", group({
                "condition": member(component("expression")),
                "block": member(component("block")),
            })),
        }),
        "statements": component("statements"),
        "stringLiteral": node("StringLiteral", true),
        "type": choice({
            "any": node("AnyKeyword", false),
            "array": node("ArrayType", component("type")),
            "boolean": node("BooleanKeyword", false),
            "function": node("FunctionType", group({
                "parameters": member(component("parameters")),
                "returnType": member(optional(component("type"))),
            })),
            "literal": node("LiteralType", choice({
                "null": component("nullKeyword"),
                "string": component("stringLiteral"),
            })),
            "never": node("NeverKeyword", false),
            "number": node("NumberKeyword", false),
            "optional": node("OptionalType", component("type")),
            "parenthesized": node("ParenthesizedType", component("type")),
            "string": node("StringKeyword", false),
            "tuple": node("TupleType", array(component("type"))),
            "typeLiteral": node("TypeLiteral", component("typeSignatures")),
            "typeReference": node("TypeReference", group({
                "x": member(choice({
                    "identifier": component("identifier"),
                    "qualifiedName": node("QualifiedName", group({
                        "context": member(component("identifier")),
                        "type": member(component("identifier")),
                    })),
                })),
                "parameters": member(array(component("type"))),
            })),
            "undefined": node("UndefinedKeyword", false),
            "union": node("UnionType", array(component("type"))),
            "void": node("VoidKeyword", false),
        }),
        "typeParameters": array(node("TypeParameter", component("identifier"))),
        "typeSignatures": array(choice({
            "construct": node("ConstructSignature", group({
                "parameters": member(component("parameters")),
                "returnType": member(component("type")),
            })),
            "index": node("IndexSignature", group({
                "modifiers": member(component("modifiers")),
                "parameter": member(component("parameter")),
                "type": member(optional(component("type"))),
            })),
            "method": node("MethodSignature", group({
                "name": member(component("identifier")),
                "definition": member(component("functionDefinition")),
            })),
            "property": node("PropertySignature", group({
                "modifiers": member(component("modifiers")),
                "name": member(component("identifierOrStringLiteral")),
                "quesionToken": member(optional(component("questionToken"))),
                "type": member(optional(component("type"))),
            })),
        })),
        "variableDeclaration": node("VariableDeclaration", group({
            "name": member(component("identifier")),
            "type": member(optional(component("type"))),
            "expression": member(optional(component("expression"))),
        })),
        "variableDeclarationList": node("VariableDeclarationList", array(component("variableDeclaration"))),
    }),
    'root': "sourceFile",
}