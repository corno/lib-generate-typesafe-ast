import * as pd from 'pareto-core-data'

import * as ggr from "../../../pub/dist/submodules/grammar"

import {
    array,
    choice,
    component,
    group,
    member,
    node,
    string,
    enumeration,
    optional,
} from "../../../pub/dist/submodules/grammar/shorthands"

const d = pd.d

export const $: ggr.T.Grammar<pd.SourceLocation> = {
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
                "equalsGreaterThan": member(node("EqualsGreaterThanToken", null)),
                "implementation": member(choice({
                    "block": component("block"),
                    "expression": component("expression"),
                })),
            })),
            "binary": node("BinaryExpression", group({
                "leftHandSide": member(component("expression")),
                "operator": member(choice({
                    "ampersandAmpersand": node("AmpersandAmpersandToken", null),
                    "barBar": node("BarBarToken", null),
                    "equals": node("EqualsToken", null),
                    "equalsEqualsEquals": node("EqualsEqualsEqualsToken", null),
                    "exclamationEqualsEquals": node("ExclamationEqualsEqualsToken", null),
                    "greaterThan": node("GreaterThanToken", null),
                    "lessThan": node("LessThanToken", null),
                    "minus": node("MinusToken", null),
                    "minusEquals": node("MinusEqualsToken", null),
                    "plus": node("PlusToken", null),
                    "plusEquals": node("PlusEqualsToken", null),
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
                "colonToken": member(node("ColonToken", null)),
                "elseExpression": member(component("expression")),
            })),
            "elementAccess": node("ElementAccessExpression", group({
                "array": member(component("expression")),
                "element": member(component("expression")),
            })),
            "false": node("FalseKeyword", null),
            "identifier": component("identifier"),
            "new": node("NewExpression", group({
                "class": member(component("identifier")),
                "parameters": member(array(component("expression"))),
            })),
            "noSubstitutionTemplateLiteral": node("NoSubstitutionTemplateLiteral", null),
            "nullKeyword": component("nullKeyword"),
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
            "prefixUnary": node("PrefixUnaryExpression", component("expression"), {
                "operator": enumeration({
                    "39": "plus",
                    "40": "minus",
                    "54": "tilde",
                    "53": "exclamation",
                    "45": "plusplus",
                    "46": "minusminus",
                }),
            }),
            "propertyAccess": node("PropertyAccessExpression", group({
                "object": member(component("expression")),
                "property": member(component("expression")),
            })),
            "stringLiteral": component("stringLiteral"),
            "template": node("TemplateExpression", group({
                "head": member(node("TemplateHead", null, { "text": string() })),
                "spans": member(array(node("TemplateSpan", group({
                    "expression": member(component("expression")),
                    "type": member(choice({
                        "middle": node("TemplateMiddle", null, { "text": string() }),
                        "tail": node("TemplateTail", null, { "text": string() }),
                    })),
                })))),
            })),
            "true": node("TrueKeyword", null),
        }),
        "functionDefinition": group({
            "typeParameters": member(component("typeParameters")),
            "parameters": member(component("parameters")),
            "returnType": member(optional(component("type"))),
        }),
        "identifier": node("Identifier", null, { "text": string() }),
        "identifierOrStringLiteral": choice({
            "identifier": component("identifier"),
            "stringLiteral": component("stringLiteral"),
        }),
        "modifiers": array(choice({
            "declare": node("DeclareKeyword", null),
            "export": node("ExportKeyword", null),
            "readonly": node("ReadonlyKeyword", null),
        })),
        "nullKeyword": node("NullKeyword", null),
        "numericLiteral": node("NumericLiteral", null, { "text": string() }),
        "parameter": node("Parameter", group({
            "name": member(component("identifier")),
            "questionToken": member(optional(component("questionToken"))),
            "type": member(optional(component("type"))),
        })),
        "parameters": array(component("parameter")),
        "questionToken": node("QuestionToken", null),
        "sourceFile": node("SourceFile", group({
            "statements": member(component("statements")),
            "endOfFile": member(node("EndOfFile", null)),
        })),
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
                "default": member(optional(node("DefaultClause", component("statements")))),
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
        "statements": array(component("statement")),
        "stringLiteral": node("StringLiteral", null, { "text": string() }),
        "type": choice({
            "any": node("AnyKeyword", null),
            "array": node("ArrayType", component("type")),
            "boolean": node("BooleanKeyword", null),
            "function": node("FunctionType", group({
                "parameters": member(component("parameters")),
                "returnType": member(optional(component("type"))),
            })),
            "literal": node("LiteralType", choice({
                "null": component("nullKeyword"),
                "string": component("stringLiteral"),
            })),
            "never": node("NeverKeyword", null),
            "number": node("NumberKeyword", null),
            "optional": node("OptionalType", component("type")),
            "parenthesized": node("ParenthesizedType", component("type")),
            "string": node("StringKeyword", null),
            "tuple": node("TupleType", array(component("type"))),
            "typeLiteral": node("TypeLiteral", component("typeSignatures")),
            "typeReference": node("TypeReference", group({
                "id": member(choice({
                    "identifier": component("identifier"),
                    "qualifiedName": node("QualifiedName", group({
                        "context": member(component("identifier")),
                        "type": member(component("identifier")),
                    })),
                })),
                "parameters": member(array(component("type"))),
            })),
            "undefined": node("UndefinedKeyword", null),
            "union": node("UnionType", array(component("type"))),
            "void": node("VoidKeyword", null),
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
    'root': {
        'key': "sourceFile",
        'annotation': pd.getLocationInfo(0),
    },
}