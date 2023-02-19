import * as pd from 'pareto-core-data'

import * as mgr from "../../../pub/dist/submodules/definition"

const d = pd.wrapRawDictionary

export const $: mgr.T.Grammar = {
    'components': d({
        "expression": component({
            "x": prop(choice({
                "arrayLiteral": node("ArrayLiteralExpression"),
                "arrowFunction": node("ArrowFunction"),
                "binary": node("BinaryExpression"),
                "call": node("CallExpression"),
                "conditional": node("ConditionalExpression"),
                "elementAccess": node("ElementAccessExpression"),
                "false": node("FalseKeyword"),
                "identifier": reference("identifier"),
                "new": node("NewExpression"),
                "noSubstitutionTemplateLiteral": node("NoSubstitutionTemplateLiteral"),
                "nullKeyword": node("NullKeyword"),
                "numericLiteral": reference("numericLiteral"),
                "objectLiteral": node("ObjectLiteralExpression"),
                "parenthesizedExpression": node("ParenthesizedExpression"),
                "postfixUnary": node("PostfixUnaryExpression"),
                "prefixUnary": node("PrefixUnaryExpression"),
                "propertyAccess": node("PropertyAccessExpression"),
                "stringLiteral": reference("stringLiteral"),
                "template": node("TemplateExpression"),
                "true": node("TrueKeyword"),
            })),
        }),
        "functionDefinition": component({
            "typeParameters": prop(reference("typeParameter"), 'array'),
            "parameters": prop(reference("parameter"), 'array'),
            "returnType": prop(reference("type"), 'optional'),
        }),
        "identifierOrStringLiteral": component({
            "x": prop(choice({
                "identifier": reference("identifier"),
                "stringLiteral": reference("stringLiteral"),
            })),
        }),
        "modifier": component({
            "x": prop(choice({
                "declare": node("DeclareKeyword"),
                "export": node("ExportKeyword"),
                "readonly": node("ReadonlyKeyword"),
            })),
        }),
        "statement": component({
            "x": prop(choice({
                "block": reference("block"),
                "break": node("BreakStatement"),
                "export": node("ExportDeclaration"),
                "expression": node("ExpressionStatement"),
                "for": node("ForStatement"),
                "function": node("FunctionDeclaration"),
                "if": node("IfStatement"),
                "import": node("ImportDeclaration"),
                "interface": node("InterfaceDeclaration"),
                "labeled": node("LabeledStatement"),
                "return": node("ReturnStatement"),
                "switch": node("SwitchStatement"),
                "throw": node("ThrowStatement"),
                "try": node("TryStatement"),
                "typeAlias": node("TypeAliasDeclaration"),
                "variable": node("VariableStatement"),
                "while": node("WhileStatement"),
            })),
        }),
        "type": component({
            "x": prop(choice({
                "any": node("AnyKeyword"),
                "array": node("ArrayType"),
                "boolean": node("BooleanKeyword"),
                "function": node("FunctionType"),
                "literal": node("LiteralType"),
                "never": node("NeverKeyword"),
                "number": node("NumberKeyword"),
                "optional": node("OptionalType"),
                "parenthesized": node("ParenthesizedType"),
                "string": node("StringKeyword"),
                "tuple": node("TupleType"),
                "typeLiteral": node("TypeLiteral"),
                "typeReference": node("TypeReference"),
                "undefined": node("UndefinedKeyword"),
                "union": node("UnionType"),
                "void": node("VoidKeyword"),
            })),
        }),
        "typeSignature": component({
            "x": prop(choice({
                "construct": node("ConstructSignature"),
                "index": node("IndexSignature"),
                "method": node("MethodSignature"),
                "property": node("PropertySignature"),
            })),
        }),
    }),
    'nodes': d({
        "AmpersandAmpersandToken": leaf(false),
        "AnyKeyword": leaf(false),
        "ArrayLiteralExpression": composite({
            "expression": prop(reference("expression"), 'array'),
        }),
        "ArrayType": composite({
            "type": prop(reference("type")),
        }),
        "ArrowFunction": composite({
            "parameters": prop(reference("parameter"), 'array'),
            "returnType": prop(reference("type"), 'optional'),
            "equalsGreaterThan": prop(node("EqualsGreaterThanToken")),
            "implementation": prop(choice({
                "block": reference("block"),
                "expression": reference("expression"),
            })),
        }),
        "BarBarToken": leaf(false),
        "BinaryExpression": composite({
            "leftHandSide": prop(reference("expression")),
            "operator": prop(choice({
                "ampersandAmpersand": node("AmpersandAmpersandToken"),
                "barBar": node("BarBarToken"),
                "equals": node("EqualsToken"),
                "equalsEqualsEquals": node("EqualsEqualsEqualsToken"),
                "exclamationEqualsEquals": node("ExclamationEqualsEqualsToken"),
                "greaterThan": node("GreaterThanToken"),
                "lessThan": node("LessThanToken"),
                "minus": node("MinusToken"),
                "minusEquals": node("MinusEqualsToken"),
                "plus": node("PlusToken"),
                "plusEquals": node("PlusEqualsToken"),
            })),
            "rightHandSide": prop(reference("expression")),
        }),
        "Block": composite({
            "statement": prop(reference("statement"), 'array'),
        }),
        "BooleanKeyword": leaf(false),
        "BreakStatement": composite({
            "identifier": prop(reference("identifier"), 'optional'),
        }),
        "CallExpression": composite({
            "function": prop(reference("expression")),
            "typeParameters": prop(reference("type"), 'array'),
            "parameters": prop(reference("expression"), 'array'),
        }),
        "CaseBlock": composite({
            "x": prop(choice({
                "case": node("CaseClause"),
                "default": node("DefaultClause"),
            }), 'array'),
        }),
        "CaseClause": composite({
            "case": prop(reference("expression")),
            "statements": prop(reference("statement"), 'array'),
        }),
        "CatchClause": composite({
            "variable": prop(reference("variableDeclaration")),
            "block": prop(reference("block")),
        }),
        "ColonToken": leaf(false),
        "ConditionalExpression": composite({
            "test": prop(reference("expression")),
            "questionToken": prop(node("QuestionToken")),
            "ifExpression": prop(reference("expression")),
            "colonToken": prop(node("ColonToken")),
            "elseExpression": prop(reference("expression")),
        }),
        "ConstructSignature": composite({
            "parameters": prop(reference("parameter"), 'array'),
            "returnType": prop(reference("type")),
        }),
        "DeclareKeyword": leaf(false),
        "DefaultClause": composite({
            "statement": prop(reference("statement"), 'array'),
        }),
        "ElementAccessExpression": composite({
            "array": prop(reference("expression")),
            "element": prop(reference("expression")),
        }),
        "EqualsEqualsEqualsToken": leaf(false),
        "EqualsGreaterThanToken": leaf(false),
        "EqualsToken": leaf(false),
        "ExclamationEqualsEqualsToken": leaf(false),
        "ExportDeclaration": composite({
            "stringLiteral": prop(reference("stringLiteral")),
        }),
        "ExportKeyword": leaf(false),
        "ExpressionStatement": composite({
            "expression": prop(reference("expression")),
        }),
        "FalseKeyword": leaf(false),
        "ForStatement": composite({
            "initializer": prop(reference("variableDeclarationList")),
            "condition": prop(reference("expression")),
            "incrementer": prop(reference("expression")),
            "block": prop(reference("block")),
        }),
        "FunctionDeclaration": composite({
            "modifiers": prop(reference("modifier"), 'array'),
            "name": prop(reference("identifier")),
            "definition": prop(reference("functionDefinition")),
            "block": prop(reference("block"), 'optional'),
        }),
        "FunctionType": composite({
            "parameters": prop(reference("parameter"), 'array'),
            "returnType": prop(reference("type"), 'optional'),
        }),
        "GreaterThanToken": leaf(false),
        "Identifier": leaf(true),
        "IfStatement": composite({
            "expression": prop(reference("expression")),
            "thenStatement": prop(reference("statement")),
            "elseStatement": prop(reference("statement"), 'optional'),
        }),
        "ImportClause": composite({
            "x": prop(choice({
                "named": node("NamedImports"),
                "namespace": node("NamespaceImport"),
            })),
        }),
        "ImportDeclaration": composite({
            "clause": prop(node("ImportClause")),
            "file": prop(reference("stringLiteral")),
        }),
        "ImportSpecifier": composite({
            "name": prop(reference("identifier")),
            "as": prop(reference("identifier"), 'optional'),
        }),
        "IndexSignature": composite({
            "modifiers": prop(reference("modifier"), 'array'),
            "parameter": prop(reference("parameter")),
            "type": prop(reference("type"), 'optional'),
        }),
        "InterfaceDeclaration": composite({
            "modifiers": prop(reference("modifier"), 'array'),
            "name": prop(reference("identifier")),
            "typeParameters": prop(reference("typeParameter"), 'array'),
            "signature": prop(reference("typeSignature"), 'array'),
        }),
        "LabeledStatement": composite({
            "label": prop(reference("identifier")),
            "statement": prop(reference("statement")),
        }),
        "LessThanToken": leaf(false),
        "LiteralType": composite({
            "x": prop(choice({
                "null": node("NullKeyword"),
                "string": reference("stringLiteral"),
            })),
        }),
        "MethodSignature": composite({
            "name": prop(reference("identifier")),
            "definition": prop(reference("functionDefinition")),
        }),
        "MinusEqualsToken": leaf(false),
        "MinusToken": leaf(false),
        "NamedImports": composite({
            "ImportSpecifier": prop(node("ImportSpecifier"), 'array'),
        }),
        "NamespaceImport": composite({
            "identifier": prop(reference("identifier")),
        }),
        "NeverKeyword": leaf(false),
        "NewExpression": composite({
            "class": prop(reference("identifier")),
            "parameters": prop(reference("expression"), 'array'),
        }),
        "NoSubstitutionTemplateLiteral": leaf(false),
        "NullKeyword": leaf(false),
        "NumberKeyword": leaf(false),
        "NumericLiteral": leaf(true),
        "ObjectLiteralExpression": composite({
            "PropertyAssignment": prop(node("PropertyAssignment"), 'array'),
        }),
        "OptionalType": composite({
            "type": prop(reference("type")),
        }),
        "Parameter": composite({
            "name": prop(reference("identifier")),
            "questionToken": prop(node("QuestionToken"), 'optional'),
            "type": prop(reference("type"), 'optional'),
        }),
        "ParenthesizedExpression": composite({
            "expression": prop(reference("expression")),
        }),
        "ParenthesizedType": composite({
            "type": prop(reference("type")),
        }),
        "PlusEqualsToken": leaf(false),
        "PlusToken": leaf(false),
        "PostfixUnaryExpression": composite({
            "expression": prop(reference("expression")),
        }),
        "PrefixUnaryExpression": composite({
            "expression": prop(reference("expression")),
        }),
        "PropertyAccessExpression": composite({
            "object": prop(reference("expression")),
            "property": prop(reference("expression")),
        }),
        "PropertyAssignment": composite({
            "name": prop(choice({
                "identifier": reference("identifier"),
                "numericLiteral": reference("numericLiteral"),
                "stringLiteral": reference("stringLiteral"),
            })),
            "expression": prop(reference("expression")),
        }),
        "PropertySignature": composite({
            "modifiers": prop(reference("modifier"), 'array'),
            "name": prop(reference("identifierOrStringLiteral")),
            "quesionToken": prop(node("QuestionToken"), 'optional'),
            "type": prop(reference("type"), 'optional'),
        }),
        "QualifiedName": composite({
            "context": prop(reference("identifier")),
            "type": prop(reference("identifier")),
        }),
        "QuestionToken": leaf(false),
        "ReadonlyKeyword": leaf(false),
        "ReturnStatement": composite({
            "expression": prop(reference("expression"), 'optional'),
        }),
        "StringKeyword": leaf(false),
        "StringLiteral": leaf(true),
        "SwitchStatement": composite({
            "expression": prop(reference("expression")),
            "caseBlock": prop(node("CaseBlock")),
        }),
        "TemplateExpression": composite({
            "head": prop(node("TemplateHead")),
            "spans": prop(node("TemplateSpan"), 'array'),
        }),
        "TemplateHead": leaf(true),
        "TemplateMiddle": leaf(true),
        "TemplateSpan": composite({
            "expression": prop(reference("expression")),
            "x": prop(choice({
                "middle": node("TemplateMiddle"),
                "tail": node("TemplateTail"),
            })),
        }),
        "TemplateTail": leaf(true),
        "ThrowStatement": composite({
            "expression": prop(reference("expression")),
        }),
        "TrueKeyword": leaf(false),
        "TryStatement": composite({
            "block": prop(reference("block")),
            "catchClause": prop(node("CatchClause")),
        }),
        "TupleType": composite({
            "type": prop(reference("type"), 'array'),
        }),
        "TypeAliasDeclaration": composite({
            "modifiers": prop(reference("modifier"), 'array'),
            "name": prop(reference("identifier")),
            "typeParameters": prop(reference("typeParameter"), 'array'),
            "type": prop(reference("type")),
        }),
        "TypeLiteral": composite({
            "typeSignature": prop(reference("typeSignature"), 'array'),
        }),
        "TypeParameter": composite({
            "identifier": prop(reference("identifier")),
        }),
        "TypeReference": composite({
            "x": prop(choice({
                "identifier": reference("identifier"),
                "qualifiedName": node("QualifiedName"),
            })),
            "parameters": prop(reference("type"), 'array'),
        }),
        "UndefinedKeyword": leaf(false),
        "UnionType": composite({
            "type": prop(reference("type"), 'array'),
        }),
        "VariableDeclaration": composite({
            "name": prop(reference("identifier")),
            "type": prop(reference("type"), 'optional'),
            "expression": prop(reference("expression"), 'optional'),
        }),
        "VariableDeclarationList": composite({
            "variableDeclaration": prop(reference("variableDeclaration"), 'array'),
        }),
        "VariableStatement": composite({
            "modifiers": prop(reference("modifier"), 'array'),
            "variableDeclarationList": prop(reference("variableDeclarationList")),
        }),
        "VoidKeyword": leaf(false),
        "WhileStatement": composite({
            "condition": prop(reference("expression")),
            "block": prop(reference("block")),
        }),
    }),
    'root': "WWW",
}