import * as pw from 'pareto-core-raw'

import * as mgr from "../../../pub/dist/submodules/definition"

import {
    array,
    choice,
    composite,
    e,
    leaf,
    node,
    one,
    optional,
    reference,
    sequence,
} from "../../../pub/dist/submodules/definition/shorthands.p"

const d = pw.wrapRawDictionary

export const $: mgr.T.Grammar = {
    'globalValueTypes': d({
        "block": node(composite("Block", array(reference("statement")))),
        "expression": choice({
            "arrayLiteral": one(node(composite("ArrayLiteralExpression", array(reference("expression"))))),
            "arrowFunction": one(node(composite("ArrowFunction", one(sequence([
                e("parameters", array(reference("parameter"))),
                e("returnType", optional(reference("type"))),
                e("equalsGreaterThan", one(node(leaf("EqualsGreaterThanToken", false)))),
                e("implementation", one(choice({
                    "block": one(reference("block")),
                    "expression": one(reference("expression")),
                }))),
            ]))))),
            "binary": one(node(composite("BinaryExpression", one(sequence([
                e("leftHandSide", one(reference("expression"))),
                e("operator", one(choice({
                    "ampersandAmpersand": one(node(leaf("AmpersandAmpersandToken", false))),
                    "barBar": one(node(leaf("BarBarToken", false))),
                    "equals": one(node(leaf("EqualsToken", false))),
                    "equalsEqualsEquals": one(node(leaf("EqualsEqualsEqualsToken", false))),
                    "exclamationEqualsEquals": one(node(leaf("ExclamationEqualsEqualsToken", false))),
                    "greaterThan": one(node(leaf("GreaterThanToken", false))),
                    "lessThan": one(node(leaf("LessThanToken", false))),
                    "minus": one(node(leaf("MinusToken", false))),
                    "minusEquals": one(node(leaf("MinusEqualsToken", false))),
                    "plus": one(node(leaf("PlusToken", false))),
                    "plusEquals": one(node(leaf("PlusEqualsToken", false))),
                }))),
                e("rightHandSide", one(reference("expression"))),
            ]))))),
            "call": one(node(composite("CallExpression", one(sequence([
                e("function", one(reference("expression"))),
                e("typeParameters", array(reference("type"))),
                e("parameters", array(reference("expression"))),
            ]))))),
            "conditional": one(node(composite("ConditionalExpression", one(sequence([
                e("test", one(reference("expression"))),
                e("questionToken", one(node(leaf("QuestionToken", false)))),
                e("ifExpression", one(reference("expression"))),
                e("colonToken", one(node(leaf("ColonToken", false)))),
                e("elseExpression", one(reference("expression"))),
            ]))))),
            "elementAccess": one(node(composite("ElementAccessExpression", one(sequence([
                e("array", one(reference("expression"))),
                e("element", one(reference("expression"))),
            ]))))),
            "false": one(node(leaf("FalseKeyword", false))),
            "identifier": one(reference("identifier")),
            "new": one(node(composite("NewExpression", one(sequence([
                e("class", one(reference("identifier"))),
                e("parameters", array(reference("expression"))),
            ]))))),
            "noSubstitutionTemplateLiteral": one(node(leaf("NoSubstitutionTemplateLiteral", false))),
            "nullKeyword": one(node(leaf("NullKeyword", false))),
            "numericLiteral": one(reference("numericLiteral")),
            "objectLiteral": one(node(composite("ObjectLiteralExpression", array(node(composite("PropertyAssignment", one(sequence([
                e("name", one(choice({
                    "identifier": one(reference("identifier")),
                    "numericLiteral": one(reference("numericLiteral")),
                    "stringLiteral": one(reference("stringLiteral")),
                }))),
                e("expression", one(reference("expression"))),
            ])))))))),
            "parenthesizedExpression": one(node(composite("ParenthesizedExpression", one(reference("expression"))))),
            "postfixUnary": one(node(composite("PostfixUnaryExpression", one(reference("expression"))))),
            "prefixUnary": one(node(composite("PrefixUnaryExpression", one(reference("expression"))))),
            "propertyAccess": one(node(composite("PropertyAccessExpression", one(sequence([
                e("object", one(reference("expression"))),
                e("property", one(reference("expression"))),
            ]))))),
            "stringLiteral": one(reference("stringLiteral")),
            "template": one(node(composite("TemplateExpression", one(sequence([
                e("head", one(node(leaf("TemplateHead", true)))),
                e("spans", array(node(composite("TemplateSpan", one(sequence([
                    e("expression", one(reference("expression"))),
                    e("x", one(choice({
                        "middle": one(node(leaf("TemplateMiddle", true))),
                        "tail": one(node(leaf("TemplateTail", true))),
                    }))),
                ])))))),
            ]))))),
            "true": one(node(leaf("TrueKeyword", false))),
        }),
        "functionDefinition": sequence([
            e("typeParameters", array(reference("typeParameter"))),
            e("parameters", array(reference("parameter"))),
            e("returnType", optional(reference("type"))),
        ]),
        "identifier": node(leaf("Identifier", true)),
        "identifierOrStringLiteral": choice({
            "identifier": one(reference("identifier")),
            "stringLiteral": one(reference("stringLiteral")),
        }),
        "modifier": choice({
            "declare": one(node(leaf("DeclareKeyword", false))),
            "export": one(node(leaf("ExportKeyword", false))),
            "readonly": one(node(leaf("ReadonlyKeyword", false))),
        }),
        "numericLiteral": node(leaf("NumericLiteral", true)),
        "parameter": node(composite("Parameter", one(sequence([
            e("name", one(reference("identifier"))),
            e("questionToken", optional(node(leaf("QuestionToken", false)))),
            e("type", optional(reference("type"))),
        ])))),
        "statement": choice({
            "block": one(reference("block")),
            "break": one(node(composite("BreakStatement", optional(reference("identifier"))))),
            "export": one(node(composite("ExportDeclaration", one(reference("stringLiteral"))))),
            "expression": one(node(composite("ExpressionStatement", one(reference("expression"))))),
            "for": one(node(composite("ForStatement", one(sequence([
                e("initializer", one(reference("variableDeclarationList"))),
                e("condition", one(reference("expression"))),
                e("incrementer", one(reference("expression"))),
                e("block", one(reference("block"))),
            ]))))),
            "function": one(node(composite("FunctionDeclaration", one(sequence([
                e("modifiers", array(reference("modifier"))),
                e("name", one(reference("identifier"))),
                e("definition", one(reference("functionDefinition"))),
                e("block", optional(reference("block"))),
            ]))))),
            "if": one(node(composite("IfStatement", one(sequence([
                e("expression", one(reference("expression"))),
                e("thenStatement", one(reference("statement"))),
                e("elseStatement", optional(reference("statement"))),
            ]))))),
            "import": one(node(composite("ImportDeclaration", one(sequence([
                e("clause", one(node(composite("ImportClause", one(choice({
                    "named": one(node(composite("NamedImports", array(node(composite("ImportSpecifier", one(sequence([
                        e("name", one(reference("identifier"))),
                        e("as", optional(reference("identifier"))),
                    ])))))))),
                    "namespace": one(node(composite("NamespaceImport", one(reference("identifier"))))),
                })))))),
                e("file", one(reference("stringLiteral"))),
            ]))))),
            "interface": one(node(composite("InterfaceDeclaration", one(sequence([
                e("modifiers", array(reference("modifier"))),
                e("name", one(reference("identifier"))),
                e("typeParameters", array(reference("typeParameter"))),
                e("signature", array(reference("typeSignature"))),
            ]))))),
            "labeled": one(node(composite("LabeledStatement", one(sequence([
                e("label", one(reference("identifier"))),
                e("statement", one(reference("statement"))),
            ]))))),
            "return": one(node(composite("ReturnStatement", optional(reference("expression"))))),
            "switch": one(node(composite("SwitchStatement", one(sequence([
                e("expression", one(reference("expression"))),
                e("caseBlock", one(node(composite("CaseBlock", array(choice({
                    "case": one(node(composite("CaseClause", one(sequence([
                        e("case", one(reference("expression"))),
                        e("statements", array(reference("statement"))),
                    ]))))),
                    "default": one(node(composite("DefaultClause", array(reference("statement"))))),
                })))))),
            ]))))),
            "throw": one(node(composite("ThrowStatement", one(reference("expression"))))),
            "try": one(node(composite("TryStatement", one(sequence([
                e("block", one(reference("block"))),
                e("catchClause", one(node(composite("CatchClause", one(sequence([
                    e("variable", one(reference("variableDeclaration"))),
                    e("block", one(reference("block"))),
                ])))))),
            ]))))),
            "typeAlias": one(node(composite("TypeAliasDeclaration", one(sequence([
                e("modifiers", array(reference("modifier"))),
                e("name", one(reference("identifier"))),
                e("typeParameters", array(reference("typeParameter"))),
                e("type", one(reference("type"))),
            ]))))),
            "variable": one(node(composite("VariableStatement", one(sequence([
                e("modifiers", array(reference("modifier"))),
                e("variableDeclarationList", one(reference("variableDeclarationList"))),
            ]))))),
            "while": one(node(composite("WhileStatement", one(sequence([
                e("condition", one(reference("expression"))),
                e("block", one(reference("block"))),
            ]))))),
        }),
        "stringLiteral": node(leaf("StringLiteral", true)),
        "type": choice({
            "any": one(node(leaf("AnyKeyword", false))),
            "array": one(node(composite("ArrayType", one(reference("type"))))),
            "boolean": one(node(leaf("BooleanKeyword", false))),
            "function": one(node(composite("FunctionType", one(sequence([
                e("parameters", array(reference("parameter"))),
                e("returnType", optional(reference("type"))),
            ]))))),
            "literal": one(node(composite("LiteralType", one(choice({
                "null": one(node(leaf("NullKeyword", false))),
                "string": one(reference("stringLiteral")),
            }))))),
            "never": one(node(leaf("NeverKeyword", false))),
            "number": one(node(leaf("NumberKeyword", false))),
            "optional": one(node(composite("OptionalType", one(reference("type"))))),
            "parenthesized": one(node(composite("ParenthesizedType", one(reference("type"))))),
            "string": one(node(leaf("StringKeyword", false))),
            "tuple": one(node(composite("TupleType", array(reference("type"))))),
            "typeLiteral": one(node(composite("TypeLiteral", array(reference("typeSignature"))))),
            "typeReference": one(node(composite("TypeReference", one(sequence([
                e("x", one(choice({
                    "identifier": one(reference("identifier")),
                    "qualifiedName": one(node(composite("QualifiedName", one(sequence([
                        e("context", one(reference("identifier"))),
                        e("type", one(reference("identifier"))),
                    ]))))),
                }))),
                e("parameters", array(reference("type"))),
            ]))))),
            "undefined": one(node(leaf("UndefinedKeyword", false))),
            "union": one(node(composite("UnionType", array(reference("type"))))),
            "void": one(node(leaf("VoidKeyword", false))),
        }),
        "typeParameter": node(composite("TypeParameter", one(reference("identifier")))),
        "typeSignature": choice({
            "construct": one(node(composite("ConstructSignature", one(sequence([
                e("parameters", array(reference("parameter"))),
                e("returnType", one(reference("type"))),
            ]))))),
            "index": one(node(composite("IndexSignature", one(sequence([
                e("modifiers", array(reference("modifier"))),
                e("parameter", one(reference("parameter"))),
                e("type", optional(reference("type"))),
            ]))))),
            "method": one(node(composite("MethodSignature", one(sequence([
                e("name", one(reference("identifier"))),
                e("definition", one(reference("functionDefinition"))),
            ]))))),
            "property": one(node(composite("PropertySignature", one(sequence([
                e("modifiers", array(reference("modifier"))),
                e("name", one(reference("identifierOrStringLiteral"))),
                e("quesionToken", optional(node(leaf("QuestionToken", false)))),
                e("type", optional(reference("type"))),
            ]))))),
        }),
        "variableDeclaration": node(composite("VariableDeclaration", one(sequence([
            e("name", one(reference("identifier"))),
            e("type", optional(reference("type"))),
            e("expression", optional(reference("expression"))),
        ])))),
        "variableDeclarationList": node(composite("VariableDeclarationList", array(reference("variableDeclaration")))),
        
    }),
    'root': composite("SourceFile", one(sequence([
        e("statements", array(reference("statement"))),
        e("endOfFile", one(node(leaf("EndOfFileToken", false)))),
    ]))),
}