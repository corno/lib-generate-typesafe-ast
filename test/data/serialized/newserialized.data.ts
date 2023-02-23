import * as pd from 'pareto-core-data'

import * as ggr from "../../../pub/dist/submodules/definition"

const d = pd.wrapRawDictionary

export const $: mgr.T.Grammar = {
    'types': d({
        "block": node("Block", array(component("statement"))),
        "expression": choice({
            "arrayLiteral": node("ArrayLiteralExpression", array(component("expression"))),
            "arrowFunction": node("ArrowFunction", group({
                "parameters": member(array(component("parameter"))),
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
                "questionToken": member(node("QuestionToken", false)),
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
            "typeParameters": member(array(component("typeParameter"))),
            "parameters": member(array(component("parameter"))),
            "returnType": member(optional(component("type"))),
        }),
        "identifier": node("Identifier", true),
        "identifierOrStringLiteral": choice({
            "identifier": component("identifier"),
            "stringLiteral": component("stringLiteral"),
        }),
        "modifier": choice({
            "declare": node("DeclareKeyword", false),
            "export": node("ExportKeyword", false),
            "readonly": node("ReadonlyKeyword", false),
        }),
        "numericLiteral": node("NumericLiteral", true),
        "parameter": node("Parameter", group({
            "name": member(component("identifier")),
            "questionToken": member(optional(node("QuestionToken", false))),
            "type": member(optional(component("type"))),
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
                "modifiers": member(array(component("modifier"))),
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
                "modifiers": member(array(component("modifier"))),
                "name": member(component("identifier")),
                "typeParameters": member(array(component("typeParameter"))),
                "signature": member(array(component("typeSignature"))),
            })),
            "labeled": node("LabeledStatement", group({
                "label": member(component("identifier")),
                "statement": member(component("statement")),
            })),
            "return": node("ReturnStatement", optional(component("expression"))),
            "switch": node("SwitchStatement", group({
                "expression": member(component("expression")),
                "caseBlock": member(node("CaseBlock", array(choice({
                    "case": node("CaseClause", group({
                        "case": member(component("expression")),
                        "statements": member(array(component("statement"))),
                    })),
                    "default": node("DefaultClause", array(component("statement"))),
                })))),
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
                "modifiers": member(array(component("modifier"))),
                "name": member(component("identifier")),
                "typeParameters": member(array(component("typeParameter"))),
                "type": member(component("type")),
            })),
            "variable": node("VariableStatement", group({
                "modifiers": member(array(component("modifier"))),
                "variableDeclarationList": member(component("variableDeclarationList")),
            })),
            "while": node("WhileStatement", group({
                "condition": member(component("expression")),
                "block": member(component("block")),
            })),
        }),
        "stringLiteral": node("StringLiteral", true),
        "type": choice({
            "any": node("AnyKeyword", false),
            "array": node("ArrayType", component("type")),
            "boolean": node("BooleanKeyword", false),
            "function": node("FunctionType", group({
                "parameters": member(array(component("parameter"))),
                "returnType": member(optional(component("type"))),
            })),
            "literal": node("LiteralType", choice({
                "null": node("NullKeyword", false),
                "string": component("stringLiteral"),
            })),
            "never": node("NeverKeyword", false),
            "number": node("NumberKeyword", false),
            "optional": node("OptionalType", component("type")),
            "parenthesized": node("ParenthesizedType", component("type")),
            "string": node("StringKeyword", false),
            "tuple": node("TupleType", array(component("type"))),
            "typeLiteral": node("TypeLiteral", array(component("typeSignature"))),
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
        "typeParameter": node("TypeParameter", component("identifier")),
        "typeSignature": choice({
            "construct": node("ConstructSignature", group({
                "parameters": member(array(component("parameter"))),
                "returnType": member(component("type")),
            })),
            "index": node("IndexSignature", group({
                "modifiers": member(array(component("modifier"))),
                "parameter": member(component("parameter")),
                "type": member(optional(component("type"))),
            })),
            "method": node("MethodSignature", group({
                "name": member(component("identifier")),
                "definition": member(component("functionDefinition")),
            })),
            "property": node("PropertySignature", group({
                "modifiers": member(array(component("modifier"))),
                "name": member(component("identifierOrStringLiteral")),
                "quesionToken": member(optional(node("QuestionToken", false))),
                "type": member(optional(component("type"))),
            })),
        }),
        "variableDeclaration": node("VariableDeclaration", group({
            "name": member(component("identifier")),
            "type": member(optional(component("type"))),
            "expression": member(optional(component("expression"))),
        })),
        "variableDeclarationList": node("VariableDeclarationList", array(component("variableDeclaration"))),
        
    }),
    'root': "sourceFile",
}