import * as pl from 'pareto-core-lib'
import * as ps from 'pareto-core-state'

import * as muast from "glo-typescript-untyped-ast"
import * as mapi from "../interface"

export function parse(
    $: uast.T.UntypedNode,
    $i: {
        callback: ($: mapi.TRoot) => void,
        reportUnexpectedToken: ($: { path: string, token: uast.T.UntypedNode, expected: null | string }) => void,
        reportMissingToken: ($: { parentDetails: uast.T.Details, path: string, kindNameOptions: string, }) => void,
    },
    $d: {
        doUntil: <T>(stack: ps.Stack<T>, callback: ($: T) => boolean) => void,
        lookAhead: <T>(stack: ps.Stack<T>, exists: ($: T) => void, notExists: () => void) => void,
        stringsAreEqual: (a: string, b: string) => boolean,
    },
): void {
    const $x = $i
    function Gblock(
        node: uast.T.UntypedNode,
        children: ps.Stack<uast.T.UntypedNode>,
        callback: ($: mapi.TGblock) => void,
    ): void {
        children.pop(
            (currentChild) => {
                if ($d.stringsAreEqual(currentChild.kindName, "Block")) {
                    ((
                        $: uast.T.UntypedNode,
                        callback: ($: mapi.TNGblock$) => void,
                    ): void => {
                        const node = $
                        const children = ps.createStack($.children)
                        const elements = ps.createArrayBuilderFIXME<mapi.TVTGblock$>()
                        const processElement = () => {
                            Gstatement(node, children, ($) => {
                                elements.push($)
                            })
                        }
                        $d.doUntil(
                            children,
                            (nextChild) => {
                                switch (nextChild.kindName) {
                                    case 'Block':
                                        processElement()
                                        return true
                                    case 'BreakStatement':
                                        processElement()
                                        return true
                                    case 'ExportDeclaration':
                                        processElement()
                                        return true
                                    case 'ExpressionStatement':
                                        processElement()
                                        return true
                                    case 'ForStatement':
                                        processElement()
                                        return true
                                    case 'FunctionDeclaration':
                                        processElement()
                                        return true
                                    case 'IfStatement':
                                        processElement()
                                        return true
                                    case 'ImportDeclaration':
                                        processElement()
                                        return true
                                    case 'InterfaceDeclaration':
                                        processElement()
                                        return true
                                    case 'LabeledStatement':
                                        processElement()
                                        return true
                                    case 'ReturnStatement':
                                        processElement()
                                        return true
                                    case 'SwitchStatement':
                                        processElement()
                                        return true
                                    case 'ThrowStatement':
                                        processElement()
                                        return true
                                    case 'TryStatement':
                                        processElement()
                                        return true
                                    case 'TypeAliasDeclaration':
                                        processElement()
                                        return true
                                    case 'VariableStatement':
                                        processElement()
                                        return true
                                    case 'WhileStatement':
                                        processElement()
                                        return true
                                    default: return false
                                }
                            },
                        )
                        pl.cc(elements.getArray(), ($) => {
                            callback({
                                tokenDetails: node.details,
                                content: $,
                            })
                        })
                        children.pop(
                            (nextChild) => {
                                $x.reportUnexpectedToken({
                                    path: "Gblock$",
                                    token: nextChild,
                                    expected: null,
                                })
                            },
                            () => {},
                        )
                    })(
                        currentChild,
                        ($) => {
                            callback($)
                        }
                    )
                } else {
                    $x.reportUnexpectedToken({
                        path: "Gblock",
                        token: currentChild,
                        expected: "Block",
                    })
                }
            },
            () => { // no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "Gblock",
                    kindNameOptions: "Block",
                })
            },
        )
    }
    function Gexpression(
        node: uast.T.UntypedNode,
        children: ps.Stack<uast.T.UntypedNode>,
        callback: ($: mapi.TGexpression) => void,
    ): void {
        const choiceEnd_Gexpression = ($: mapi.TVTGexpression) => {
            callback($)
        }
        $d.lookAhead(children, 
            (nextChild) => {
                const choose_arrayLiteral = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "ArrayLiteralExpression")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGexpression_arrayLiteral$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const elements = ps.createArrayBuilderFIXME<mapi.TVTGexpression_arrayLiteral$>()
                                    const processElement = () => {
                                        Gexpression(node, children, ($) => {
                                            elements.push($)
                                        })
                                    }
                                    $d.doUntil(
                                        children,
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case 'ArrayLiteralExpression':
                                                    processElement()
                                                    return true
                                                case 'ArrowFunction':
                                                    processElement()
                                                    return true
                                                case 'BinaryExpression':
                                                    processElement()
                                                    return true
                                                case 'CallExpression':
                                                    processElement()
                                                    return true
                                                case 'ConditionalExpression':
                                                    processElement()
                                                    return true
                                                case 'ElementAccessExpression':
                                                    processElement()
                                                    return true
                                                case 'FalseKeyword':
                                                    processElement()
                                                    return true
                                                case 'Identifier':
                                                    processElement()
                                                    return true
                                                case 'NewExpression':
                                                    processElement()
                                                    return true
                                                case 'NoSubstitutionTemplateLiteral':
                                                    processElement()
                                                    return true
                                                case 'NullKeyword':
                                                    processElement()
                                                    return true
                                                case 'NumericLiteral':
                                                    processElement()
                                                    return true
                                                case 'ObjectLiteralExpression':
                                                    processElement()
                                                    return true
                                                case 'ParenthesizedExpression':
                                                    processElement()
                                                    return true
                                                case 'PostfixUnaryExpression':
                                                    processElement()
                                                    return true
                                                case 'PrefixUnaryExpression':
                                                    processElement()
                                                    return true
                                                case 'PropertyAccessExpression':
                                                    processElement()
                                                    return true
                                                case 'StringLiteral':
                                                    processElement()
                                                    return true
                                                case 'TemplateExpression':
                                                    processElement()
                                                    return true
                                                case 'TrueKeyword':
                                                    processElement()
                                                    return true
                                                default: return false
                                            }
                                        },
                                    )
                                    pl.cc(elements.getArray(), ($) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gexpression_arrayLiteral$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression(['arrayLiteral', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_arrayLiteral",
                                    token: currentChild,
                                    expected: "ArrayLiteralExpression",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_arrayLiteral",
                                kindNameOptions: "ArrayLiteralExpression",
                            })
                        },
                    )
                }
                const choose_arrowFunction = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "ArrowFunction")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGexpression_arrowFunction$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const sequenceEnd = ($: mapi.TVTGexpression_arrowFunction$) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    }
                                    const elements = ps.createArrayBuilderFIXME<mapi.TVTGexpression_arrowFunction$_parameters>()
                                    const processElement = () => {
                                        Gparameter(node, children, ($) => {
                                            elements.push($)
                                        })
                                    }
                                    $d.doUntil(
                                        children,
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case 'Parameter':
                                                    processElement()
                                                    return true
                                                default: return false
                                            }
                                        },
                                    )
                                    pl.cc(elements.getArray(), ($) => {
                                        const _parameters = $
                                        let optional: null | mapi.TVTGexpression_arrowFunction$_returnType = null
                                        const setOptional = () => {
                                            Gtype(node, children, ($) => {
                                                optional = $
                                            })
                                        }
                                        $d.lookAhead(children, 
                                            (nextChild) => {
                                                switch (nextChild.kindName) {
                                                    case 'AnyKeyword':
                                                        setOptional()
                                                        break
                                                    case 'ArrayType':
                                                        setOptional()
                                                        break
                                                    case 'BooleanKeyword':
                                                        setOptional()
                                                        break
                                                    case 'FunctionType':
                                                        setOptional()
                                                        break
                                                    case 'LiteralType':
                                                        setOptional()
                                                        break
                                                    case 'NeverKeyword':
                                                        setOptional()
                                                        break
                                                    case 'NumberKeyword':
                                                        setOptional()
                                                        break
                                                    case 'OptionalType':
                                                        setOptional()
                                                        break
                                                    case 'ParenthesizedType':
                                                        setOptional()
                                                        break
                                                    case 'StringKeyword':
                                                        setOptional()
                                                        break
                                                    case 'TupleType':
                                                        setOptional()
                                                        break
                                                    case 'TypeLiteral':
                                                        setOptional()
                                                        break
                                                    case 'TypeReference':
                                                        setOptional()
                                                        break
                                                    case 'UndefinedKeyword':
                                                        setOptional()
                                                        break
                                                    case 'UnionType':
                                                        setOptional()
                                                        break
                                                    case 'VoidKeyword':
                                                        setOptional()
                                                        break
                                                }
                                            },
                                            () => {},
                                        )
                                        pl.cc(optional, ($) => {
                                            const _returnType = $
                                            children.pop(
                                                (currentChild) => {
                                                    if ($d.stringsAreEqual(currentChild.kindName, "EqualsGreaterThanToken")) {
                                                        ((
                                                            $: uast.T.UntypedNode,
                                                            callback: ($: mapi.TNGexpression_arrowFunction$_equalsGreaterThan$) => void,
                                                        ): void => {
                                                            const node = $
                                                            const children = ps.createStack($.children)
                                                            callback($.details)
                                                            children.pop(
                                                                (nextChild) => {
                                                                    $x.reportUnexpectedToken({
                                                                        path: "Gexpression_arrowFunction$_equalsGreaterThan$",
                                                                        token: nextChild,
                                                                        expected: null,
                                                                    })
                                                                },
                                                                () => {},
                                                            )
                                                        })(
                                                            currentChild,
                                                            ($) => {
                                                                const _equalsGreaterThan = $
                                                                const choiceEnd_Gexpression_arrowFunction$_implementation = ($: mapi.TVTGexpression_arrowFunction$_implementation) => {
                                                                    const _implementation = $
                                                                    sequenceEnd({
                                                                        "parameters": _parameters,
                                                                        "returnType": _returnType,
                                                                        "equalsGreaterThan": _equalsGreaterThan,
                                                                        "implementation": _implementation,
                                                                    })
                                                                }
                                                                $d.lookAhead(children, 
                                                                    (nextChild) => {
                                                                        const choose_block = () => {
                                                                            Gblock(node, children, ($) => {
                                                                                choiceEnd_Gexpression_arrowFunction$_implementation(['block', $])
                                                                            })
                                                                        }
                                                                        const choose_expression = () => {
                                                                            Gexpression(node, children, ($) => {
                                                                                choiceEnd_Gexpression_arrowFunction$_implementation(['expression', $])
                                                                            })
                                                                        }
                                                                        switch (nextChild.kindName) {
                                                                            case 'ArrayLiteralExpression': /*Y*/ {
                                                                                choose_expression()
                                                                                break
                                                                            }
                                                                            case 'ArrowFunction': /*Y*/ {
                                                                                choose_expression()
                                                                                break
                                                                            }
                                                                            case 'BinaryExpression': /*Y*/ {
                                                                                choose_expression()
                                                                                break
                                                                            }
                                                                            case 'Block': /*Y*/ {
                                                                                choose_block()
                                                                                break
                                                                            }
                                                                            case 'CallExpression': /*Y*/ {
                                                                                choose_expression()
                                                                                break
                                                                            }
                                                                            case 'ConditionalExpression': /*Y*/ {
                                                                                choose_expression()
                                                                                break
                                                                            }
                                                                            case 'ElementAccessExpression': /*Y*/ {
                                                                                choose_expression()
                                                                                break
                                                                            }
                                                                            case 'FalseKeyword': /*Y*/ {
                                                                                choose_expression()
                                                                                break
                                                                            }
                                                                            case 'Identifier': /*Y*/ {
                                                                                choose_expression()
                                                                                break
                                                                            }
                                                                            case 'NewExpression': /*Y*/ {
                                                                                choose_expression()
                                                                                break
                                                                            }
                                                                            case 'NoSubstitutionTemplateLiteral': /*Y*/ {
                                                                                choose_expression()
                                                                                break
                                                                            }
                                                                            case 'NullKeyword': /*Y*/ {
                                                                                choose_expression()
                                                                                break
                                                                            }
                                                                            case 'NumericLiteral': /*Y*/ {
                                                                                choose_expression()
                                                                                break
                                                                            }
                                                                            case 'ObjectLiteralExpression': /*Y*/ {
                                                                                choose_expression()
                                                                                break
                                                                            }
                                                                            case 'ParenthesizedExpression': /*Y*/ {
                                                                                choose_expression()
                                                                                break
                                                                            }
                                                                            case 'PostfixUnaryExpression': /*Y*/ {
                                                                                choose_expression()
                                                                                break
                                                                            }
                                                                            case 'PrefixUnaryExpression': /*Y*/ {
                                                                                choose_expression()
                                                                                break
                                                                            }
                                                                            case 'PropertyAccessExpression': /*Y*/ {
                                                                                choose_expression()
                                                                                break
                                                                            }
                                                                            case 'StringLiteral': /*Y*/ {
                                                                                choose_expression()
                                                                                break
                                                                            }
                                                                            case 'TemplateExpression': /*Y*/ {
                                                                                choose_expression()
                                                                                break
                                                                            }
                                                                            case 'TrueKeyword': /*Y*/ {
                                                                                choose_expression()
                                                                                break
                                                                            }
                                                                            default: {
                                                                                $x.reportUnexpectedToken({
                                                                                    path: "Gexpression_arrowFunction$_implementation",
                                                                                    token: nextChild,
                                                                                    expected: "Block, ArrayLiteralExpression, ArrowFunction, BinaryExpression, CallExpression, ConditionalExpression, ElementAccessExpression, FalseKeyword, Identifier, NewExpression, NoSubstitutionTemplateLiteral, NullKeyword, NumericLiteral, ObjectLiteralExpression, ParenthesizedExpression, PostfixUnaryExpression, PrefixUnaryExpression, PropertyAccessExpression, StringLiteral, TemplateExpression, TrueKeyword",
                                                                                })
                                                                            }
                                                                        }
                                                                    },
                                                                    () => { // no child
                                                                        $x.reportMissingToken({
                                                                            parentDetails: node.details,
                                                                            path: "Gexpression_arrowFunction$_implementation",
                                                                            kindNameOptions: "Block, ArrayLiteralExpression, ArrowFunction, BinaryExpression, CallExpression, ConditionalExpression, ElementAccessExpression, FalseKeyword, Identifier, NewExpression, NoSubstitutionTemplateLiteral, NullKeyword, NumericLiteral, ObjectLiteralExpression, ParenthesizedExpression, PostfixUnaryExpression, PrefixUnaryExpression, PropertyAccessExpression, StringLiteral, TemplateExpression, TrueKeyword",
                                                                        })
                                                                    },
                                                                )
                                                            }
                                                        )
                                                    } else {
                                                        $x.reportUnexpectedToken({
                                                            path: "Gexpression_arrowFunction$_equalsGreaterThan",
                                                            token: currentChild,
                                                            expected: "EqualsGreaterThanToken",
                                                        })
                                                    }
                                                },
                                                () => { // no child
                                                    $x.reportMissingToken({
                                                        parentDetails: node.details,
                                                        path: "Gexpression_arrowFunction$_equalsGreaterThan",
                                                        kindNameOptions: "EqualsGreaterThanToken",
                                                    })
                                                },
                                            )
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gexpression_arrowFunction$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression(['arrowFunction', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_arrowFunction",
                                    token: currentChild,
                                    expected: "ArrowFunction",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_arrowFunction",
                                kindNameOptions: "ArrowFunction",
                            })
                        },
                    )
                }
                const choose_binary = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "BinaryExpression")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGexpression_binary$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const sequenceEnd = ($: mapi.TVTGexpression_binary$) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    }
                                    Gexpression(node, children, ($) => {
                                        const _leftHandSide = $
                                        const choiceEnd_Gexpression_binary$_operator = ($: mapi.TVTGexpression_binary$_operator) => {
                                            const _operator = $
                                            Gexpression(node, children, ($) => {
                                                const _rightHandSide = $
                                                sequenceEnd({
                                                    "leftHandSide": _leftHandSide,
                                                    "operator": _operator,
                                                    "rightHandSide": _rightHandSide,
                                                })
                                            })
                                        }
                                        $d.lookAhead(children, 
                                            (nextChild) => {
                                                const choose_ampersandAmpersand = () => {
                                                    children.pop(
                                                        (currentChild) => {
                                                            if ($d.stringsAreEqual(currentChild.kindName, "AmpersandAmpersandToken")) {
                                                                ((
                                                                    $: uast.T.UntypedNode,
                                                                    callback: ($: mapi.TNGexpression_binary$_operator_ampersandAmpersand$) => void,
                                                                ): void => {
                                                                    const node = $
                                                                    const children = ps.createStack($.children)
                                                                    callback($.details)
                                                                    children.pop(
                                                                        (nextChild) => {
                                                                            $x.reportUnexpectedToken({
                                                                                path: "Gexpression_binary$_operator_ampersandAmpersand$",
                                                                                token: nextChild,
                                                                                expected: null,
                                                                            })
                                                                        },
                                                                        () => {},
                                                                    )
                                                                })(
                                                                    currentChild,
                                                                    ($) => {
                                                                        choiceEnd_Gexpression_binary$_operator(['ampersandAmpersand', $])
                                                                    }
                                                                )
                                                            } else {
                                                                $x.reportUnexpectedToken({
                                                                    path: "Gexpression_binary$_operator_ampersandAmpersand",
                                                                    token: currentChild,
                                                                    expected: "AmpersandAmpersandToken",
                                                                })
                                                            }
                                                        },
                                                        () => { // no child
                                                            $x.reportMissingToken({
                                                                parentDetails: node.details,
                                                                path: "Gexpression_binary$_operator_ampersandAmpersand",
                                                                kindNameOptions: "AmpersandAmpersandToken",
                                                            })
                                                        },
                                                    )
                                                }
                                                const choose_barBar = () => {
                                                    children.pop(
                                                        (currentChild) => {
                                                            if ($d.stringsAreEqual(currentChild.kindName, "BarBarToken")) {
                                                                ((
                                                                    $: uast.T.UntypedNode,
                                                                    callback: ($: mapi.TNGexpression_binary$_operator_barBar$) => void,
                                                                ): void => {
                                                                    const node = $
                                                                    const children = ps.createStack($.children)
                                                                    callback($.details)
                                                                    children.pop(
                                                                        (nextChild) => {
                                                                            $x.reportUnexpectedToken({
                                                                                path: "Gexpression_binary$_operator_barBar$",
                                                                                token: nextChild,
                                                                                expected: null,
                                                                            })
                                                                        },
                                                                        () => {},
                                                                    )
                                                                })(
                                                                    currentChild,
                                                                    ($) => {
                                                                        choiceEnd_Gexpression_binary$_operator(['barBar', $])
                                                                    }
                                                                )
                                                            } else {
                                                                $x.reportUnexpectedToken({
                                                                    path: "Gexpression_binary$_operator_barBar",
                                                                    token: currentChild,
                                                                    expected: "BarBarToken",
                                                                })
                                                            }
                                                        },
                                                        () => { // no child
                                                            $x.reportMissingToken({
                                                                parentDetails: node.details,
                                                                path: "Gexpression_binary$_operator_barBar",
                                                                kindNameOptions: "BarBarToken",
                                                            })
                                                        },
                                                    )
                                                }
                                                const choose_equals = () => {
                                                    children.pop(
                                                        (currentChild) => {
                                                            if ($d.stringsAreEqual(currentChild.kindName, "EqualsToken")) {
                                                                ((
                                                                    $: uast.T.UntypedNode,
                                                                    callback: ($: mapi.TNGexpression_binary$_operator_equals$) => void,
                                                                ): void => {
                                                                    const node = $
                                                                    const children = ps.createStack($.children)
                                                                    callback($.details)
                                                                    children.pop(
                                                                        (nextChild) => {
                                                                            $x.reportUnexpectedToken({
                                                                                path: "Gexpression_binary$_operator_equals$",
                                                                                token: nextChild,
                                                                                expected: null,
                                                                            })
                                                                        },
                                                                        () => {},
                                                                    )
                                                                })(
                                                                    currentChild,
                                                                    ($) => {
                                                                        choiceEnd_Gexpression_binary$_operator(['equals', $])
                                                                    }
                                                                )
                                                            } else {
                                                                $x.reportUnexpectedToken({
                                                                    path: "Gexpression_binary$_operator_equals",
                                                                    token: currentChild,
                                                                    expected: "EqualsToken",
                                                                })
                                                            }
                                                        },
                                                        () => { // no child
                                                            $x.reportMissingToken({
                                                                parentDetails: node.details,
                                                                path: "Gexpression_binary$_operator_equals",
                                                                kindNameOptions: "EqualsToken",
                                                            })
                                                        },
                                                    )
                                                }
                                                const choose_equalsEqualsEquals = () => {
                                                    children.pop(
                                                        (currentChild) => {
                                                            if ($d.stringsAreEqual(currentChild.kindName, "EqualsEqualsEqualsToken")) {
                                                                ((
                                                                    $: uast.T.UntypedNode,
                                                                    callback: ($: mapi.TNGexpression_binary$_operator_equalsEqualsEquals$) => void,
                                                                ): void => {
                                                                    const node = $
                                                                    const children = ps.createStack($.children)
                                                                    callback($.details)
                                                                    children.pop(
                                                                        (nextChild) => {
                                                                            $x.reportUnexpectedToken({
                                                                                path: "Gexpression_binary$_operator_equalsEqualsEquals$",
                                                                                token: nextChild,
                                                                                expected: null,
                                                                            })
                                                                        },
                                                                        () => {},
                                                                    )
                                                                })(
                                                                    currentChild,
                                                                    ($) => {
                                                                        choiceEnd_Gexpression_binary$_operator(['equalsEqualsEquals', $])
                                                                    }
                                                                )
                                                            } else {
                                                                $x.reportUnexpectedToken({
                                                                    path: "Gexpression_binary$_operator_equalsEqualsEquals",
                                                                    token: currentChild,
                                                                    expected: "EqualsEqualsEqualsToken",
                                                                })
                                                            }
                                                        },
                                                        () => { // no child
                                                            $x.reportMissingToken({
                                                                parentDetails: node.details,
                                                                path: "Gexpression_binary$_operator_equalsEqualsEquals",
                                                                kindNameOptions: "EqualsEqualsEqualsToken",
                                                            })
                                                        },
                                                    )
                                                }
                                                const choose_exclamationEqualsEquals = () => {
                                                    children.pop(
                                                        (currentChild) => {
                                                            if ($d.stringsAreEqual(currentChild.kindName, "ExclamationEqualsEqualsToken")) {
                                                                ((
                                                                    $: uast.T.UntypedNode,
                                                                    callback: ($: mapi.TNGexpression_binary$_operator_exclamationEqualsEquals$) => void,
                                                                ): void => {
                                                                    const node = $
                                                                    const children = ps.createStack($.children)
                                                                    callback($.details)
                                                                    children.pop(
                                                                        (nextChild) => {
                                                                            $x.reportUnexpectedToken({
                                                                                path: "Gexpression_binary$_operator_exclamationEqualsEquals$",
                                                                                token: nextChild,
                                                                                expected: null,
                                                                            })
                                                                        },
                                                                        () => {},
                                                                    )
                                                                })(
                                                                    currentChild,
                                                                    ($) => {
                                                                        choiceEnd_Gexpression_binary$_operator(['exclamationEqualsEquals', $])
                                                                    }
                                                                )
                                                            } else {
                                                                $x.reportUnexpectedToken({
                                                                    path: "Gexpression_binary$_operator_exclamationEqualsEquals",
                                                                    token: currentChild,
                                                                    expected: "ExclamationEqualsEqualsToken",
                                                                })
                                                            }
                                                        },
                                                        () => { // no child
                                                            $x.reportMissingToken({
                                                                parentDetails: node.details,
                                                                path: "Gexpression_binary$_operator_exclamationEqualsEquals",
                                                                kindNameOptions: "ExclamationEqualsEqualsToken",
                                                            })
                                                        },
                                                    )
                                                }
                                                const choose_greaterThan = () => {
                                                    children.pop(
                                                        (currentChild) => {
                                                            if ($d.stringsAreEqual(currentChild.kindName, "GreaterThanToken")) {
                                                                ((
                                                                    $: uast.T.UntypedNode,
                                                                    callback: ($: mapi.TNGexpression_binary$_operator_greaterThan$) => void,
                                                                ): void => {
                                                                    const node = $
                                                                    const children = ps.createStack($.children)
                                                                    callback($.details)
                                                                    children.pop(
                                                                        (nextChild) => {
                                                                            $x.reportUnexpectedToken({
                                                                                path: "Gexpression_binary$_operator_greaterThan$",
                                                                                token: nextChild,
                                                                                expected: null,
                                                                            })
                                                                        },
                                                                        () => {},
                                                                    )
                                                                })(
                                                                    currentChild,
                                                                    ($) => {
                                                                        choiceEnd_Gexpression_binary$_operator(['greaterThan', $])
                                                                    }
                                                                )
                                                            } else {
                                                                $x.reportUnexpectedToken({
                                                                    path: "Gexpression_binary$_operator_greaterThan",
                                                                    token: currentChild,
                                                                    expected: "GreaterThanToken",
                                                                })
                                                            }
                                                        },
                                                        () => { // no child
                                                            $x.reportMissingToken({
                                                                parentDetails: node.details,
                                                                path: "Gexpression_binary$_operator_greaterThan",
                                                                kindNameOptions: "GreaterThanToken",
                                                            })
                                                        },
                                                    )
                                                }
                                                const choose_lessThan = () => {
                                                    children.pop(
                                                        (currentChild) => {
                                                            if ($d.stringsAreEqual(currentChild.kindName, "LessThanToken")) {
                                                                ((
                                                                    $: uast.T.UntypedNode,
                                                                    callback: ($: mapi.TNGexpression_binary$_operator_lessThan$) => void,
                                                                ): void => {
                                                                    const node = $
                                                                    const children = ps.createStack($.children)
                                                                    callback($.details)
                                                                    children.pop(
                                                                        (nextChild) => {
                                                                            $x.reportUnexpectedToken({
                                                                                path: "Gexpression_binary$_operator_lessThan$",
                                                                                token: nextChild,
                                                                                expected: null,
                                                                            })
                                                                        },
                                                                        () => {},
                                                                    )
                                                                })(
                                                                    currentChild,
                                                                    ($) => {
                                                                        choiceEnd_Gexpression_binary$_operator(['lessThan', $])
                                                                    }
                                                                )
                                                            } else {
                                                                $x.reportUnexpectedToken({
                                                                    path: "Gexpression_binary$_operator_lessThan",
                                                                    token: currentChild,
                                                                    expected: "LessThanToken",
                                                                })
                                                            }
                                                        },
                                                        () => { // no child
                                                            $x.reportMissingToken({
                                                                parentDetails: node.details,
                                                                path: "Gexpression_binary$_operator_lessThan",
                                                                kindNameOptions: "LessThanToken",
                                                            })
                                                        },
                                                    )
                                                }
                                                const choose_minus = () => {
                                                    children.pop(
                                                        (currentChild) => {
                                                            if ($d.stringsAreEqual(currentChild.kindName, "MinusToken")) {
                                                                ((
                                                                    $: uast.T.UntypedNode,
                                                                    callback: ($: mapi.TNGexpression_binary$_operator_minus$) => void,
                                                                ): void => {
                                                                    const node = $
                                                                    const children = ps.createStack($.children)
                                                                    callback($.details)
                                                                    children.pop(
                                                                        (nextChild) => {
                                                                            $x.reportUnexpectedToken({
                                                                                path: "Gexpression_binary$_operator_minus$",
                                                                                token: nextChild,
                                                                                expected: null,
                                                                            })
                                                                        },
                                                                        () => {},
                                                                    )
                                                                })(
                                                                    currentChild,
                                                                    ($) => {
                                                                        choiceEnd_Gexpression_binary$_operator(['minus', $])
                                                                    }
                                                                )
                                                            } else {
                                                                $x.reportUnexpectedToken({
                                                                    path: "Gexpression_binary$_operator_minus",
                                                                    token: currentChild,
                                                                    expected: "MinusToken",
                                                                })
                                                            }
                                                        },
                                                        () => { // no child
                                                            $x.reportMissingToken({
                                                                parentDetails: node.details,
                                                                path: "Gexpression_binary$_operator_minus",
                                                                kindNameOptions: "MinusToken",
                                                            })
                                                        },
                                                    )
                                                }
                                                const choose_minusEquals = () => {
                                                    children.pop(
                                                        (currentChild) => {
                                                            if ($d.stringsAreEqual(currentChild.kindName, "MinusEqualsToken")) {
                                                                ((
                                                                    $: uast.T.UntypedNode,
                                                                    callback: ($: mapi.TNGexpression_binary$_operator_minusEquals$) => void,
                                                                ): void => {
                                                                    const node = $
                                                                    const children = ps.createStack($.children)
                                                                    callback($.details)
                                                                    children.pop(
                                                                        (nextChild) => {
                                                                            $x.reportUnexpectedToken({
                                                                                path: "Gexpression_binary$_operator_minusEquals$",
                                                                                token: nextChild,
                                                                                expected: null,
                                                                            })
                                                                        },
                                                                        () => {},
                                                                    )
                                                                })(
                                                                    currentChild,
                                                                    ($) => {
                                                                        choiceEnd_Gexpression_binary$_operator(['minusEquals', $])
                                                                    }
                                                                )
                                                            } else {
                                                                $x.reportUnexpectedToken({
                                                                    path: "Gexpression_binary$_operator_minusEquals",
                                                                    token: currentChild,
                                                                    expected: "MinusEqualsToken",
                                                                })
                                                            }
                                                        },
                                                        () => { // no child
                                                            $x.reportMissingToken({
                                                                parentDetails: node.details,
                                                                path: "Gexpression_binary$_operator_minusEquals",
                                                                kindNameOptions: "MinusEqualsToken",
                                                            })
                                                        },
                                                    )
                                                }
                                                const choose_plus = () => {
                                                    children.pop(
                                                        (currentChild) => {
                                                            if ($d.stringsAreEqual(currentChild.kindName, "PlusToken")) {
                                                                ((
                                                                    $: uast.T.UntypedNode,
                                                                    callback: ($: mapi.TNGexpression_binary$_operator_plus$) => void,
                                                                ): void => {
                                                                    const node = $
                                                                    const children = ps.createStack($.children)
                                                                    callback($.details)
                                                                    children.pop(
                                                                        (nextChild) => {
                                                                            $x.reportUnexpectedToken({
                                                                                path: "Gexpression_binary$_operator_plus$",
                                                                                token: nextChild,
                                                                                expected: null,
                                                                            })
                                                                        },
                                                                        () => {},
                                                                    )
                                                                })(
                                                                    currentChild,
                                                                    ($) => {
                                                                        choiceEnd_Gexpression_binary$_operator(['plus', $])
                                                                    }
                                                                )
                                                            } else {
                                                                $x.reportUnexpectedToken({
                                                                    path: "Gexpression_binary$_operator_plus",
                                                                    token: currentChild,
                                                                    expected: "PlusToken",
                                                                })
                                                            }
                                                        },
                                                        () => { // no child
                                                            $x.reportMissingToken({
                                                                parentDetails: node.details,
                                                                path: "Gexpression_binary$_operator_plus",
                                                                kindNameOptions: "PlusToken",
                                                            })
                                                        },
                                                    )
                                                }
                                                const choose_plusEquals = () => {
                                                    children.pop(
                                                        (currentChild) => {
                                                            if ($d.stringsAreEqual(currentChild.kindName, "PlusEqualsToken")) {
                                                                ((
                                                                    $: uast.T.UntypedNode,
                                                                    callback: ($: mapi.TNGexpression_binary$_operator_plusEquals$) => void,
                                                                ): void => {
                                                                    const node = $
                                                                    const children = ps.createStack($.children)
                                                                    callback($.details)
                                                                    children.pop(
                                                                        (nextChild) => {
                                                                            $x.reportUnexpectedToken({
                                                                                path: "Gexpression_binary$_operator_plusEquals$",
                                                                                token: nextChild,
                                                                                expected: null,
                                                                            })
                                                                        },
                                                                        () => {},
                                                                    )
                                                                })(
                                                                    currentChild,
                                                                    ($) => {
                                                                        choiceEnd_Gexpression_binary$_operator(['plusEquals', $])
                                                                    }
                                                                )
                                                            } else {
                                                                $x.reportUnexpectedToken({
                                                                    path: "Gexpression_binary$_operator_plusEquals",
                                                                    token: currentChild,
                                                                    expected: "PlusEqualsToken",
                                                                })
                                                            }
                                                        },
                                                        () => { // no child
                                                            $x.reportMissingToken({
                                                                parentDetails: node.details,
                                                                path: "Gexpression_binary$_operator_plusEquals",
                                                                kindNameOptions: "PlusEqualsToken",
                                                            })
                                                        },
                                                    )
                                                }
                                                switch (nextChild.kindName) {
                                                    case 'AmpersandAmpersandToken': /*Y*/ {
                                                        choose_ampersandAmpersand()
                                                        break
                                                    }
                                                    case 'BarBarToken': /*Y*/ {
                                                        choose_barBar()
                                                        break
                                                    }
                                                    case 'EqualsEqualsEqualsToken': /*Y*/ {
                                                        choose_equalsEqualsEquals()
                                                        break
                                                    }
                                                    case 'EqualsToken': /*Y*/ {
                                                        choose_equals()
                                                        break
                                                    }
                                                    case 'ExclamationEqualsEqualsToken': /*Y*/ {
                                                        choose_exclamationEqualsEquals()
                                                        break
                                                    }
                                                    case 'GreaterThanToken': /*Y*/ {
                                                        choose_greaterThan()
                                                        break
                                                    }
                                                    case 'LessThanToken': /*Y*/ {
                                                        choose_lessThan()
                                                        break
                                                    }
                                                    case 'MinusEqualsToken': /*Y*/ {
                                                        choose_minusEquals()
                                                        break
                                                    }
                                                    case 'MinusToken': /*Y*/ {
                                                        choose_minus()
                                                        break
                                                    }
                                                    case 'PlusEqualsToken': /*Y*/ {
                                                        choose_plusEquals()
                                                        break
                                                    }
                                                    case 'PlusToken': /*Y*/ {
                                                        choose_plus()
                                                        break
                                                    }
                                                    default: {
                                                        $x.reportUnexpectedToken({
                                                            path: "Gexpression_binary$_operator",
                                                            token: nextChild,
                                                            expected: "AmpersandAmpersandToken, BarBarToken, EqualsToken, EqualsEqualsEqualsToken, ExclamationEqualsEqualsToken, GreaterThanToken, LessThanToken, MinusToken, MinusEqualsToken, PlusToken, PlusEqualsToken",
                                                        })
                                                    }
                                                }
                                            },
                                            () => { // no child
                                                $x.reportMissingToken({
                                                    parentDetails: node.details,
                                                    path: "Gexpression_binary$_operator",
                                                    kindNameOptions: "AmpersandAmpersandToken, BarBarToken, EqualsToken, EqualsEqualsEqualsToken, ExclamationEqualsEqualsToken, GreaterThanToken, LessThanToken, MinusToken, MinusEqualsToken, PlusToken, PlusEqualsToken",
                                                })
                                            },
                                        )
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gexpression_binary$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression(['binary', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_binary",
                                    token: currentChild,
                                    expected: "BinaryExpression",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_binary",
                                kindNameOptions: "BinaryExpression",
                            })
                        },
                    )
                }
                const choose_call = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "CallExpression")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGexpression_call$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const sequenceEnd = ($: mapi.TVTGexpression_call$) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    }
                                    Gexpression(node, children, ($) => {
                                        const _function = $
                                        const elements = ps.createArrayBuilderFIXME<mapi.TVTGexpression_call$_typeParameters>()
                                        const processElement = () => {
                                            Gtype(node, children, ($) => {
                                                elements.push($)
                                            })
                                        }
                                        $d.doUntil(
                                            children,
                                            (nextChild) => {
                                                switch (nextChild.kindName) {
                                                    case 'AnyKeyword':
                                                        processElement()
                                                        return true
                                                    case 'ArrayType':
                                                        processElement()
                                                        return true
                                                    case 'BooleanKeyword':
                                                        processElement()
                                                        return true
                                                    case 'FunctionType':
                                                        processElement()
                                                        return true
                                                    case 'LiteralType':
                                                        processElement()
                                                        return true
                                                    case 'NeverKeyword':
                                                        processElement()
                                                        return true
                                                    case 'NumberKeyword':
                                                        processElement()
                                                        return true
                                                    case 'OptionalType':
                                                        processElement()
                                                        return true
                                                    case 'ParenthesizedType':
                                                        processElement()
                                                        return true
                                                    case 'StringKeyword':
                                                        processElement()
                                                        return true
                                                    case 'TupleType':
                                                        processElement()
                                                        return true
                                                    case 'TypeLiteral':
                                                        processElement()
                                                        return true
                                                    case 'TypeReference':
                                                        processElement()
                                                        return true
                                                    case 'UndefinedKeyword':
                                                        processElement()
                                                        return true
                                                    case 'UnionType':
                                                        processElement()
                                                        return true
                                                    case 'VoidKeyword':
                                                        processElement()
                                                        return true
                                                    default: return false
                                                }
                                            },
                                        )
                                        pl.cc(elements.getArray(), ($) => {
                                            const _typeParameters = $
                                            const elements = ps.createArrayBuilderFIXME<mapi.TVTGexpression_call$_parameters>()
                                            const processElement = () => {
                                                Gexpression(node, children, ($) => {
                                                    elements.push($)
                                                })
                                            }
                                            $d.doUntil(
                                                children,
                                                (nextChild) => {
                                                    switch (nextChild.kindName) {
                                                        case 'ArrayLiteralExpression':
                                                            processElement()
                                                            return true
                                                        case 'ArrowFunction':
                                                            processElement()
                                                            return true
                                                        case 'BinaryExpression':
                                                            processElement()
                                                            return true
                                                        case 'CallExpression':
                                                            processElement()
                                                            return true
                                                        case 'ConditionalExpression':
                                                            processElement()
                                                            return true
                                                        case 'ElementAccessExpression':
                                                            processElement()
                                                            return true
                                                        case 'FalseKeyword':
                                                            processElement()
                                                            return true
                                                        case 'Identifier':
                                                            processElement()
                                                            return true
                                                        case 'NewExpression':
                                                            processElement()
                                                            return true
                                                        case 'NoSubstitutionTemplateLiteral':
                                                            processElement()
                                                            return true
                                                        case 'NullKeyword':
                                                            processElement()
                                                            return true
                                                        case 'NumericLiteral':
                                                            processElement()
                                                            return true
                                                        case 'ObjectLiteralExpression':
                                                            processElement()
                                                            return true
                                                        case 'ParenthesizedExpression':
                                                            processElement()
                                                            return true
                                                        case 'PostfixUnaryExpression':
                                                            processElement()
                                                            return true
                                                        case 'PrefixUnaryExpression':
                                                            processElement()
                                                            return true
                                                        case 'PropertyAccessExpression':
                                                            processElement()
                                                            return true
                                                        case 'StringLiteral':
                                                            processElement()
                                                            return true
                                                        case 'TemplateExpression':
                                                            processElement()
                                                            return true
                                                        case 'TrueKeyword':
                                                            processElement()
                                                            return true
                                                        default: return false
                                                    }
                                                },
                                            )
                                            pl.cc(elements.getArray(), ($) => {
                                                const _parameters = $
                                                sequenceEnd({
                                                    "function": _function,
                                                    "typeParameters": _typeParameters,
                                                    "parameters": _parameters,
                                                })
                                            })
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gexpression_call$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression(['call', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_call",
                                    token: currentChild,
                                    expected: "CallExpression",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_call",
                                kindNameOptions: "CallExpression",
                            })
                        },
                    )
                }
                const choose_conditional = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "ConditionalExpression")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGexpression_conditional$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const sequenceEnd = ($: mapi.TVTGexpression_conditional$) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    }
                                    Gexpression(node, children, ($) => {
                                        const _test = $
                                        children.pop(
                                            (currentChild) => {
                                                if ($d.stringsAreEqual(currentChild.kindName, "QuestionToken")) {
                                                    ((
                                                        $: uast.T.UntypedNode,
                                                        callback: ($: mapi.TNGexpression_conditional$_questionToken$) => void,
                                                    ): void => {
                                                        const node = $
                                                        const children = ps.createStack($.children)
                                                        callback($.details)
                                                        children.pop(
                                                            (nextChild) => {
                                                                $x.reportUnexpectedToken({
                                                                    path: "Gexpression_conditional$_questionToken$",
                                                                    token: nextChild,
                                                                    expected: null,
                                                                })
                                                            },
                                                            () => {},
                                                        )
                                                    })(
                                                        currentChild,
                                                        ($) => {
                                                            const _questionToken = $
                                                            Gexpression(node, children, ($) => {
                                                                const _ifExpression = $
                                                                children.pop(
                                                                    (currentChild) => {
                                                                        if ($d.stringsAreEqual(currentChild.kindName, "ColonToken")) {
                                                                            ((
                                                                                $: uast.T.UntypedNode,
                                                                                callback: ($: mapi.TNGexpression_conditional$_colonToken$) => void,
                                                                            ): void => {
                                                                                const node = $
                                                                                const children = ps.createStack($.children)
                                                                                callback($.details)
                                                                                children.pop(
                                                                                    (nextChild) => {
                                                                                        $x.reportUnexpectedToken({
                                                                                            path: "Gexpression_conditional$_colonToken$",
                                                                                            token: nextChild,
                                                                                            expected: null,
                                                                                        })
                                                                                    },
                                                                                    () => {},
                                                                                )
                                                                            })(
                                                                                currentChild,
                                                                                ($) => {
                                                                                    const _colonToken = $
                                                                                    Gexpression(node, children, ($) => {
                                                                                        const _elseExpression = $
                                                                                        sequenceEnd({
                                                                                            "test": _test,
                                                                                            "questionToken": _questionToken,
                                                                                            "ifExpression": _ifExpression,
                                                                                            "colonToken": _colonToken,
                                                                                            "elseExpression": _elseExpression,
                                                                                        })
                                                                                    })
                                                                                }
                                                                            )
                                                                        } else {
                                                                            $x.reportUnexpectedToken({
                                                                                path: "Gexpression_conditional$_colonToken",
                                                                                token: currentChild,
                                                                                expected: "ColonToken",
                                                                            })
                                                                        }
                                                                    },
                                                                    () => { // no child
                                                                        $x.reportMissingToken({
                                                                            parentDetails: node.details,
                                                                            path: "Gexpression_conditional$_colonToken",
                                                                            kindNameOptions: "ColonToken",
                                                                        })
                                                                    },
                                                                )
                                                            })
                                                        }
                                                    )
                                                } else {
                                                    $x.reportUnexpectedToken({
                                                        path: "Gexpression_conditional$_questionToken",
                                                        token: currentChild,
                                                        expected: "QuestionToken",
                                                    })
                                                }
                                            },
                                            () => { // no child
                                                $x.reportMissingToken({
                                                    parentDetails: node.details,
                                                    path: "Gexpression_conditional$_questionToken",
                                                    kindNameOptions: "QuestionToken",
                                                })
                                            },
                                        )
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gexpression_conditional$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression(['conditional', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_conditional",
                                    token: currentChild,
                                    expected: "ConditionalExpression",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_conditional",
                                kindNameOptions: "ConditionalExpression",
                            })
                        },
                    )
                }
                const choose_elementAccess = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "ElementAccessExpression")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGexpression_elementAccess$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const sequenceEnd = ($: mapi.TVTGexpression_elementAccess$) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    }
                                    Gexpression(node, children, ($) => {
                                        const _array = $
                                        Gexpression(node, children, ($) => {
                                            const _element = $
                                            sequenceEnd({
                                                "array": _array,
                                                "element": _element,
                                            })
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gexpression_elementAccess$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression(['elementAccess', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_elementAccess",
                                    token: currentChild,
                                    expected: "ElementAccessExpression",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_elementAccess",
                                kindNameOptions: "ElementAccessExpression",
                            })
                        },
                    )
                }
                const choose_false = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "FalseKeyword")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGexpression_false$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    callback($.details)
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gexpression_false$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression(['false', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_false",
                                    token: currentChild,
                                    expected: "FalseKeyword",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_false",
                                kindNameOptions: "FalseKeyword",
                            })
                        },
                    )
                }
                const choose_identifier = () => {
                    Gidentifier(node, children, ($) => {
                        choiceEnd_Gexpression(['identifier', $])
                    })
                }
                const choose_new = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "NewExpression")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGexpression_new$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const sequenceEnd = ($: mapi.TVTGexpression_new$) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    }
                                    Gidentifier(node, children, ($) => {
                                        const _class = $
                                        const elements = ps.createArrayBuilderFIXME<mapi.TVTGexpression_new$_parameters>()
                                        const processElement = () => {
                                            Gexpression(node, children, ($) => {
                                                elements.push($)
                                            })
                                        }
                                        $d.doUntil(
                                            children,
                                            (nextChild) => {
                                                switch (nextChild.kindName) {
                                                    case 'ArrayLiteralExpression':
                                                        processElement()
                                                        return true
                                                    case 'ArrowFunction':
                                                        processElement()
                                                        return true
                                                    case 'BinaryExpression':
                                                        processElement()
                                                        return true
                                                    case 'CallExpression':
                                                        processElement()
                                                        return true
                                                    case 'ConditionalExpression':
                                                        processElement()
                                                        return true
                                                    case 'ElementAccessExpression':
                                                        processElement()
                                                        return true
                                                    case 'FalseKeyword':
                                                        processElement()
                                                        return true
                                                    case 'Identifier':
                                                        processElement()
                                                        return true
                                                    case 'NewExpression':
                                                        processElement()
                                                        return true
                                                    case 'NoSubstitutionTemplateLiteral':
                                                        processElement()
                                                        return true
                                                    case 'NullKeyword':
                                                        processElement()
                                                        return true
                                                    case 'NumericLiteral':
                                                        processElement()
                                                        return true
                                                    case 'ObjectLiteralExpression':
                                                        processElement()
                                                        return true
                                                    case 'ParenthesizedExpression':
                                                        processElement()
                                                        return true
                                                    case 'PostfixUnaryExpression':
                                                        processElement()
                                                        return true
                                                    case 'PrefixUnaryExpression':
                                                        processElement()
                                                        return true
                                                    case 'PropertyAccessExpression':
                                                        processElement()
                                                        return true
                                                    case 'StringLiteral':
                                                        processElement()
                                                        return true
                                                    case 'TemplateExpression':
                                                        processElement()
                                                        return true
                                                    case 'TrueKeyword':
                                                        processElement()
                                                        return true
                                                    default: return false
                                                }
                                            },
                                        )
                                        pl.cc(elements.getArray(), ($) => {
                                            const _parameters = $
                                            sequenceEnd({
                                                "class": _class,
                                                "parameters": _parameters,
                                            })
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gexpression_new$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression(['new', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_new",
                                    token: currentChild,
                                    expected: "NewExpression",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_new",
                                kindNameOptions: "NewExpression",
                            })
                        },
                    )
                }
                const choose_noSubstitutionTemplateLiteral = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "NoSubstitutionTemplateLiteral")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGexpression_noSubstitutionTemplateLiteral$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    callback($.details)
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gexpression_noSubstitutionTemplateLiteral$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression(['noSubstitutionTemplateLiteral', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_noSubstitutionTemplateLiteral",
                                    token: currentChild,
                                    expected: "NoSubstitutionTemplateLiteral",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_noSubstitutionTemplateLiteral",
                                kindNameOptions: "NoSubstitutionTemplateLiteral",
                            })
                        },
                    )
                }
                const choose_nullKeyword = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "NullKeyword")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGexpression_nullKeyword$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    callback($.details)
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gexpression_nullKeyword$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression(['nullKeyword', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_nullKeyword",
                                    token: currentChild,
                                    expected: "NullKeyword",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_nullKeyword",
                                kindNameOptions: "NullKeyword",
                            })
                        },
                    )
                }
                const choose_numericLiteral = () => {
                    GnumericLiteral(node, children, ($) => {
                        choiceEnd_Gexpression(['numericLiteral', $])
                    })
                }
                const choose_objectLiteral = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "ObjectLiteralExpression")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGexpression_objectLiteral$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const elements = ps.createArrayBuilderFIXME<mapi.TVTGexpression_objectLiteral$>()
                                    const processElement = () => {
                                        children.pop(
                                            (currentChild) => {
                                                if ($d.stringsAreEqual(currentChild.kindName, "PropertyAssignment")) {
                                                    ((
                                                        $: uast.T.UntypedNode,
                                                        callback: ($: mapi.TNGexpression_objectLiteral$$) => void,
                                                    ): void => {
                                                        const node = $
                                                        const children = ps.createStack($.children)
                                                        const sequenceEnd = ($: mapi.TVTGexpression_objectLiteral$$) => {
                                                            callback({
                                                                tokenDetails: node.details,
                                                                content: $,
                                                            })
                                                        }
                                                        const choiceEnd_Gexpression_objectLiteral$$_name = ($: mapi.TVTGexpression_objectLiteral$$_name) => {
                                                            const _name = $
                                                            Gexpression(node, children, ($) => {
                                                                const _expression = $
                                                                sequenceEnd({
                                                                    "name": _name,
                                                                    "expression": _expression,
                                                                })
                                                            })
                                                        }
                                                        $d.lookAhead(children, 
                                                            (nextChild) => {
                                                                const choose_identifier = () => {
                                                                    Gidentifier(node, children, ($) => {
                                                                        choiceEnd_Gexpression_objectLiteral$$_name(['identifier', $])
                                                                    })
                                                                }
                                                                const choose_numericLiteral = () => {
                                                                    GnumericLiteral(node, children, ($) => {
                                                                        choiceEnd_Gexpression_objectLiteral$$_name(['numericLiteral', $])
                                                                    })
                                                                }
                                                                const choose_stringLiteral = () => {
                                                                    GstringLiteral(node, children, ($) => {
                                                                        choiceEnd_Gexpression_objectLiteral$$_name(['stringLiteral', $])
                                                                    })
                                                                }
                                                                switch (nextChild.kindName) {
                                                                    case 'Identifier': /*Y*/ {
                                                                        choose_identifier()
                                                                        break
                                                                    }
                                                                    case 'NumericLiteral': /*Y*/ {
                                                                        choose_numericLiteral()
                                                                        break
                                                                    }
                                                                    case 'StringLiteral': /*Y*/ {
                                                                        choose_stringLiteral()
                                                                        break
                                                                    }
                                                                    default: {
                                                                        $x.reportUnexpectedToken({
                                                                            path: "Gexpression_objectLiteral$$_name",
                                                                            token: nextChild,
                                                                            expected: "Identifier, NumericLiteral, StringLiteral",
                                                                        })
                                                                    }
                                                                }
                                                            },
                                                            () => { // no child
                                                                $x.reportMissingToken({
                                                                    parentDetails: node.details,
                                                                    path: "Gexpression_objectLiteral$$_name",
                                                                    kindNameOptions: "Identifier, NumericLiteral, StringLiteral",
                                                                })
                                                            },
                                                        )
                                                        children.pop(
                                                            (nextChild) => {
                                                                $x.reportUnexpectedToken({
                                                                    path: "Gexpression_objectLiteral$$",
                                                                    token: nextChild,
                                                                    expected: null,
                                                                })
                                                            },
                                                            () => {},
                                                        )
                                                    })(
                                                        currentChild,
                                                        ($) => {
                                                            elements.push($)
                                                        }
                                                    )
                                                } else {
                                                    $x.reportUnexpectedToken({
                                                        path: "Gexpression_objectLiteral$",
                                                        token: currentChild,
                                                        expected: "PropertyAssignment",
                                                    })
                                                }
                                            },
                                            () => { // no child
                                                $x.reportMissingToken({
                                                    parentDetails: node.details,
                                                    path: "Gexpression_objectLiteral$",
                                                    kindNameOptions: "PropertyAssignment",
                                                })
                                            },
                                        )
                                    }
                                    $d.doUntil(
                                        children,
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case 'PropertyAssignment':
                                                    processElement()
                                                    return true
                                                default: return false
                                            }
                                        },
                                    )
                                    pl.cc(elements.getArray(), ($) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gexpression_objectLiteral$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression(['objectLiteral', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_objectLiteral",
                                    token: currentChild,
                                    expected: "ObjectLiteralExpression",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_objectLiteral",
                                kindNameOptions: "ObjectLiteralExpression",
                            })
                        },
                    )
                }
                const choose_parenthesizedExpression = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "ParenthesizedExpression")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGexpression_parenthesizedExpression$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    Gexpression(node, children, ($) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gexpression_parenthesizedExpression$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression(['parenthesizedExpression', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_parenthesizedExpression",
                                    token: currentChild,
                                    expected: "ParenthesizedExpression",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_parenthesizedExpression",
                                kindNameOptions: "ParenthesizedExpression",
                            })
                        },
                    )
                }
                const choose_postfixUnary = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "PostfixUnaryExpression")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGexpression_postfixUnary$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    Gexpression(node, children, ($) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gexpression_postfixUnary$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression(['postfixUnary', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_postfixUnary",
                                    token: currentChild,
                                    expected: "PostfixUnaryExpression",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_postfixUnary",
                                kindNameOptions: "PostfixUnaryExpression",
                            })
                        },
                    )
                }
                const choose_prefixUnary = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "PrefixUnaryExpression")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGexpression_prefixUnary$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    Gexpression(node, children, ($) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gexpression_prefixUnary$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression(['prefixUnary', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_prefixUnary",
                                    token: currentChild,
                                    expected: "PrefixUnaryExpression",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_prefixUnary",
                                kindNameOptions: "PrefixUnaryExpression",
                            })
                        },
                    )
                }
                const choose_propertyAccess = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "PropertyAccessExpression")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGexpression_propertyAccess$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const sequenceEnd = ($: mapi.TVTGexpression_propertyAccess$) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    }
                                    Gexpression(node, children, ($) => {
                                        const _object = $
                                        Gexpression(node, children, ($) => {
                                            const _property = $
                                            sequenceEnd({
                                                "object": _object,
                                                "property": _property,
                                            })
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gexpression_propertyAccess$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression(['propertyAccess', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_propertyAccess",
                                    token: currentChild,
                                    expected: "PropertyAccessExpression",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_propertyAccess",
                                kindNameOptions: "PropertyAccessExpression",
                            })
                        },
                    )
                }
                const choose_stringLiteral = () => {
                    GstringLiteral(node, children, ($) => {
                        choiceEnd_Gexpression(['stringLiteral', $])
                    })
                }
                const choose_template = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "TemplateExpression")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGexpression_template$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const sequenceEnd = ($: mapi.TVTGexpression_template$) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    }
                                    children.pop(
                                        (currentChild) => {
                                            if ($d.stringsAreEqual(currentChild.kindName, "TemplateHead")) {
                                                ((
                                                    $: uast.T.UntypedNode,
                                                    callback: ($: mapi.TNGexpression_template$_head$) => void,
                                                ): void => {
                                                    const node = $
                                                    const children = ps.createStack($.children)
                                                    callback({
                                                        tokenDetails: $.details,
                                                        value: $.value
                                                    })
                                                    children.pop(
                                                        (nextChild) => {
                                                            $x.reportUnexpectedToken({
                                                                path: "Gexpression_template$_head$",
                                                                token: nextChild,
                                                                expected: null,
                                                            })
                                                        },
                                                        () => {},
                                                    )
                                                })(
                                                    currentChild,
                                                    ($) => {
                                                        const _head = $
                                                        const elements = ps.createArrayBuilderFIXME<mapi.TVTGexpression_template$_spans>()
                                                        const processElement = () => {
                                                            children.pop(
                                                                (currentChild) => {
                                                                    if ($d.stringsAreEqual(currentChild.kindName, "TemplateSpan")) {
                                                                        ((
                                                                            $: uast.T.UntypedNode,
                                                                            callback: ($: mapi.TNGexpression_template$_spans$) => void,
                                                                        ): void => {
                                                                            const node = $
                                                                            const children = ps.createStack($.children)
                                                                            const sequenceEnd = ($: mapi.TVTGexpression_template$_spans$) => {
                                                                                callback({
                                                                                    tokenDetails: node.details,
                                                                                    content: $,
                                                                                })
                                                                            }
                                                                            Gexpression(node, children, ($) => {
                                                                                const _expression = $
                                                                                const choiceEnd_Gexpression_template$_spans$_x = ($: mapi.TVTGexpression_template$_spans$_x) => {
                                                                                    const _x = $
                                                                                    sequenceEnd({
                                                                                        "expression": _expression,
                                                                                        "x": _x,
                                                                                    })
                                                                                }
                                                                                $d.lookAhead(children, 
                                                                                    (nextChild) => {
                                                                                        const choose_middle = () => {
                                                                                            children.pop(
                                                                                                (currentChild) => {
                                                                                                    if ($d.stringsAreEqual(currentChild.kindName, "TemplateMiddle")) {
                                                                                                        ((
                                                                                                            $: uast.T.UntypedNode,
                                                                                                            callback: ($: mapi.TNGexpression_template$_spans$_x_middle$) => void,
                                                                                                        ): void => {
                                                                                                            const node = $
                                                                                                            const children = ps.createStack($.children)
                                                                                                            callback({
                                                                                                                tokenDetails: $.details,
                                                                                                                value: $.value
                                                                                                            })
                                                                                                            children.pop(
                                                                                                                (nextChild) => {
                                                                                                                    $x.reportUnexpectedToken({
                                                                                                                        path: "Gexpression_template$_spans$_x_middle$",
                                                                                                                        token: nextChild,
                                                                                                                        expected: null,
                                                                                                                    })
                                                                                                                },
                                                                                                                () => {},
                                                                                                            )
                                                                                                        })(
                                                                                                            currentChild,
                                                                                                            ($) => {
                                                                                                                choiceEnd_Gexpression_template$_spans$_x(['middle', $])
                                                                                                            }
                                                                                                        )
                                                                                                    } else {
                                                                                                        $x.reportUnexpectedToken({
                                                                                                            path: "Gexpression_template$_spans$_x_middle",
                                                                                                            token: currentChild,
                                                                                                            expected: "TemplateMiddle",
                                                                                                        })
                                                                                                    }
                                                                                                },
                                                                                                () => { // no child
                                                                                                    $x.reportMissingToken({
                                                                                                        parentDetails: node.details,
                                                                                                        path: "Gexpression_template$_spans$_x_middle",
                                                                                                        kindNameOptions: "TemplateMiddle",
                                                                                                    })
                                                                                                },
                                                                                            )
                                                                                        }
                                                                                        const choose_tail = () => {
                                                                                            children.pop(
                                                                                                (currentChild) => {
                                                                                                    if ($d.stringsAreEqual(currentChild.kindName, "TemplateTail")) {
                                                                                                        ((
                                                                                                            $: uast.T.UntypedNode,
                                                                                                            callback: ($: mapi.TNGexpression_template$_spans$_x_tail$) => void,
                                                                                                        ): void => {
                                                                                                            const node = $
                                                                                                            const children = ps.createStack($.children)
                                                                                                            callback({
                                                                                                                tokenDetails: $.details,
                                                                                                                value: $.value
                                                                                                            })
                                                                                                            children.pop(
                                                                                                                (nextChild) => {
                                                                                                                    $x.reportUnexpectedToken({
                                                                                                                        path: "Gexpression_template$_spans$_x_tail$",
                                                                                                                        token: nextChild,
                                                                                                                        expected: null,
                                                                                                                    })
                                                                                                                },
                                                                                                                () => {},
                                                                                                            )
                                                                                                        })(
                                                                                                            currentChild,
                                                                                                            ($) => {
                                                                                                                choiceEnd_Gexpression_template$_spans$_x(['tail', $])
                                                                                                            }
                                                                                                        )
                                                                                                    } else {
                                                                                                        $x.reportUnexpectedToken({
                                                                                                            path: "Gexpression_template$_spans$_x_tail",
                                                                                                            token: currentChild,
                                                                                                            expected: "TemplateTail",
                                                                                                        })
                                                                                                    }
                                                                                                },
                                                                                                () => { // no child
                                                                                                    $x.reportMissingToken({
                                                                                                        parentDetails: node.details,
                                                                                                        path: "Gexpression_template$_spans$_x_tail",
                                                                                                        kindNameOptions: "TemplateTail",
                                                                                                    })
                                                                                                },
                                                                                            )
                                                                                        }
                                                                                        switch (nextChild.kindName) {
                                                                                            case 'TemplateMiddle': /*Y*/ {
                                                                                                choose_middle()
                                                                                                break
                                                                                            }
                                                                                            case 'TemplateTail': /*Y*/ {
                                                                                                choose_tail()
                                                                                                break
                                                                                            }
                                                                                            default: {
                                                                                                $x.reportUnexpectedToken({
                                                                                                    path: "Gexpression_template$_spans$_x",
                                                                                                    token: nextChild,
                                                                                                    expected: "TemplateMiddle, TemplateTail",
                                                                                                })
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    () => { // no child
                                                                                        $x.reportMissingToken({
                                                                                            parentDetails: node.details,
                                                                                            path: "Gexpression_template$_spans$_x",
                                                                                            kindNameOptions: "TemplateMiddle, TemplateTail",
                                                                                        })
                                                                                    },
                                                                                )
                                                                            })
                                                                            children.pop(
                                                                                (nextChild) => {
                                                                                    $x.reportUnexpectedToken({
                                                                                        path: "Gexpression_template$_spans$",
                                                                                        token: nextChild,
                                                                                        expected: null,
                                                                                    })
                                                                                },
                                                                                () => {},
                                                                            )
                                                                        })(
                                                                            currentChild,
                                                                            ($) => {
                                                                                elements.push($)
                                                                            }
                                                                        )
                                                                    } else {
                                                                        $x.reportUnexpectedToken({
                                                                            path: "Gexpression_template$_spans",
                                                                            token: currentChild,
                                                                            expected: "TemplateSpan",
                                                                        })
                                                                    }
                                                                },
                                                                () => { // no child
                                                                    $x.reportMissingToken({
                                                                        parentDetails: node.details,
                                                                        path: "Gexpression_template$_spans",
                                                                        kindNameOptions: "TemplateSpan",
                                                                    })
                                                                },
                                                            )
                                                        }
                                                        $d.doUntil(
                                                            children,
                                                            (nextChild) => {
                                                                switch (nextChild.kindName) {
                                                                    case 'TemplateSpan':
                                                                        processElement()
                                                                        return true
                                                                    default: return false
                                                                }
                                                            },
                                                        )
                                                        pl.cc(elements.getArray(), ($) => {
                                                            const _spans = $
                                                            sequenceEnd({
                                                                "head": _head,
                                                                "spans": _spans,
                                                            })
                                                        })
                                                    }
                                                )
                                            } else {
                                                $x.reportUnexpectedToken({
                                                    path: "Gexpression_template$_head",
                                                    token: currentChild,
                                                    expected: "TemplateHead",
                                                })
                                            }
                                        },
                                        () => { // no child
                                            $x.reportMissingToken({
                                                parentDetails: node.details,
                                                path: "Gexpression_template$_head",
                                                kindNameOptions: "TemplateHead",
                                            })
                                        },
                                    )
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gexpression_template$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression(['template', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_template",
                                    token: currentChild,
                                    expected: "TemplateExpression",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_template",
                                kindNameOptions: "TemplateExpression",
                            })
                        },
                    )
                }
                const choose_true = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "TrueKeyword")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGexpression_true$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    callback($.details)
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gexpression_true$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gexpression(['true', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_true",
                                    token: currentChild,
                                    expected: "TrueKeyword",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_true",
                                kindNameOptions: "TrueKeyword",
                            })
                        },
                    )
                }
                switch (nextChild.kindName) {
                    case 'ArrayLiteralExpression': /*Y*/ {
                        choose_arrayLiteral()
                        break
                    }
                    case 'ArrowFunction': /*Y*/ {
                        choose_arrowFunction()
                        break
                    }
                    case 'BinaryExpression': /*Y*/ {
                        choose_binary()
                        break
                    }
                    case 'CallExpression': /*Y*/ {
                        choose_call()
                        break
                    }
                    case 'ConditionalExpression': /*Y*/ {
                        choose_conditional()
                        break
                    }
                    case 'ElementAccessExpression': /*Y*/ {
                        choose_elementAccess()
                        break
                    }
                    case 'FalseKeyword': /*Y*/ {
                        choose_false()
                        break
                    }
                    case 'Identifier': /*Y*/ {
                        choose_identifier()
                        break
                    }
                    case 'NewExpression': /*Y*/ {
                        choose_new()
                        break
                    }
                    case 'NoSubstitutionTemplateLiteral': /*Y*/ {
                        choose_noSubstitutionTemplateLiteral()
                        break
                    }
                    case 'NullKeyword': /*Y*/ {
                        choose_nullKeyword()
                        break
                    }
                    case 'NumericLiteral': /*Y*/ {
                        choose_numericLiteral()
                        break
                    }
                    case 'ObjectLiteralExpression': /*Y*/ {
                        choose_objectLiteral()
                        break
                    }
                    case 'ParenthesizedExpression': /*Y*/ {
                        choose_parenthesizedExpression()
                        break
                    }
                    case 'PostfixUnaryExpression': /*Y*/ {
                        choose_postfixUnary()
                        break
                    }
                    case 'PrefixUnaryExpression': /*Y*/ {
                        choose_prefixUnary()
                        break
                    }
                    case 'PropertyAccessExpression': /*Y*/ {
                        choose_propertyAccess()
                        break
                    }
                    case 'StringLiteral': /*Y*/ {
                        choose_stringLiteral()
                        break
                    }
                    case 'TemplateExpression': /*Y*/ {
                        choose_template()
                        break
                    }
                    case 'TrueKeyword': /*Y*/ {
                        choose_true()
                        break
                    }
                    default: {
                        $x.reportUnexpectedToken({
                            path: "Gexpression",
                            token: nextChild,
                            expected: "ArrayLiteralExpression, ArrowFunction, BinaryExpression, CallExpression, ConditionalExpression, ElementAccessExpression, FalseKeyword, Identifier, NewExpression, NoSubstitutionTemplateLiteral, NullKeyword, NumericLiteral, ObjectLiteralExpression, ParenthesizedExpression, PostfixUnaryExpression, PrefixUnaryExpression, PropertyAccessExpression, StringLiteral, TemplateExpression, TrueKeyword",
                        })
                    }
                }
            },
            () => { // no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "Gexpression",
                    kindNameOptions: "ArrayLiteralExpression, ArrowFunction, BinaryExpression, CallExpression, ConditionalExpression, ElementAccessExpression, FalseKeyword, Identifier, NewExpression, NoSubstitutionTemplateLiteral, NullKeyword, NumericLiteral, ObjectLiteralExpression, ParenthesizedExpression, PostfixUnaryExpression, PrefixUnaryExpression, PropertyAccessExpression, StringLiteral, TemplateExpression, TrueKeyword",
                })
            },
        )
    }
    function GfunctionDefinition(
        node: uast.T.UntypedNode,
        children: ps.Stack<uast.T.UntypedNode>,
        callback: ($: mapi.TGfunctionDefinition) => void,
    ): void {
        const sequenceEnd = ($: mapi.TVTGfunctionDefinition) => {
            callback($)
        }
        const elements = ps.createArrayBuilderFIXME<mapi.TVTGfunctionDefinition_typeParameters>()
        const processElement = () => {
            GtypeParameter(node, children, ($) => {
                elements.push($)
            })
        }
        $d.doUntil(
            children,
            (nextChild) => {
                switch (nextChild.kindName) {
                    case 'TypeParameter':
                        processElement()
                        return true
                    default: return false
                }
            },
        )
        pl.cc(elements.getArray(), ($) => {
            const _typeParameters = $
            const elements = ps.createArrayBuilderFIXME<mapi.TVTGfunctionDefinition_parameters>()
            const processElement = () => {
                Gparameter(node, children, ($) => {
                    elements.push($)
                })
            }
            $d.doUntil(
                children,
                (nextChild) => {
                    switch (nextChild.kindName) {
                        case 'Parameter':
                            processElement()
                            return true
                        default: return false
                    }
                },
            )
            pl.cc(elements.getArray(), ($) => {
                const _parameters = $
                let optional: null | mapi.TVTGfunctionDefinition_returnType = null
                const setOptional = () => {
                    Gtype(node, children, ($) => {
                        optional = $
                    })
                }
                $d.lookAhead(children, 
                    (nextChild) => {
                        switch (nextChild.kindName) {
                            case 'AnyKeyword':
                                setOptional()
                                break
                            case 'ArrayType':
                                setOptional()
                                break
                            case 'BooleanKeyword':
                                setOptional()
                                break
                            case 'FunctionType':
                                setOptional()
                                break
                            case 'LiteralType':
                                setOptional()
                                break
                            case 'NeverKeyword':
                                setOptional()
                                break
                            case 'NumberKeyword':
                                setOptional()
                                break
                            case 'OptionalType':
                                setOptional()
                                break
                            case 'ParenthesizedType':
                                setOptional()
                                break
                            case 'StringKeyword':
                                setOptional()
                                break
                            case 'TupleType':
                                setOptional()
                                break
                            case 'TypeLiteral':
                                setOptional()
                                break
                            case 'TypeReference':
                                setOptional()
                                break
                            case 'UndefinedKeyword':
                                setOptional()
                                break
                            case 'UnionType':
                                setOptional()
                                break
                            case 'VoidKeyword':
                                setOptional()
                                break
                        }
                    },
                    () => {},
                )
                pl.cc(optional, ($) => {
                    const _returnType = $
                    sequenceEnd({
                        "typeParameters": _typeParameters,
                        "parameters": _parameters,
                        "returnType": _returnType,
                    })
                })
            })
        })
    }
    function Gidentifier(
        node: uast.T.UntypedNode,
        children: ps.Stack<uast.T.UntypedNode>,
        callback: ($: mapi.TGidentifier) => void,
    ): void {
        children.pop(
            (currentChild) => {
                if ($d.stringsAreEqual(currentChild.kindName, "Identifier")) {
                    ((
                        $: uast.T.UntypedNode,
                        callback: ($: mapi.TNGidentifier$) => void,
                    ): void => {
                        const node = $
                        const children = ps.createStack($.children)
                        callback({
                            tokenDetails: $.details,
                            value: $.value
                        })
                        children.pop(
                            (nextChild) => {
                                $x.reportUnexpectedToken({
                                    path: "Gidentifier$",
                                    token: nextChild,
                                    expected: null,
                                })
                            },
                            () => {},
                        )
                    })(
                        currentChild,
                        ($) => {
                            callback($)
                        }
                    )
                } else {
                    $x.reportUnexpectedToken({
                        path: "Gidentifier",
                        token: currentChild,
                        expected: "Identifier",
                    })
                }
            },
            () => { // no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "Gidentifier",
                    kindNameOptions: "Identifier",
                })
            },
        )
    }
    function GidentifierOrStringLiteral(
        node: uast.T.UntypedNode,
        children: ps.Stack<uast.T.UntypedNode>,
        callback: ($: mapi.TGidentifierOrStringLiteral) => void,
    ): void {
        const choiceEnd_GidentifierOrStringLiteral = ($: mapi.TVTGidentifierOrStringLiteral) => {
            callback($)
        }
        $d.lookAhead(children, 
            (nextChild) => {
                const choose_identifier = () => {
                    Gidentifier(node, children, ($) => {
                        choiceEnd_GidentifierOrStringLiteral(['identifier', $])
                    })
                }
                const choose_stringLiteral = () => {
                    GstringLiteral(node, children, ($) => {
                        choiceEnd_GidentifierOrStringLiteral(['stringLiteral', $])
                    })
                }
                switch (nextChild.kindName) {
                    case 'Identifier': /*Y*/ {
                        choose_identifier()
                        break
                    }
                    case 'StringLiteral': /*Y*/ {
                        choose_stringLiteral()
                        break
                    }
                    default: {
                        $x.reportUnexpectedToken({
                            path: "GidentifierOrStringLiteral",
                            token: nextChild,
                            expected: "Identifier, StringLiteral",
                        })
                    }
                }
            },
            () => { // no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "GidentifierOrStringLiteral",
                    kindNameOptions: "Identifier, StringLiteral",
                })
            },
        )
    }
    function Gmodifier(
        node: uast.T.UntypedNode,
        children: ps.Stack<uast.T.UntypedNode>,
        callback: ($: mapi.TGmodifier) => void,
    ): void {
        const choiceEnd_Gmodifier = ($: mapi.TVTGmodifier) => {
            callback($)
        }
        $d.lookAhead(children, 
            (nextChild) => {
                const choose_declare = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "DeclareKeyword")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGmodifier_declare$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    callback($.details)
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gmodifier_declare$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gmodifier(['declare', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gmodifier_declare",
                                    token: currentChild,
                                    expected: "DeclareKeyword",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gmodifier_declare",
                                kindNameOptions: "DeclareKeyword",
                            })
                        },
                    )
                }
                const choose_export = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "ExportKeyword")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGmodifier_export$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    callback($.details)
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gmodifier_export$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gmodifier(['export', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gmodifier_export",
                                    token: currentChild,
                                    expected: "ExportKeyword",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gmodifier_export",
                                kindNameOptions: "ExportKeyword",
                            })
                        },
                    )
                }
                const choose_readonly = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "ReadonlyKeyword")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGmodifier_readonly$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    callback($.details)
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gmodifier_readonly$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gmodifier(['readonly', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gmodifier_readonly",
                                    token: currentChild,
                                    expected: "ReadonlyKeyword",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gmodifier_readonly",
                                kindNameOptions: "ReadonlyKeyword",
                            })
                        },
                    )
                }
                switch (nextChild.kindName) {
                    case 'DeclareKeyword': /*Y*/ {
                        choose_declare()
                        break
                    }
                    case 'ExportKeyword': /*Y*/ {
                        choose_export()
                        break
                    }
                    case 'ReadonlyKeyword': /*Y*/ {
                        choose_readonly()
                        break
                    }
                    default: {
                        $x.reportUnexpectedToken({
                            path: "Gmodifier",
                            token: nextChild,
                            expected: "DeclareKeyword, ExportKeyword, ReadonlyKeyword",
                        })
                    }
                }
            },
            () => { // no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "Gmodifier",
                    kindNameOptions: "DeclareKeyword, ExportKeyword, ReadonlyKeyword",
                })
            },
        )
    }
    function GnumericLiteral(
        node: uast.T.UntypedNode,
        children: ps.Stack<uast.T.UntypedNode>,
        callback: ($: mapi.TGnumericLiteral) => void,
    ): void {
        children.pop(
            (currentChild) => {
                if ($d.stringsAreEqual(currentChild.kindName, "NumericLiteral")) {
                    ((
                        $: uast.T.UntypedNode,
                        callback: ($: mapi.TNGnumericLiteral$) => void,
                    ): void => {
                        const node = $
                        const children = ps.createStack($.children)
                        callback({
                            tokenDetails: $.details,
                            value: $.value
                        })
                        children.pop(
                            (nextChild) => {
                                $x.reportUnexpectedToken({
                                    path: "GnumericLiteral$",
                                    token: nextChild,
                                    expected: null,
                                })
                            },
                            () => {},
                        )
                    })(
                        currentChild,
                        ($) => {
                            callback($)
                        }
                    )
                } else {
                    $x.reportUnexpectedToken({
                        path: "GnumericLiteral",
                        token: currentChild,
                        expected: "NumericLiteral",
                    })
                }
            },
            () => { // no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "GnumericLiteral",
                    kindNameOptions: "NumericLiteral",
                })
            },
        )
    }
    function Gparameter(
        node: uast.T.UntypedNode,
        children: ps.Stack<uast.T.UntypedNode>,
        callback: ($: mapi.TGparameter) => void,
    ): void {
        children.pop(
            (currentChild) => {
                if ($d.stringsAreEqual(currentChild.kindName, "Parameter")) {
                    ((
                        $: uast.T.UntypedNode,
                        callback: ($: mapi.TNGparameter$) => void,
                    ): void => {
                        const node = $
                        const children = ps.createStack($.children)
                        const sequenceEnd = ($: mapi.TVTGparameter$) => {
                            callback({
                                tokenDetails: node.details,
                                content: $,
                            })
                        }
                        Gidentifier(node, children, ($) => {
                            const _name = $
                            let optional: null | mapi.TVTGparameter$_questionToken = null
                            const setOptional = () => {
                                children.pop(
                                    (currentChild) => {
                                        if ($d.stringsAreEqual(currentChild.kindName, "QuestionToken")) {
                                            ((
                                                $: uast.T.UntypedNode,
                                                callback: ($: mapi.TNGparameter$_questionToken$) => void,
                                            ): void => {
                                                const node = $
                                                const children = ps.createStack($.children)
                                                callback($.details)
                                                children.pop(
                                                    (nextChild) => {
                                                        $x.reportUnexpectedToken({
                                                            path: "Gparameter$_questionToken$",
                                                            token: nextChild,
                                                            expected: null,
                                                        })
                                                    },
                                                    () => {},
                                                )
                                            })(
                                                currentChild,
                                                ($) => {
                                                    optional = $
                                                }
                                            )
                                        } else {
                                            $x.reportUnexpectedToken({
                                                path: "Gparameter$_questionToken",
                                                token: currentChild,
                                                expected: "QuestionToken",
                                            })
                                        }
                                    },
                                    () => { // no child
                                        $x.reportMissingToken({
                                            parentDetails: node.details,
                                            path: "Gparameter$_questionToken",
                                            kindNameOptions: "QuestionToken",
                                        })
                                    },
                                )
                            }
                            $d.lookAhead(children, 
                                (nextChild) => {
                                    switch (nextChild.kindName) {
                                        case 'QuestionToken':
                                            setOptional()
                                            break
                                    }
                                },
                                () => {},
                            )
                            pl.cc(optional, ($) => {
                                const _questionToken = $
                                let optional: null | mapi.TVTGparameter$_type = null
                                const setOptional = () => {
                                    Gtype(node, children, ($) => {
                                        optional = $
                                    })
                                }
                                $d.lookAhead(children, 
                                    (nextChild) => {
                                        switch (nextChild.kindName) {
                                            case 'AnyKeyword':
                                                setOptional()
                                                break
                                            case 'ArrayType':
                                                setOptional()
                                                break
                                            case 'BooleanKeyword':
                                                setOptional()
                                                break
                                            case 'FunctionType':
                                                setOptional()
                                                break
                                            case 'LiteralType':
                                                setOptional()
                                                break
                                            case 'NeverKeyword':
                                                setOptional()
                                                break
                                            case 'NumberKeyword':
                                                setOptional()
                                                break
                                            case 'OptionalType':
                                                setOptional()
                                                break
                                            case 'ParenthesizedType':
                                                setOptional()
                                                break
                                            case 'StringKeyword':
                                                setOptional()
                                                break
                                            case 'TupleType':
                                                setOptional()
                                                break
                                            case 'TypeLiteral':
                                                setOptional()
                                                break
                                            case 'TypeReference':
                                                setOptional()
                                                break
                                            case 'UndefinedKeyword':
                                                setOptional()
                                                break
                                            case 'UnionType':
                                                setOptional()
                                                break
                                            case 'VoidKeyword':
                                                setOptional()
                                                break
                                        }
                                    },
                                    () => {},
                                )
                                pl.cc(optional, ($) => {
                                    const _type = $
                                    sequenceEnd({
                                        "name": _name,
                                        "questionToken": _questionToken,
                                        "type": _type,
                                    })
                                })
                            })
                        })
                        children.pop(
                            (nextChild) => {
                                $x.reportUnexpectedToken({
                                    path: "Gparameter$",
                                    token: nextChild,
                                    expected: null,
                                })
                            },
                            () => {},
                        )
                    })(
                        currentChild,
                        ($) => {
                            callback($)
                        }
                    )
                } else {
                    $x.reportUnexpectedToken({
                        path: "Gparameter",
                        token: currentChild,
                        expected: "Parameter",
                    })
                }
            },
            () => { // no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "Gparameter",
                    kindNameOptions: "Parameter",
                })
            },
        )
    }
    function Gstatement(
        node: uast.T.UntypedNode,
        children: ps.Stack<uast.T.UntypedNode>,
        callback: ($: mapi.TGstatement) => void,
    ): void {
        const choiceEnd_Gstatement = ($: mapi.TVTGstatement) => {
            callback($)
        }
        $d.lookAhead(children, 
            (nextChild) => {
                const choose_block = () => {
                    Gblock(node, children, ($) => {
                        choiceEnd_Gstatement(['block', $])
                    })
                }
                const choose_break = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "BreakStatement")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGstatement_break$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    let optional: null | mapi.TVTGstatement_break$ = null
                                    const setOptional = () => {
                                        Gidentifier(node, children, ($) => {
                                            optional = $
                                        })
                                    }
                                    $d.lookAhead(children, 
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case 'Identifier':
                                                    setOptional()
                                                    break
                                            }
                                        },
                                        () => {},
                                    )
                                    pl.cc(optional, ($) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gstatement_break$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gstatement(['break', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_break",
                                    token: currentChild,
                                    expected: "BreakStatement",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_break",
                                kindNameOptions: "BreakStatement",
                            })
                        },
                    )
                }
                const choose_export = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "ExportDeclaration")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGstatement_export$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    GstringLiteral(node, children, ($) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gstatement_export$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gstatement(['export', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_export",
                                    token: currentChild,
                                    expected: "ExportDeclaration",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_export",
                                kindNameOptions: "ExportDeclaration",
                            })
                        },
                    )
                }
                const choose_expression = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "ExpressionStatement")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGstatement_expression$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    Gexpression(node, children, ($) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gstatement_expression$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gstatement(['expression', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_expression",
                                    token: currentChild,
                                    expected: "ExpressionStatement",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_expression",
                                kindNameOptions: "ExpressionStatement",
                            })
                        },
                    )
                }
                const choose_for = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "ForStatement")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGstatement_for$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const sequenceEnd = ($: mapi.TVTGstatement_for$) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    }
                                    GvariableDeclarationList(node, children, ($) => {
                                        const _initializer = $
                                        Gexpression(node, children, ($) => {
                                            const _condition = $
                                            Gexpression(node, children, ($) => {
                                                const _incrementer = $
                                                Gblock(node, children, ($) => {
                                                    const _block = $
                                                    sequenceEnd({
                                                        "initializer": _initializer,
                                                        "condition": _condition,
                                                        "incrementer": _incrementer,
                                                        "block": _block,
                                                    })
                                                })
                                            })
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gstatement_for$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gstatement(['for', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_for",
                                    token: currentChild,
                                    expected: "ForStatement",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_for",
                                kindNameOptions: "ForStatement",
                            })
                        },
                    )
                }
                const choose_function = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "FunctionDeclaration")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGstatement_function$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const sequenceEnd = ($: mapi.TVTGstatement_function$) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    }
                                    const elements = ps.createArrayBuilderFIXME<mapi.TVTGstatement_function$_modifiers>()
                                    const processElement = () => {
                                        Gmodifier(node, children, ($) => {
                                            elements.push($)
                                        })
                                    }
                                    $d.doUntil(
                                        children,
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case 'DeclareKeyword':
                                                    processElement()
                                                    return true
                                                case 'ExportKeyword':
                                                    processElement()
                                                    return true
                                                case 'ReadonlyKeyword':
                                                    processElement()
                                                    return true
                                                default: return false
                                            }
                                        },
                                    )
                                    pl.cc(elements.getArray(), ($) => {
                                        const _modifiers = $
                                        Gidentifier(node, children, ($) => {
                                            const _name = $
                                            GfunctionDefinition(node, children, ($) => {
                                                const _definition = $
                                                let optional: null | mapi.TVTGstatement_function$_block = null
                                                const setOptional = () => {
                                                    Gblock(node, children, ($) => {
                                                        optional = $
                                                    })
                                                }
                                                $d.lookAhead(children, 
                                                    (nextChild) => {
                                                        switch (nextChild.kindName) {
                                                            case 'Block':
                                                                setOptional()
                                                                break
                                                        }
                                                    },
                                                    () => {},
                                                )
                                                pl.cc(optional, ($) => {
                                                    const _block = $
                                                    sequenceEnd({
                                                        "modifiers": _modifiers,
                                                        "name": _name,
                                                        "definition": _definition,
                                                        "block": _block,
                                                    })
                                                })
                                            })
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gstatement_function$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gstatement(['function', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_function",
                                    token: currentChild,
                                    expected: "FunctionDeclaration",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_function",
                                kindNameOptions: "FunctionDeclaration",
                            })
                        },
                    )
                }
                const choose_if = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "IfStatement")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGstatement_if$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const sequenceEnd = ($: mapi.TVTGstatement_if$) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    }
                                    Gexpression(node, children, ($) => {
                                        const _expression = $
                                        Gstatement(node, children, ($) => {
                                            const _thenStatement = $
                                            let optional: null | mapi.TVTGstatement_if$_elseStatement = null
                                            const setOptional = () => {
                                                Gstatement(node, children, ($) => {
                                                    optional = $
                                                })
                                            }
                                            $d.lookAhead(children, 
                                                (nextChild) => {
                                                    switch (nextChild.kindName) {
                                                        case 'Block':
                                                            setOptional()
                                                            break
                                                        case 'BreakStatement':
                                                            setOptional()
                                                            break
                                                        case 'ExportDeclaration':
                                                            setOptional()
                                                            break
                                                        case 'ExpressionStatement':
                                                            setOptional()
                                                            break
                                                        case 'ForStatement':
                                                            setOptional()
                                                            break
                                                        case 'FunctionDeclaration':
                                                            setOptional()
                                                            break
                                                        case 'IfStatement':
                                                            setOptional()
                                                            break
                                                        case 'ImportDeclaration':
                                                            setOptional()
                                                            break
                                                        case 'InterfaceDeclaration':
                                                            setOptional()
                                                            break
                                                        case 'LabeledStatement':
                                                            setOptional()
                                                            break
                                                        case 'ReturnStatement':
                                                            setOptional()
                                                            break
                                                        case 'SwitchStatement':
                                                            setOptional()
                                                            break
                                                        case 'ThrowStatement':
                                                            setOptional()
                                                            break
                                                        case 'TryStatement':
                                                            setOptional()
                                                            break
                                                        case 'TypeAliasDeclaration':
                                                            setOptional()
                                                            break
                                                        case 'VariableStatement':
                                                            setOptional()
                                                            break
                                                        case 'WhileStatement':
                                                            setOptional()
                                                            break
                                                    }
                                                },
                                                () => {},
                                            )
                                            pl.cc(optional, ($) => {
                                                const _elseStatement = $
                                                sequenceEnd({
                                                    "expression": _expression,
                                                    "thenStatement": _thenStatement,
                                                    "elseStatement": _elseStatement,
                                                })
                                            })
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gstatement_if$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gstatement(['if', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_if",
                                    token: currentChild,
                                    expected: "IfStatement",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_if",
                                kindNameOptions: "IfStatement",
                            })
                        },
                    )
                }
                const choose_import = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "ImportDeclaration")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGstatement_import$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const sequenceEnd = ($: mapi.TVTGstatement_import$) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    }
                                    children.pop(
                                        (currentChild) => {
                                            if ($d.stringsAreEqual(currentChild.kindName, "ImportClause")) {
                                                ((
                                                    $: uast.T.UntypedNode,
                                                    callback: ($: mapi.TNGstatement_import$_clause$) => void,
                                                ): void => {
                                                    const node = $
                                                    const children = ps.createStack($.children)
                                                    const choiceEnd_Gstatement_import$_clause$ = ($: mapi.TVTGstatement_import$_clause$) => {
                                                        callback({
                                                            tokenDetails: node.details,
                                                            content: $,
                                                        })
                                                    }
                                                    $d.lookAhead(children, 
                                                        (nextChild) => {
                                                            const choose_named = () => {
                                                                children.pop(
                                                                    (currentChild) => {
                                                                        if ($d.stringsAreEqual(currentChild.kindName, "NamedImports")) {
                                                                            ((
                                                                                $: uast.T.UntypedNode,
                                                                                callback: ($: mapi.TNGstatement_import$_clause$_named$) => void,
                                                                            ): void => {
                                                                                const node = $
                                                                                const children = ps.createStack($.children)
                                                                                const elements = ps.createArrayBuilderFIXME<mapi.TVTGstatement_import$_clause$_named$>()
                                                                                const processElement = () => {
                                                                                    children.pop(
                                                                                        (currentChild) => {
                                                                                            if ($d.stringsAreEqual(currentChild.kindName, "ImportSpecifier")) {
                                                                                                ((
                                                                                                    $: uast.T.UntypedNode,
                                                                                                    callback: ($: mapi.TNGstatement_import$_clause$_named$$) => void,
                                                                                                ): void => {
                                                                                                    const node = $
                                                                                                    const children = ps.createStack($.children)
                                                                                                    const sequenceEnd = ($: mapi.TVTGstatement_import$_clause$_named$$) => {
                                                                                                        callback({
                                                                                                            tokenDetails: node.details,
                                                                                                            content: $,
                                                                                                        })
                                                                                                    }
                                                                                                    Gidentifier(node, children, ($) => {
                                                                                                        const _name = $
                                                                                                        let optional: null | mapi.TVTGstatement_import$_clause$_named$$_as = null
                                                                                                        const setOptional = () => {
                                                                                                            Gidentifier(node, children, ($) => {
                                                                                                                optional = $
                                                                                                            })
                                                                                                        }
                                                                                                        $d.lookAhead(children, 
                                                                                                            (nextChild) => {
                                                                                                                switch (nextChild.kindName) {
                                                                                                                    case 'Identifier':
                                                                                                                        setOptional()
                                                                                                                        break
                                                                                                                }
                                                                                                            },
                                                                                                            () => {},
                                                                                                        )
                                                                                                        pl.cc(optional, ($) => {
                                                                                                            const _as = $
                                                                                                            sequenceEnd({
                                                                                                                "name": _name,
                                                                                                                "as": _as,
                                                                                                            })
                                                                                                        })
                                                                                                    })
                                                                                                    children.pop(
                                                                                                        (nextChild) => {
                                                                                                            $x.reportUnexpectedToken({
                                                                                                                path: "Gstatement_import$_clause$_named$$",
                                                                                                                token: nextChild,
                                                                                                                expected: null,
                                                                                                            })
                                                                                                        },
                                                                                                        () => {},
                                                                                                    )
                                                                                                })(
                                                                                                    currentChild,
                                                                                                    ($) => {
                                                                                                        elements.push($)
                                                                                                    }
                                                                                                )
                                                                                            } else {
                                                                                                $x.reportUnexpectedToken({
                                                                                                    path: "Gstatement_import$_clause$_named$",
                                                                                                    token: currentChild,
                                                                                                    expected: "ImportSpecifier",
                                                                                                })
                                                                                            }
                                                                                        },
                                                                                        () => { // no child
                                                                                            $x.reportMissingToken({
                                                                                                parentDetails: node.details,
                                                                                                path: "Gstatement_import$_clause$_named$",
                                                                                                kindNameOptions: "ImportSpecifier",
                                                                                            })
                                                                                        },
                                                                                    )
                                                                                }
                                                                                $d.doUntil(
                                                                                    children,
                                                                                    (nextChild) => {
                                                                                        switch (nextChild.kindName) {
                                                                                            case 'ImportSpecifier':
                                                                                                processElement()
                                                                                                return true
                                                                                            default: return false
                                                                                        }
                                                                                    },
                                                                                )
                                                                                pl.cc(elements.getArray(), ($) => {
                                                                                    callback({
                                                                                        tokenDetails: node.details,
                                                                                        content: $,
                                                                                    })
                                                                                })
                                                                                children.pop(
                                                                                    (nextChild) => {
                                                                                        $x.reportUnexpectedToken({
                                                                                            path: "Gstatement_import$_clause$_named$",
                                                                                            token: nextChild,
                                                                                            expected: null,
                                                                                        })
                                                                                    },
                                                                                    () => {},
                                                                                )
                                                                            })(
                                                                                currentChild,
                                                                                ($) => {
                                                                                    choiceEnd_Gstatement_import$_clause$(['named', $])
                                                                                }
                                                                            )
                                                                        } else {
                                                                            $x.reportUnexpectedToken({
                                                                                path: "Gstatement_import$_clause$_named",
                                                                                token: currentChild,
                                                                                expected: "NamedImports",
                                                                            })
                                                                        }
                                                                    },
                                                                    () => { // no child
                                                                        $x.reportMissingToken({
                                                                            parentDetails: node.details,
                                                                            path: "Gstatement_import$_clause$_named",
                                                                            kindNameOptions: "NamedImports",
                                                                        })
                                                                    },
                                                                )
                                                            }
                                                            const choose_namespace = () => {
                                                                children.pop(
                                                                    (currentChild) => {
                                                                        if ($d.stringsAreEqual(currentChild.kindName, "NamespaceImport")) {
                                                                            ((
                                                                                $: uast.T.UntypedNode,
                                                                                callback: ($: mapi.TNGstatement_import$_clause$_namespace$) => void,
                                                                            ): void => {
                                                                                const node = $
                                                                                const children = ps.createStack($.children)
                                                                                Gidentifier(node, children, ($) => {
                                                                                    callback({
                                                                                        tokenDetails: node.details,
                                                                                        content: $,
                                                                                    })
                                                                                })
                                                                                children.pop(
                                                                                    (nextChild) => {
                                                                                        $x.reportUnexpectedToken({
                                                                                            path: "Gstatement_import$_clause$_namespace$",
                                                                                            token: nextChild,
                                                                                            expected: null,
                                                                                        })
                                                                                    },
                                                                                    () => {},
                                                                                )
                                                                            })(
                                                                                currentChild,
                                                                                ($) => {
                                                                                    choiceEnd_Gstatement_import$_clause$(['namespace', $])
                                                                                }
                                                                            )
                                                                        } else {
                                                                            $x.reportUnexpectedToken({
                                                                                path: "Gstatement_import$_clause$_namespace",
                                                                                token: currentChild,
                                                                                expected: "NamespaceImport",
                                                                            })
                                                                        }
                                                                    },
                                                                    () => { // no child
                                                                        $x.reportMissingToken({
                                                                            parentDetails: node.details,
                                                                            path: "Gstatement_import$_clause$_namespace",
                                                                            kindNameOptions: "NamespaceImport",
                                                                        })
                                                                    },
                                                                )
                                                            }
                                                            switch (nextChild.kindName) {
                                                                case 'NamedImports': /*Y*/ {
                                                                    choose_named()
                                                                    break
                                                                }
                                                                case 'NamespaceImport': /*Y*/ {
                                                                    choose_namespace()
                                                                    break
                                                                }
                                                                default: {
                                                                    $x.reportUnexpectedToken({
                                                                        path: "Gstatement_import$_clause$",
                                                                        token: nextChild,
                                                                        expected: "NamedImports, NamespaceImport",
                                                                    })
                                                                }
                                                            }
                                                        },
                                                        () => { // no child
                                                            $x.reportMissingToken({
                                                                parentDetails: node.details,
                                                                path: "Gstatement_import$_clause$",
                                                                kindNameOptions: "NamedImports, NamespaceImport",
                                                            })
                                                        },
                                                    )
                                                    children.pop(
                                                        (nextChild) => {
                                                            $x.reportUnexpectedToken({
                                                                path: "Gstatement_import$_clause$",
                                                                token: nextChild,
                                                                expected: null,
                                                            })
                                                        },
                                                        () => {},
                                                    )
                                                })(
                                                    currentChild,
                                                    ($) => {
                                                        const _clause = $
                                                        GstringLiteral(node, children, ($) => {
                                                            const _file = $
                                                            sequenceEnd({
                                                                "clause": _clause,
                                                                "file": _file,
                                                            })
                                                        })
                                                    }
                                                )
                                            } else {
                                                $x.reportUnexpectedToken({
                                                    path: "Gstatement_import$_clause",
                                                    token: currentChild,
                                                    expected: "ImportClause",
                                                })
                                            }
                                        },
                                        () => { // no child
                                            $x.reportMissingToken({
                                                parentDetails: node.details,
                                                path: "Gstatement_import$_clause",
                                                kindNameOptions: "ImportClause",
                                            })
                                        },
                                    )
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gstatement_import$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gstatement(['import', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_import",
                                    token: currentChild,
                                    expected: "ImportDeclaration",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_import",
                                kindNameOptions: "ImportDeclaration",
                            })
                        },
                    )
                }
                const choose_interface = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "InterfaceDeclaration")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGstatement_interface$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const sequenceEnd = ($: mapi.TVTGstatement_interface$) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    }
                                    const elements = ps.createArrayBuilderFIXME<mapi.TVTGstatement_interface$_modifiers>()
                                    const processElement = () => {
                                        Gmodifier(node, children, ($) => {
                                            elements.push($)
                                        })
                                    }
                                    $d.doUntil(
                                        children,
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case 'DeclareKeyword':
                                                    processElement()
                                                    return true
                                                case 'ExportKeyword':
                                                    processElement()
                                                    return true
                                                case 'ReadonlyKeyword':
                                                    processElement()
                                                    return true
                                                default: return false
                                            }
                                        },
                                    )
                                    pl.cc(elements.getArray(), ($) => {
                                        const _modifiers = $
                                        Gidentifier(node, children, ($) => {
                                            const _name = $
                                            const elements = ps.createArrayBuilderFIXME<mapi.TVTGstatement_interface$_typeParameters>()
                                            const processElement = () => {
                                                GtypeParameter(node, children, ($) => {
                                                    elements.push($)
                                                })
                                            }
                                            $d.doUntil(
                                                children,
                                                (nextChild) => {
                                                    switch (nextChild.kindName) {
                                                        case 'TypeParameter':
                                                            processElement()
                                                            return true
                                                        default: return false
                                                    }
                                                },
                                            )
                                            pl.cc(elements.getArray(), ($) => {
                                                const _typeParameters = $
                                                const elements = ps.createArrayBuilderFIXME<mapi.TVTGstatement_interface$_signature>()
                                                const processElement = () => {
                                                    GtypeSignature(node, children, ($) => {
                                                        elements.push($)
                                                    })
                                                }
                                                $d.doUntil(
                                                    children,
                                                    (nextChild) => {
                                                        switch (nextChild.kindName) {
                                                            case 'ConstructSignature':
                                                                processElement()
                                                                return true
                                                            case 'IndexSignature':
                                                                processElement()
                                                                return true
                                                            case 'MethodSignature':
                                                                processElement()
                                                                return true
                                                            case 'PropertySignature':
                                                                processElement()
                                                                return true
                                                            default: return false
                                                        }
                                                    },
                                                )
                                                pl.cc(elements.getArray(), ($) => {
                                                    const _signature = $
                                                    sequenceEnd({
                                                        "modifiers": _modifiers,
                                                        "name": _name,
                                                        "typeParameters": _typeParameters,
                                                        "signature": _signature,
                                                    })
                                                })
                                            })
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gstatement_interface$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gstatement(['interface', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_interface",
                                    token: currentChild,
                                    expected: "InterfaceDeclaration",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_interface",
                                kindNameOptions: "InterfaceDeclaration",
                            })
                        },
                    )
                }
                const choose_labeled = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "LabeledStatement")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGstatement_labeled$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const sequenceEnd = ($: mapi.TVTGstatement_labeled$) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    }
                                    Gidentifier(node, children, ($) => {
                                        const _label = $
                                        Gstatement(node, children, ($) => {
                                            const _statement = $
                                            sequenceEnd({
                                                "label": _label,
                                                "statement": _statement,
                                            })
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gstatement_labeled$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gstatement(['labeled', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_labeled",
                                    token: currentChild,
                                    expected: "LabeledStatement",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_labeled",
                                kindNameOptions: "LabeledStatement",
                            })
                        },
                    )
                }
                const choose_return = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "ReturnStatement")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGstatement_return$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    let optional: null | mapi.TVTGstatement_return$ = null
                                    const setOptional = () => {
                                        Gexpression(node, children, ($) => {
                                            optional = $
                                        })
                                    }
                                    $d.lookAhead(children, 
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case 'ArrayLiteralExpression':
                                                    setOptional()
                                                    break
                                                case 'ArrowFunction':
                                                    setOptional()
                                                    break
                                                case 'BinaryExpression':
                                                    setOptional()
                                                    break
                                                case 'CallExpression':
                                                    setOptional()
                                                    break
                                                case 'ConditionalExpression':
                                                    setOptional()
                                                    break
                                                case 'ElementAccessExpression':
                                                    setOptional()
                                                    break
                                                case 'FalseKeyword':
                                                    setOptional()
                                                    break
                                                case 'Identifier':
                                                    setOptional()
                                                    break
                                                case 'NewExpression':
                                                    setOptional()
                                                    break
                                                case 'NoSubstitutionTemplateLiteral':
                                                    setOptional()
                                                    break
                                                case 'NullKeyword':
                                                    setOptional()
                                                    break
                                                case 'NumericLiteral':
                                                    setOptional()
                                                    break
                                                case 'ObjectLiteralExpression':
                                                    setOptional()
                                                    break
                                                case 'ParenthesizedExpression':
                                                    setOptional()
                                                    break
                                                case 'PostfixUnaryExpression':
                                                    setOptional()
                                                    break
                                                case 'PrefixUnaryExpression':
                                                    setOptional()
                                                    break
                                                case 'PropertyAccessExpression':
                                                    setOptional()
                                                    break
                                                case 'StringLiteral':
                                                    setOptional()
                                                    break
                                                case 'TemplateExpression':
                                                    setOptional()
                                                    break
                                                case 'TrueKeyword':
                                                    setOptional()
                                                    break
                                            }
                                        },
                                        () => {},
                                    )
                                    pl.cc(optional, ($) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gstatement_return$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gstatement(['return', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_return",
                                    token: currentChild,
                                    expected: "ReturnStatement",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_return",
                                kindNameOptions: "ReturnStatement",
                            })
                        },
                    )
                }
                const choose_switch = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "SwitchStatement")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGstatement_switch$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const sequenceEnd = ($: mapi.TVTGstatement_switch$) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    }
                                    Gexpression(node, children, ($) => {
                                        const _expression = $
                                        children.pop(
                                            (currentChild) => {
                                                if ($d.stringsAreEqual(currentChild.kindName, "CaseBlock")) {
                                                    ((
                                                        $: uast.T.UntypedNode,
                                                        callback: ($: mapi.TNGstatement_switch$_caseBlock$) => void,
                                                    ): void => {
                                                        const node = $
                                                        const children = ps.createStack($.children)
                                                        const elements = ps.createArrayBuilderFIXME<mapi.TVTGstatement_switch$_caseBlock$>()
                                                        const processElement = () => {
                                                            const choiceEnd_Gstatement_switch$_caseBlock$ = ($: mapi.TVTGstatement_switch$_caseBlock$) => {
                                                                elements.push($)
                                                            }
                                                            $d.lookAhead(children, 
                                                                (nextChild) => {
                                                                    const choose_case = () => {
                                                                        children.pop(
                                                                            (currentChild) => {
                                                                                if ($d.stringsAreEqual(currentChild.kindName, "CaseClause")) {
                                                                                    ((
                                                                                        $: uast.T.UntypedNode,
                                                                                        callback: ($: mapi.TNGstatement_switch$_caseBlock$_case$) => void,
                                                                                    ): void => {
                                                                                        const node = $
                                                                                        const children = ps.createStack($.children)
                                                                                        const sequenceEnd = ($: mapi.TVTGstatement_switch$_caseBlock$_case$) => {
                                                                                            callback({
                                                                                                tokenDetails: node.details,
                                                                                                content: $,
                                                                                            })
                                                                                        }
                                                                                        Gexpression(node, children, ($) => {
                                                                                            const _case = $
                                                                                            const elements = ps.createArrayBuilderFIXME<mapi.TVTGstatement_switch$_caseBlock$_case$_statements>()
                                                                                            const processElement = () => {
                                                                                                Gstatement(node, children, ($) => {
                                                                                                    elements.push($)
                                                                                                })
                                                                                            }
                                                                                            $d.doUntil(
                                                                                                children,
                                                                                                (nextChild) => {
                                                                                                    switch (nextChild.kindName) {
                                                                                                        case 'Block':
                                                                                                            processElement()
                                                                                                            return true
                                                                                                        case 'BreakStatement':
                                                                                                            processElement()
                                                                                                            return true
                                                                                                        case 'ExportDeclaration':
                                                                                                            processElement()
                                                                                                            return true
                                                                                                        case 'ExpressionStatement':
                                                                                                            processElement()
                                                                                                            return true
                                                                                                        case 'ForStatement':
                                                                                                            processElement()
                                                                                                            return true
                                                                                                        case 'FunctionDeclaration':
                                                                                                            processElement()
                                                                                                            return true
                                                                                                        case 'IfStatement':
                                                                                                            processElement()
                                                                                                            return true
                                                                                                        case 'ImportDeclaration':
                                                                                                            processElement()
                                                                                                            return true
                                                                                                        case 'InterfaceDeclaration':
                                                                                                            processElement()
                                                                                                            return true
                                                                                                        case 'LabeledStatement':
                                                                                                            processElement()
                                                                                                            return true
                                                                                                        case 'ReturnStatement':
                                                                                                            processElement()
                                                                                                            return true
                                                                                                        case 'SwitchStatement':
                                                                                                            processElement()
                                                                                                            return true
                                                                                                        case 'ThrowStatement':
                                                                                                            processElement()
                                                                                                            return true
                                                                                                        case 'TryStatement':
                                                                                                            processElement()
                                                                                                            return true
                                                                                                        case 'TypeAliasDeclaration':
                                                                                                            processElement()
                                                                                                            return true
                                                                                                        case 'VariableStatement':
                                                                                                            processElement()
                                                                                                            return true
                                                                                                        case 'WhileStatement':
                                                                                                            processElement()
                                                                                                            return true
                                                                                                        default: return false
                                                                                                    }
                                                                                                },
                                                                                            )
                                                                                            pl.cc(elements.getArray(), ($) => {
                                                                                                const _statements = $
                                                                                                sequenceEnd({
                                                                                                    "case": _case,
                                                                                                    "statements": _statements,
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                        children.pop(
                                                                                            (nextChild) => {
                                                                                                $x.reportUnexpectedToken({
                                                                                                    path: "Gstatement_switch$_caseBlock$_case$",
                                                                                                    token: nextChild,
                                                                                                    expected: null,
                                                                                                })
                                                                                            },
                                                                                            () => {},
                                                                                        )
                                                                                    })(
                                                                                        currentChild,
                                                                                        ($) => {
                                                                                            choiceEnd_Gstatement_switch$_caseBlock$(['case', $])
                                                                                        }
                                                                                    )
                                                                                } else {
                                                                                    $x.reportUnexpectedToken({
                                                                                        path: "Gstatement_switch$_caseBlock$_case",
                                                                                        token: currentChild,
                                                                                        expected: "CaseClause",
                                                                                    })
                                                                                }
                                                                            },
                                                                            () => { // no child
                                                                                $x.reportMissingToken({
                                                                                    parentDetails: node.details,
                                                                                    path: "Gstatement_switch$_caseBlock$_case",
                                                                                    kindNameOptions: "CaseClause",
                                                                                })
                                                                            },
                                                                        )
                                                                    }
                                                                    const choose_default = () => {
                                                                        children.pop(
                                                                            (currentChild) => {
                                                                                if ($d.stringsAreEqual(currentChild.kindName, "DefaultClause")) {
                                                                                    ((
                                                                                        $: uast.T.UntypedNode,
                                                                                        callback: ($: mapi.TNGstatement_switch$_caseBlock$_default$) => void,
                                                                                    ): void => {
                                                                                        const node = $
                                                                                        const children = ps.createStack($.children)
                                                                                        const elements = ps.createArrayBuilderFIXME<mapi.TVTGstatement_switch$_caseBlock$_default$>()
                                                                                        const processElement = () => {
                                                                                            Gstatement(node, children, ($) => {
                                                                                                elements.push($)
                                                                                            })
                                                                                        }
                                                                                        $d.doUntil(
                                                                                            children,
                                                                                            (nextChild) => {
                                                                                                switch (nextChild.kindName) {
                                                                                                    case 'Block':
                                                                                                        processElement()
                                                                                                        return true
                                                                                                    case 'BreakStatement':
                                                                                                        processElement()
                                                                                                        return true
                                                                                                    case 'ExportDeclaration':
                                                                                                        processElement()
                                                                                                        return true
                                                                                                    case 'ExpressionStatement':
                                                                                                        processElement()
                                                                                                        return true
                                                                                                    case 'ForStatement':
                                                                                                        processElement()
                                                                                                        return true
                                                                                                    case 'FunctionDeclaration':
                                                                                                        processElement()
                                                                                                        return true
                                                                                                    case 'IfStatement':
                                                                                                        processElement()
                                                                                                        return true
                                                                                                    case 'ImportDeclaration':
                                                                                                        processElement()
                                                                                                        return true
                                                                                                    case 'InterfaceDeclaration':
                                                                                                        processElement()
                                                                                                        return true
                                                                                                    case 'LabeledStatement':
                                                                                                        processElement()
                                                                                                        return true
                                                                                                    case 'ReturnStatement':
                                                                                                        processElement()
                                                                                                        return true
                                                                                                    case 'SwitchStatement':
                                                                                                        processElement()
                                                                                                        return true
                                                                                                    case 'ThrowStatement':
                                                                                                        processElement()
                                                                                                        return true
                                                                                                    case 'TryStatement':
                                                                                                        processElement()
                                                                                                        return true
                                                                                                    case 'TypeAliasDeclaration':
                                                                                                        processElement()
                                                                                                        return true
                                                                                                    case 'VariableStatement':
                                                                                                        processElement()
                                                                                                        return true
                                                                                                    case 'WhileStatement':
                                                                                                        processElement()
                                                                                                        return true
                                                                                                    default: return false
                                                                                                }
                                                                                            },
                                                                                        )
                                                                                        pl.cc(elements.getArray(), ($) => {
                                                                                            callback({
                                                                                                tokenDetails: node.details,
                                                                                                content: $,
                                                                                            })
                                                                                        })
                                                                                        children.pop(
                                                                                            (nextChild) => {
                                                                                                $x.reportUnexpectedToken({
                                                                                                    path: "Gstatement_switch$_caseBlock$_default$",
                                                                                                    token: nextChild,
                                                                                                    expected: null,
                                                                                                })
                                                                                            },
                                                                                            () => {},
                                                                                        )
                                                                                    })(
                                                                                        currentChild,
                                                                                        ($) => {
                                                                                            choiceEnd_Gstatement_switch$_caseBlock$(['default', $])
                                                                                        }
                                                                                    )
                                                                                } else {
                                                                                    $x.reportUnexpectedToken({
                                                                                        path: "Gstatement_switch$_caseBlock$_default",
                                                                                        token: currentChild,
                                                                                        expected: "DefaultClause",
                                                                                    })
                                                                                }
                                                                            },
                                                                            () => { // no child
                                                                                $x.reportMissingToken({
                                                                                    parentDetails: node.details,
                                                                                    path: "Gstatement_switch$_caseBlock$_default",
                                                                                    kindNameOptions: "DefaultClause",
                                                                                })
                                                                            },
                                                                        )
                                                                    }
                                                                    switch (nextChild.kindName) {
                                                                        case 'CaseClause': /*Y*/ {
                                                                            choose_case()
                                                                            break
                                                                        }
                                                                        case 'DefaultClause': /*Y*/ {
                                                                            choose_default()
                                                                            break
                                                                        }
                                                                        default: {
                                                                            $x.reportUnexpectedToken({
                                                                                path: "Gstatement_switch$_caseBlock$",
                                                                                token: nextChild,
                                                                                expected: "CaseClause, DefaultClause",
                                                                            })
                                                                        }
                                                                    }
                                                                },
                                                                () => { // no child
                                                                    $x.reportMissingToken({
                                                                        parentDetails: node.details,
                                                                        path: "Gstatement_switch$_caseBlock$",
                                                                        kindNameOptions: "CaseClause, DefaultClause",
                                                                    })
                                                                },
                                                            )
                                                        }
                                                        $d.doUntil(
                                                            children,
                                                            (nextChild) => {
                                                                switch (nextChild.kindName) {
                                                                    case 'CaseClause':
                                                                        processElement()
                                                                        return true
                                                                    case 'DefaultClause':
                                                                        processElement()
                                                                        return true
                                                                    default: return false
                                                                }
                                                            },
                                                        )
                                                        pl.cc(elements.getArray(), ($) => {
                                                            callback({
                                                                tokenDetails: node.details,
                                                                content: $,
                                                            })
                                                        })
                                                        children.pop(
                                                            (nextChild) => {
                                                                $x.reportUnexpectedToken({
                                                                    path: "Gstatement_switch$_caseBlock$",
                                                                    token: nextChild,
                                                                    expected: null,
                                                                })
                                                            },
                                                            () => {},
                                                        )
                                                    })(
                                                        currentChild,
                                                        ($) => {
                                                            const _caseBlock = $
                                                            sequenceEnd({
                                                                "expression": _expression,
                                                                "caseBlock": _caseBlock,
                                                            })
                                                        }
                                                    )
                                                } else {
                                                    $x.reportUnexpectedToken({
                                                        path: "Gstatement_switch$_caseBlock",
                                                        token: currentChild,
                                                        expected: "CaseBlock",
                                                    })
                                                }
                                            },
                                            () => { // no child
                                                $x.reportMissingToken({
                                                    parentDetails: node.details,
                                                    path: "Gstatement_switch$_caseBlock",
                                                    kindNameOptions: "CaseBlock",
                                                })
                                            },
                                        )
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gstatement_switch$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gstatement(['switch', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_switch",
                                    token: currentChild,
                                    expected: "SwitchStatement",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_switch",
                                kindNameOptions: "SwitchStatement",
                            })
                        },
                    )
                }
                const choose_throw = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "ThrowStatement")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGstatement_throw$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    Gexpression(node, children, ($) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gstatement_throw$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gstatement(['throw', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_throw",
                                    token: currentChild,
                                    expected: "ThrowStatement",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_throw",
                                kindNameOptions: "ThrowStatement",
                            })
                        },
                    )
                }
                const choose_try = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "TryStatement")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGstatement_try$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const sequenceEnd = ($: mapi.TVTGstatement_try$) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    }
                                    Gblock(node, children, ($) => {
                                        const _block = $
                                        children.pop(
                                            (currentChild) => {
                                                if ($d.stringsAreEqual(currentChild.kindName, "CatchClause")) {
                                                    ((
                                                        $: uast.T.UntypedNode,
                                                        callback: ($: mapi.TNGstatement_try$_catchClause$) => void,
                                                    ): void => {
                                                        const node = $
                                                        const children = ps.createStack($.children)
                                                        const sequenceEnd = ($: mapi.TVTGstatement_try$_catchClause$) => {
                                                            callback({
                                                                tokenDetails: node.details,
                                                                content: $,
                                                            })
                                                        }
                                                        GvariableDeclaration(node, children, ($) => {
                                                            const _variable = $
                                                            Gblock(node, children, ($) => {
                                                                const _block = $
                                                                sequenceEnd({
                                                                    "variable": _variable,
                                                                    "block": _block,
                                                                })
                                                            })
                                                        })
                                                        children.pop(
                                                            (nextChild) => {
                                                                $x.reportUnexpectedToken({
                                                                    path: "Gstatement_try$_catchClause$",
                                                                    token: nextChild,
                                                                    expected: null,
                                                                })
                                                            },
                                                            () => {},
                                                        )
                                                    })(
                                                        currentChild,
                                                        ($) => {
                                                            const _catchClause = $
                                                            sequenceEnd({
                                                                "block": _block,
                                                                "catchClause": _catchClause,
                                                            })
                                                        }
                                                    )
                                                } else {
                                                    $x.reportUnexpectedToken({
                                                        path: "Gstatement_try$_catchClause",
                                                        token: currentChild,
                                                        expected: "CatchClause",
                                                    })
                                                }
                                            },
                                            () => { // no child
                                                $x.reportMissingToken({
                                                    parentDetails: node.details,
                                                    path: "Gstatement_try$_catchClause",
                                                    kindNameOptions: "CatchClause",
                                                })
                                            },
                                        )
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gstatement_try$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gstatement(['try', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_try",
                                    token: currentChild,
                                    expected: "TryStatement",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_try",
                                kindNameOptions: "TryStatement",
                            })
                        },
                    )
                }
                const choose_typeAlias = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "TypeAliasDeclaration")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGstatement_typeAlias$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const sequenceEnd = ($: mapi.TVTGstatement_typeAlias$) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    }
                                    const elements = ps.createArrayBuilderFIXME<mapi.TVTGstatement_typeAlias$_modifiers>()
                                    const processElement = () => {
                                        Gmodifier(node, children, ($) => {
                                            elements.push($)
                                        })
                                    }
                                    $d.doUntil(
                                        children,
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case 'DeclareKeyword':
                                                    processElement()
                                                    return true
                                                case 'ExportKeyword':
                                                    processElement()
                                                    return true
                                                case 'ReadonlyKeyword':
                                                    processElement()
                                                    return true
                                                default: return false
                                            }
                                        },
                                    )
                                    pl.cc(elements.getArray(), ($) => {
                                        const _modifiers = $
                                        Gidentifier(node, children, ($) => {
                                            const _name = $
                                            const elements = ps.createArrayBuilderFIXME<mapi.TVTGstatement_typeAlias$_typeParameters>()
                                            const processElement = () => {
                                                GtypeParameter(node, children, ($) => {
                                                    elements.push($)
                                                })
                                            }
                                            $d.doUntil(
                                                children,
                                                (nextChild) => {
                                                    switch (nextChild.kindName) {
                                                        case 'TypeParameter':
                                                            processElement()
                                                            return true
                                                        default: return false
                                                    }
                                                },
                                            )
                                            pl.cc(elements.getArray(), ($) => {
                                                const _typeParameters = $
                                                Gtype(node, children, ($) => {
                                                    const _type = $
                                                    sequenceEnd({
                                                        "modifiers": _modifiers,
                                                        "name": _name,
                                                        "typeParameters": _typeParameters,
                                                        "type": _type,
                                                    })
                                                })
                                            })
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gstatement_typeAlias$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gstatement(['typeAlias', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_typeAlias",
                                    token: currentChild,
                                    expected: "TypeAliasDeclaration",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_typeAlias",
                                kindNameOptions: "TypeAliasDeclaration",
                            })
                        },
                    )
                }
                const choose_variable = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "VariableStatement")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGstatement_variable$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const sequenceEnd = ($: mapi.TVTGstatement_variable$) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    }
                                    const elements = ps.createArrayBuilderFIXME<mapi.TVTGstatement_variable$_modifiers>()
                                    const processElement = () => {
                                        Gmodifier(node, children, ($) => {
                                            elements.push($)
                                        })
                                    }
                                    $d.doUntil(
                                        children,
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case 'DeclareKeyword':
                                                    processElement()
                                                    return true
                                                case 'ExportKeyword':
                                                    processElement()
                                                    return true
                                                case 'ReadonlyKeyword':
                                                    processElement()
                                                    return true
                                                default: return false
                                            }
                                        },
                                    )
                                    pl.cc(elements.getArray(), ($) => {
                                        const _modifiers = $
                                        GvariableDeclarationList(node, children, ($) => {
                                            const _variableDeclarationList = $
                                            sequenceEnd({
                                                "modifiers": _modifiers,
                                                "variableDeclarationList": _variableDeclarationList,
                                            })
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gstatement_variable$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gstatement(['variable', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_variable",
                                    token: currentChild,
                                    expected: "VariableStatement",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_variable",
                                kindNameOptions: "VariableStatement",
                            })
                        },
                    )
                }
                const choose_while = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "WhileStatement")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGstatement_while$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const sequenceEnd = ($: mapi.TVTGstatement_while$) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    }
                                    Gexpression(node, children, ($) => {
                                        const _condition = $
                                        Gblock(node, children, ($) => {
                                            const _block = $
                                            sequenceEnd({
                                                "condition": _condition,
                                                "block": _block,
                                            })
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gstatement_while$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gstatement(['while', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_while",
                                    token: currentChild,
                                    expected: "WhileStatement",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_while",
                                kindNameOptions: "WhileStatement",
                            })
                        },
                    )
                }
                switch (nextChild.kindName) {
                    case 'Block': /*Y*/ {
                        choose_block()
                        break
                    }
                    case 'BreakStatement': /*Y*/ {
                        choose_break()
                        break
                    }
                    case 'ExportDeclaration': /*Y*/ {
                        choose_export()
                        break
                    }
                    case 'ExpressionStatement': /*Y*/ {
                        choose_expression()
                        break
                    }
                    case 'ForStatement': /*Y*/ {
                        choose_for()
                        break
                    }
                    case 'FunctionDeclaration': /*Y*/ {
                        choose_function()
                        break
                    }
                    case 'IfStatement': /*Y*/ {
                        choose_if()
                        break
                    }
                    case 'ImportDeclaration': /*Y*/ {
                        choose_import()
                        break
                    }
                    case 'InterfaceDeclaration': /*Y*/ {
                        choose_interface()
                        break
                    }
                    case 'LabeledStatement': /*Y*/ {
                        choose_labeled()
                        break
                    }
                    case 'ReturnStatement': /*Y*/ {
                        choose_return()
                        break
                    }
                    case 'SwitchStatement': /*Y*/ {
                        choose_switch()
                        break
                    }
                    case 'ThrowStatement': /*Y*/ {
                        choose_throw()
                        break
                    }
                    case 'TryStatement': /*Y*/ {
                        choose_try()
                        break
                    }
                    case 'TypeAliasDeclaration': /*Y*/ {
                        choose_typeAlias()
                        break
                    }
                    case 'VariableStatement': /*Y*/ {
                        choose_variable()
                        break
                    }
                    case 'WhileStatement': /*Y*/ {
                        choose_while()
                        break
                    }
                    default: {
                        $x.reportUnexpectedToken({
                            path: "Gstatement",
                            token: nextChild,
                            expected: "Block, BreakStatement, ExportDeclaration, ExpressionStatement, ForStatement, FunctionDeclaration, IfStatement, ImportDeclaration, InterfaceDeclaration, LabeledStatement, ReturnStatement, SwitchStatement, ThrowStatement, TryStatement, TypeAliasDeclaration, VariableStatement, WhileStatement",
                        })
                    }
                }
            },
            () => { // no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "Gstatement",
                    kindNameOptions: "Block, BreakStatement, ExportDeclaration, ExpressionStatement, ForStatement, FunctionDeclaration, IfStatement, ImportDeclaration, InterfaceDeclaration, LabeledStatement, ReturnStatement, SwitchStatement, ThrowStatement, TryStatement, TypeAliasDeclaration, VariableStatement, WhileStatement",
                })
            },
        )
    }
    function GstringLiteral(
        node: uast.T.UntypedNode,
        children: ps.Stack<uast.T.UntypedNode>,
        callback: ($: mapi.TGstringLiteral) => void,
    ): void {
        children.pop(
            (currentChild) => {
                if ($d.stringsAreEqual(currentChild.kindName, "StringLiteral")) {
                    ((
                        $: uast.T.UntypedNode,
                        callback: ($: mapi.TNGstringLiteral$) => void,
                    ): void => {
                        const node = $
                        const children = ps.createStack($.children)
                        callback({
                            tokenDetails: $.details,
                            value: $.value
                        })
                        children.pop(
                            (nextChild) => {
                                $x.reportUnexpectedToken({
                                    path: "GstringLiteral$",
                                    token: nextChild,
                                    expected: null,
                                })
                            },
                            () => {},
                        )
                    })(
                        currentChild,
                        ($) => {
                            callback($)
                        }
                    )
                } else {
                    $x.reportUnexpectedToken({
                        path: "GstringLiteral",
                        token: currentChild,
                        expected: "StringLiteral",
                    })
                }
            },
            () => { // no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "GstringLiteral",
                    kindNameOptions: "StringLiteral",
                })
            },
        )
    }
    function Gtype(
        node: uast.T.UntypedNode,
        children: ps.Stack<uast.T.UntypedNode>,
        callback: ($: mapi.TGtype) => void,
    ): void {
        const choiceEnd_Gtype = ($: mapi.TVTGtype) => {
            callback($)
        }
        $d.lookAhead(children, 
            (nextChild) => {
                const choose_any = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "AnyKeyword")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGtype_any$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    callback($.details)
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gtype_any$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gtype(['any', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_any",
                                    token: currentChild,
                                    expected: "AnyKeyword",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_any",
                                kindNameOptions: "AnyKeyword",
                            })
                        },
                    )
                }
                const choose_array = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "ArrayType")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGtype_array$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    Gtype(node, children, ($) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gtype_array$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gtype(['array', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_array",
                                    token: currentChild,
                                    expected: "ArrayType",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_array",
                                kindNameOptions: "ArrayType",
                            })
                        },
                    )
                }
                const choose_boolean = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "BooleanKeyword")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGtype_boolean$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    callback($.details)
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gtype_boolean$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gtype(['boolean', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_boolean",
                                    token: currentChild,
                                    expected: "BooleanKeyword",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_boolean",
                                kindNameOptions: "BooleanKeyword",
                            })
                        },
                    )
                }
                const choose_function = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "FunctionType")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGtype_function$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const sequenceEnd = ($: mapi.TVTGtype_function$) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    }
                                    const elements = ps.createArrayBuilderFIXME<mapi.TVTGtype_function$_parameters>()
                                    const processElement = () => {
                                        Gparameter(node, children, ($) => {
                                            elements.push($)
                                        })
                                    }
                                    $d.doUntil(
                                        children,
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case 'Parameter':
                                                    processElement()
                                                    return true
                                                default: return false
                                            }
                                        },
                                    )
                                    pl.cc(elements.getArray(), ($) => {
                                        const _parameters = $
                                        let optional: null | mapi.TVTGtype_function$_returnType = null
                                        const setOptional = () => {
                                            Gtype(node, children, ($) => {
                                                optional = $
                                            })
                                        }
                                        $d.lookAhead(children, 
                                            (nextChild) => {
                                                switch (nextChild.kindName) {
                                                    case 'AnyKeyword':
                                                        setOptional()
                                                        break
                                                    case 'ArrayType':
                                                        setOptional()
                                                        break
                                                    case 'BooleanKeyword':
                                                        setOptional()
                                                        break
                                                    case 'FunctionType':
                                                        setOptional()
                                                        break
                                                    case 'LiteralType':
                                                        setOptional()
                                                        break
                                                    case 'NeverKeyword':
                                                        setOptional()
                                                        break
                                                    case 'NumberKeyword':
                                                        setOptional()
                                                        break
                                                    case 'OptionalType':
                                                        setOptional()
                                                        break
                                                    case 'ParenthesizedType':
                                                        setOptional()
                                                        break
                                                    case 'StringKeyword':
                                                        setOptional()
                                                        break
                                                    case 'TupleType':
                                                        setOptional()
                                                        break
                                                    case 'TypeLiteral':
                                                        setOptional()
                                                        break
                                                    case 'TypeReference':
                                                        setOptional()
                                                        break
                                                    case 'UndefinedKeyword':
                                                        setOptional()
                                                        break
                                                    case 'UnionType':
                                                        setOptional()
                                                        break
                                                    case 'VoidKeyword':
                                                        setOptional()
                                                        break
                                                }
                                            },
                                            () => {},
                                        )
                                        pl.cc(optional, ($) => {
                                            const _returnType = $
                                            sequenceEnd({
                                                "parameters": _parameters,
                                                "returnType": _returnType,
                                            })
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gtype_function$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gtype(['function', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_function",
                                    token: currentChild,
                                    expected: "FunctionType",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_function",
                                kindNameOptions: "FunctionType",
                            })
                        },
                    )
                }
                const choose_literal = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "LiteralType")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGtype_literal$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const choiceEnd_Gtype_literal$ = ($: mapi.TVTGtype_literal$) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    }
                                    $d.lookAhead(children, 
                                        (nextChild) => {
                                            const choose_null = () => {
                                                children.pop(
                                                    (currentChild) => {
                                                        if ($d.stringsAreEqual(currentChild.kindName, "NullKeyword")) {
                                                            ((
                                                                $: uast.T.UntypedNode,
                                                                callback: ($: mapi.TNGtype_literal$_null$) => void,
                                                            ): void => {
                                                                const node = $
                                                                const children = ps.createStack($.children)
                                                                callback($.details)
                                                                children.pop(
                                                                    (nextChild) => {
                                                                        $x.reportUnexpectedToken({
                                                                            path: "Gtype_literal$_null$",
                                                                            token: nextChild,
                                                                            expected: null,
                                                                        })
                                                                    },
                                                                    () => {},
                                                                )
                                                            })(
                                                                currentChild,
                                                                ($) => {
                                                                    choiceEnd_Gtype_literal$(['null', $])
                                                                }
                                                            )
                                                        } else {
                                                            $x.reportUnexpectedToken({
                                                                path: "Gtype_literal$_null",
                                                                token: currentChild,
                                                                expected: "NullKeyword",
                                                            })
                                                        }
                                                    },
                                                    () => { // no child
                                                        $x.reportMissingToken({
                                                            parentDetails: node.details,
                                                            path: "Gtype_literal$_null",
                                                            kindNameOptions: "NullKeyword",
                                                        })
                                                    },
                                                )
                                            }
                                            const choose_string = () => {
                                                GstringLiteral(node, children, ($) => {
                                                    choiceEnd_Gtype_literal$(['string', $])
                                                })
                                            }
                                            switch (nextChild.kindName) {
                                                case 'NullKeyword': /*Y*/ {
                                                    choose_null()
                                                    break
                                                }
                                                case 'StringLiteral': /*Y*/ {
                                                    choose_string()
                                                    break
                                                }
                                                default: {
                                                    $x.reportUnexpectedToken({
                                                        path: "Gtype_literal$",
                                                        token: nextChild,
                                                        expected: "NullKeyword, StringLiteral",
                                                    })
                                                }
                                            }
                                        },
                                        () => { // no child
                                            $x.reportMissingToken({
                                                parentDetails: node.details,
                                                path: "Gtype_literal$",
                                                kindNameOptions: "NullKeyword, StringLiteral",
                                            })
                                        },
                                    )
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gtype_literal$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gtype(['literal', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_literal",
                                    token: currentChild,
                                    expected: "LiteralType",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_literal",
                                kindNameOptions: "LiteralType",
                            })
                        },
                    )
                }
                const choose_never = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "NeverKeyword")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGtype_never$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    callback($.details)
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gtype_never$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gtype(['never', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_never",
                                    token: currentChild,
                                    expected: "NeverKeyword",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_never",
                                kindNameOptions: "NeverKeyword",
                            })
                        },
                    )
                }
                const choose_number = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "NumberKeyword")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGtype_number$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    callback($.details)
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gtype_number$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gtype(['number', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_number",
                                    token: currentChild,
                                    expected: "NumberKeyword",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_number",
                                kindNameOptions: "NumberKeyword",
                            })
                        },
                    )
                }
                const choose_optional = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "OptionalType")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGtype_optional$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    Gtype(node, children, ($) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gtype_optional$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gtype(['optional', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_optional",
                                    token: currentChild,
                                    expected: "OptionalType",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_optional",
                                kindNameOptions: "OptionalType",
                            })
                        },
                    )
                }
                const choose_parenthesized = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "ParenthesizedType")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGtype_parenthesized$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    Gtype(node, children, ($) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gtype_parenthesized$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gtype(['parenthesized', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_parenthesized",
                                    token: currentChild,
                                    expected: "ParenthesizedType",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_parenthesized",
                                kindNameOptions: "ParenthesizedType",
                            })
                        },
                    )
                }
                const choose_string = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "StringKeyword")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGtype_string$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    callback($.details)
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gtype_string$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gtype(['string', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_string",
                                    token: currentChild,
                                    expected: "StringKeyword",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_string",
                                kindNameOptions: "StringKeyword",
                            })
                        },
                    )
                }
                const choose_tuple = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "TupleType")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGtype_tuple$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const elements = ps.createArrayBuilderFIXME<mapi.TVTGtype_tuple$>()
                                    const processElement = () => {
                                        Gtype(node, children, ($) => {
                                            elements.push($)
                                        })
                                    }
                                    $d.doUntil(
                                        children,
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case 'AnyKeyword':
                                                    processElement()
                                                    return true
                                                case 'ArrayType':
                                                    processElement()
                                                    return true
                                                case 'BooleanKeyword':
                                                    processElement()
                                                    return true
                                                case 'FunctionType':
                                                    processElement()
                                                    return true
                                                case 'LiteralType':
                                                    processElement()
                                                    return true
                                                case 'NeverKeyword':
                                                    processElement()
                                                    return true
                                                case 'NumberKeyword':
                                                    processElement()
                                                    return true
                                                case 'OptionalType':
                                                    processElement()
                                                    return true
                                                case 'ParenthesizedType':
                                                    processElement()
                                                    return true
                                                case 'StringKeyword':
                                                    processElement()
                                                    return true
                                                case 'TupleType':
                                                    processElement()
                                                    return true
                                                case 'TypeLiteral':
                                                    processElement()
                                                    return true
                                                case 'TypeReference':
                                                    processElement()
                                                    return true
                                                case 'UndefinedKeyword':
                                                    processElement()
                                                    return true
                                                case 'UnionType':
                                                    processElement()
                                                    return true
                                                case 'VoidKeyword':
                                                    processElement()
                                                    return true
                                                default: return false
                                            }
                                        },
                                    )
                                    pl.cc(elements.getArray(), ($) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gtype_tuple$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gtype(['tuple', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_tuple",
                                    token: currentChild,
                                    expected: "TupleType",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_tuple",
                                kindNameOptions: "TupleType",
                            })
                        },
                    )
                }
                const choose_typeLiteral = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "TypeLiteral")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGtype_typeLiteral$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const elements = ps.createArrayBuilderFIXME<mapi.TVTGtype_typeLiteral$>()
                                    const processElement = () => {
                                        GtypeSignature(node, children, ($) => {
                                            elements.push($)
                                        })
                                    }
                                    $d.doUntil(
                                        children,
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case 'ConstructSignature':
                                                    processElement()
                                                    return true
                                                case 'IndexSignature':
                                                    processElement()
                                                    return true
                                                case 'MethodSignature':
                                                    processElement()
                                                    return true
                                                case 'PropertySignature':
                                                    processElement()
                                                    return true
                                                default: return false
                                            }
                                        },
                                    )
                                    pl.cc(elements.getArray(), ($) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gtype_typeLiteral$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gtype(['typeLiteral', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_typeLiteral",
                                    token: currentChild,
                                    expected: "TypeLiteral",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_typeLiteral",
                                kindNameOptions: "TypeLiteral",
                            })
                        },
                    )
                }
                const choose_typeReference = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "TypeReference")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGtype_typeReference$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const sequenceEnd = ($: mapi.TVTGtype_typeReference$) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    }
                                    const choiceEnd_Gtype_typeReference$_x = ($: mapi.TVTGtype_typeReference$_x) => {
                                        const _x = $
                                        const elements = ps.createArrayBuilderFIXME<mapi.TVTGtype_typeReference$_parameters>()
                                        const processElement = () => {
                                            Gtype(node, children, ($) => {
                                                elements.push($)
                                            })
                                        }
                                        $d.doUntil(
                                            children,
                                            (nextChild) => {
                                                switch (nextChild.kindName) {
                                                    case 'AnyKeyword':
                                                        processElement()
                                                        return true
                                                    case 'ArrayType':
                                                        processElement()
                                                        return true
                                                    case 'BooleanKeyword':
                                                        processElement()
                                                        return true
                                                    case 'FunctionType':
                                                        processElement()
                                                        return true
                                                    case 'LiteralType':
                                                        processElement()
                                                        return true
                                                    case 'NeverKeyword':
                                                        processElement()
                                                        return true
                                                    case 'NumberKeyword':
                                                        processElement()
                                                        return true
                                                    case 'OptionalType':
                                                        processElement()
                                                        return true
                                                    case 'ParenthesizedType':
                                                        processElement()
                                                        return true
                                                    case 'StringKeyword':
                                                        processElement()
                                                        return true
                                                    case 'TupleType':
                                                        processElement()
                                                        return true
                                                    case 'TypeLiteral':
                                                        processElement()
                                                        return true
                                                    case 'TypeReference':
                                                        processElement()
                                                        return true
                                                    case 'UndefinedKeyword':
                                                        processElement()
                                                        return true
                                                    case 'UnionType':
                                                        processElement()
                                                        return true
                                                    case 'VoidKeyword':
                                                        processElement()
                                                        return true
                                                    default: return false
                                                }
                                            },
                                        )
                                        pl.cc(elements.getArray(), ($) => {
                                            const _parameters = $
                                            sequenceEnd({
                                                "x": _x,
                                                "parameters": _parameters,
                                            })
                                        })
                                    }
                                    $d.lookAhead(children, 
                                        (nextChild) => {
                                            const choose_identifier = () => {
                                                Gidentifier(node, children, ($) => {
                                                    choiceEnd_Gtype_typeReference$_x(['identifier', $])
                                                })
                                            }
                                            const choose_qualifiedName = () => {
                                                children.pop(
                                                    (currentChild) => {
                                                        if ($d.stringsAreEqual(currentChild.kindName, "QualifiedName")) {
                                                            ((
                                                                $: uast.T.UntypedNode,
                                                                callback: ($: mapi.TNGtype_typeReference$_x_qualifiedName$) => void,
                                                            ): void => {
                                                                const node = $
                                                                const children = ps.createStack($.children)
                                                                const sequenceEnd = ($: mapi.TVTGtype_typeReference$_x_qualifiedName$) => {
                                                                    callback({
                                                                        tokenDetails: node.details,
                                                                        content: $,
                                                                    })
                                                                }
                                                                Gidentifier(node, children, ($) => {
                                                                    const _context = $
                                                                    Gidentifier(node, children, ($) => {
                                                                        const _type = $
                                                                        sequenceEnd({
                                                                            "context": _context,
                                                                            "type": _type,
                                                                        })
                                                                    })
                                                                })
                                                                children.pop(
                                                                    (nextChild) => {
                                                                        $x.reportUnexpectedToken({
                                                                            path: "Gtype_typeReference$_x_qualifiedName$",
                                                                            token: nextChild,
                                                                            expected: null,
                                                                        })
                                                                    },
                                                                    () => {},
                                                                )
                                                            })(
                                                                currentChild,
                                                                ($) => {
                                                                    choiceEnd_Gtype_typeReference$_x(['qualifiedName', $])
                                                                }
                                                            )
                                                        } else {
                                                            $x.reportUnexpectedToken({
                                                                path: "Gtype_typeReference$_x_qualifiedName",
                                                                token: currentChild,
                                                                expected: "QualifiedName",
                                                            })
                                                        }
                                                    },
                                                    () => { // no child
                                                        $x.reportMissingToken({
                                                            parentDetails: node.details,
                                                            path: "Gtype_typeReference$_x_qualifiedName",
                                                            kindNameOptions: "QualifiedName",
                                                        })
                                                    },
                                                )
                                            }
                                            switch (nextChild.kindName) {
                                                case 'Identifier': /*Y*/ {
                                                    choose_identifier()
                                                    break
                                                }
                                                case 'QualifiedName': /*Y*/ {
                                                    choose_qualifiedName()
                                                    break
                                                }
                                                default: {
                                                    $x.reportUnexpectedToken({
                                                        path: "Gtype_typeReference$_x",
                                                        token: nextChild,
                                                        expected: "Identifier, QualifiedName",
                                                    })
                                                }
                                            }
                                        },
                                        () => { // no child
                                            $x.reportMissingToken({
                                                parentDetails: node.details,
                                                path: "Gtype_typeReference$_x",
                                                kindNameOptions: "Identifier, QualifiedName",
                                            })
                                        },
                                    )
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gtype_typeReference$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gtype(['typeReference', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_typeReference",
                                    token: currentChild,
                                    expected: "TypeReference",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_typeReference",
                                kindNameOptions: "TypeReference",
                            })
                        },
                    )
                }
                const choose_undefined = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "UndefinedKeyword")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGtype_undefined$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    callback($.details)
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gtype_undefined$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gtype(['undefined', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_undefined",
                                    token: currentChild,
                                    expected: "UndefinedKeyword",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_undefined",
                                kindNameOptions: "UndefinedKeyword",
                            })
                        },
                    )
                }
                const choose_union = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "UnionType")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGtype_union$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const elements = ps.createArrayBuilderFIXME<mapi.TVTGtype_union$>()
                                    const processElement = () => {
                                        Gtype(node, children, ($) => {
                                            elements.push($)
                                        })
                                    }
                                    $d.doUntil(
                                        children,
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case 'AnyKeyword':
                                                    processElement()
                                                    return true
                                                case 'ArrayType':
                                                    processElement()
                                                    return true
                                                case 'BooleanKeyword':
                                                    processElement()
                                                    return true
                                                case 'FunctionType':
                                                    processElement()
                                                    return true
                                                case 'LiteralType':
                                                    processElement()
                                                    return true
                                                case 'NeverKeyword':
                                                    processElement()
                                                    return true
                                                case 'NumberKeyword':
                                                    processElement()
                                                    return true
                                                case 'OptionalType':
                                                    processElement()
                                                    return true
                                                case 'ParenthesizedType':
                                                    processElement()
                                                    return true
                                                case 'StringKeyword':
                                                    processElement()
                                                    return true
                                                case 'TupleType':
                                                    processElement()
                                                    return true
                                                case 'TypeLiteral':
                                                    processElement()
                                                    return true
                                                case 'TypeReference':
                                                    processElement()
                                                    return true
                                                case 'UndefinedKeyword':
                                                    processElement()
                                                    return true
                                                case 'UnionType':
                                                    processElement()
                                                    return true
                                                case 'VoidKeyword':
                                                    processElement()
                                                    return true
                                                default: return false
                                            }
                                        },
                                    )
                                    pl.cc(elements.getArray(), ($) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gtype_union$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gtype(['union', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_union",
                                    token: currentChild,
                                    expected: "UnionType",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_union",
                                kindNameOptions: "UnionType",
                            })
                        },
                    )
                }
                const choose_void = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "VoidKeyword")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGtype_void$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    callback($.details)
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "Gtype_void$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gtype(['void', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_void",
                                    token: currentChild,
                                    expected: "VoidKeyword",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_void",
                                kindNameOptions: "VoidKeyword",
                            })
                        },
                    )
                }
                switch (nextChild.kindName) {
                    case 'AnyKeyword': /*Y*/ {
                        choose_any()
                        break
                    }
                    case 'ArrayType': /*Y*/ {
                        choose_array()
                        break
                    }
                    case 'BooleanKeyword': /*Y*/ {
                        choose_boolean()
                        break
                    }
                    case 'FunctionType': /*Y*/ {
                        choose_function()
                        break
                    }
                    case 'LiteralType': /*Y*/ {
                        choose_literal()
                        break
                    }
                    case 'NeverKeyword': /*Y*/ {
                        choose_never()
                        break
                    }
                    case 'NumberKeyword': /*Y*/ {
                        choose_number()
                        break
                    }
                    case 'OptionalType': /*Y*/ {
                        choose_optional()
                        break
                    }
                    case 'ParenthesizedType': /*Y*/ {
                        choose_parenthesized()
                        break
                    }
                    case 'StringKeyword': /*Y*/ {
                        choose_string()
                        break
                    }
                    case 'TupleType': /*Y*/ {
                        choose_tuple()
                        break
                    }
                    case 'TypeLiteral': /*Y*/ {
                        choose_typeLiteral()
                        break
                    }
                    case 'TypeReference': /*Y*/ {
                        choose_typeReference()
                        break
                    }
                    case 'UndefinedKeyword': /*Y*/ {
                        choose_undefined()
                        break
                    }
                    case 'UnionType': /*Y*/ {
                        choose_union()
                        break
                    }
                    case 'VoidKeyword': /*Y*/ {
                        choose_void()
                        break
                    }
                    default: {
                        $x.reportUnexpectedToken({
                            path: "Gtype",
                            token: nextChild,
                            expected: "AnyKeyword, ArrayType, BooleanKeyword, FunctionType, LiteralType, NeverKeyword, NumberKeyword, OptionalType, ParenthesizedType, StringKeyword, TupleType, TypeLiteral, TypeReference, UndefinedKeyword, UnionType, VoidKeyword",
                        })
                    }
                }
            },
            () => { // no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "Gtype",
                    kindNameOptions: "AnyKeyword, ArrayType, BooleanKeyword, FunctionType, LiteralType, NeverKeyword, NumberKeyword, OptionalType, ParenthesizedType, StringKeyword, TupleType, TypeLiteral, TypeReference, UndefinedKeyword, UnionType, VoidKeyword",
                })
            },
        )
    }
    function GtypeParameter(
        node: uast.T.UntypedNode,
        children: ps.Stack<uast.T.UntypedNode>,
        callback: ($: mapi.TGtypeParameter) => void,
    ): void {
        children.pop(
            (currentChild) => {
                if ($d.stringsAreEqual(currentChild.kindName, "TypeParameter")) {
                    ((
                        $: uast.T.UntypedNode,
                        callback: ($: mapi.TNGtypeParameter$) => void,
                    ): void => {
                        const node = $
                        const children = ps.createStack($.children)
                        Gidentifier(node, children, ($) => {
                            callback({
                                tokenDetails: node.details,
                                content: $,
                            })
                        })
                        children.pop(
                            (nextChild) => {
                                $x.reportUnexpectedToken({
                                    path: "GtypeParameter$",
                                    token: nextChild,
                                    expected: null,
                                })
                            },
                            () => {},
                        )
                    })(
                        currentChild,
                        ($) => {
                            callback($)
                        }
                    )
                } else {
                    $x.reportUnexpectedToken({
                        path: "GtypeParameter",
                        token: currentChild,
                        expected: "TypeParameter",
                    })
                }
            },
            () => { // no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "GtypeParameter",
                    kindNameOptions: "TypeParameter",
                })
            },
        )
    }
    function GtypeSignature(
        node: uast.T.UntypedNode,
        children: ps.Stack<uast.T.UntypedNode>,
        callback: ($: mapi.TGtypeSignature) => void,
    ): void {
        const choiceEnd_GtypeSignature = ($: mapi.TVTGtypeSignature) => {
            callback($)
        }
        $d.lookAhead(children, 
            (nextChild) => {
                const choose_construct = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "ConstructSignature")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGtypeSignature_construct$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const sequenceEnd = ($: mapi.TVTGtypeSignature_construct$) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    }
                                    const elements = ps.createArrayBuilderFIXME<mapi.TVTGtypeSignature_construct$_parameters>()
                                    const processElement = () => {
                                        Gparameter(node, children, ($) => {
                                            elements.push($)
                                        })
                                    }
                                    $d.doUntil(
                                        children,
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case 'Parameter':
                                                    processElement()
                                                    return true
                                                default: return false
                                            }
                                        },
                                    )
                                    pl.cc(elements.getArray(), ($) => {
                                        const _parameters = $
                                        Gtype(node, children, ($) => {
                                            const _returnType = $
                                            sequenceEnd({
                                                "parameters": _parameters,
                                                "returnType": _returnType,
                                            })
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "GtypeSignature_construct$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_GtypeSignature(['construct', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "GtypeSignature_construct",
                                    token: currentChild,
                                    expected: "ConstructSignature",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "GtypeSignature_construct",
                                kindNameOptions: "ConstructSignature",
                            })
                        },
                    )
                }
                const choose_index = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "IndexSignature")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGtypeSignature_index$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const sequenceEnd = ($: mapi.TVTGtypeSignature_index$) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    }
                                    const elements = ps.createArrayBuilderFIXME<mapi.TVTGtypeSignature_index$_modifiers>()
                                    const processElement = () => {
                                        Gmodifier(node, children, ($) => {
                                            elements.push($)
                                        })
                                    }
                                    $d.doUntil(
                                        children,
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case 'DeclareKeyword':
                                                    processElement()
                                                    return true
                                                case 'ExportKeyword':
                                                    processElement()
                                                    return true
                                                case 'ReadonlyKeyword':
                                                    processElement()
                                                    return true
                                                default: return false
                                            }
                                        },
                                    )
                                    pl.cc(elements.getArray(), ($) => {
                                        const _modifiers = $
                                        Gparameter(node, children, ($) => {
                                            const _parameter = $
                                            let optional: null | mapi.TVTGtypeSignature_index$_type = null
                                            const setOptional = () => {
                                                Gtype(node, children, ($) => {
                                                    optional = $
                                                })
                                            }
                                            $d.lookAhead(children, 
                                                (nextChild) => {
                                                    switch (nextChild.kindName) {
                                                        case 'AnyKeyword':
                                                            setOptional()
                                                            break
                                                        case 'ArrayType':
                                                            setOptional()
                                                            break
                                                        case 'BooleanKeyword':
                                                            setOptional()
                                                            break
                                                        case 'FunctionType':
                                                            setOptional()
                                                            break
                                                        case 'LiteralType':
                                                            setOptional()
                                                            break
                                                        case 'NeverKeyword':
                                                            setOptional()
                                                            break
                                                        case 'NumberKeyword':
                                                            setOptional()
                                                            break
                                                        case 'OptionalType':
                                                            setOptional()
                                                            break
                                                        case 'ParenthesizedType':
                                                            setOptional()
                                                            break
                                                        case 'StringKeyword':
                                                            setOptional()
                                                            break
                                                        case 'TupleType':
                                                            setOptional()
                                                            break
                                                        case 'TypeLiteral':
                                                            setOptional()
                                                            break
                                                        case 'TypeReference':
                                                            setOptional()
                                                            break
                                                        case 'UndefinedKeyword':
                                                            setOptional()
                                                            break
                                                        case 'UnionType':
                                                            setOptional()
                                                            break
                                                        case 'VoidKeyword':
                                                            setOptional()
                                                            break
                                                    }
                                                },
                                                () => {},
                                            )
                                            pl.cc(optional, ($) => {
                                                const _type = $
                                                sequenceEnd({
                                                    "modifiers": _modifiers,
                                                    "parameter": _parameter,
                                                    "type": _type,
                                                })
                                            })
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "GtypeSignature_index$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_GtypeSignature(['index', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "GtypeSignature_index",
                                    token: currentChild,
                                    expected: "IndexSignature",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "GtypeSignature_index",
                                kindNameOptions: "IndexSignature",
                            })
                        },
                    )
                }
                const choose_method = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "MethodSignature")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGtypeSignature_method$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const sequenceEnd = ($: mapi.TVTGtypeSignature_method$) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    }
                                    Gidentifier(node, children, ($) => {
                                        const _name = $
                                        GfunctionDefinition(node, children, ($) => {
                                            const _definition = $
                                            sequenceEnd({
                                                "name": _name,
                                                "definition": _definition,
                                            })
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "GtypeSignature_method$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_GtypeSignature(['method', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "GtypeSignature_method",
                                    token: currentChild,
                                    expected: "MethodSignature",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "GtypeSignature_method",
                                kindNameOptions: "MethodSignature",
                            })
                        },
                    )
                }
                const choose_property = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsAreEqual(currentChild.kindName, "PropertySignature")) {
                                ((
                                    $: uast.T.UntypedNode,
                                    callback: ($: mapi.TNGtypeSignature_property$) => void,
                                ): void => {
                                    const node = $
                                    const children = ps.createStack($.children)
                                    const sequenceEnd = ($: mapi.TVTGtypeSignature_property$) => {
                                        callback({
                                            tokenDetails: node.details,
                                            content: $,
                                        })
                                    }
                                    const elements = ps.createArrayBuilderFIXME<mapi.TVTGtypeSignature_property$_modifiers>()
                                    const processElement = () => {
                                        Gmodifier(node, children, ($) => {
                                            elements.push($)
                                        })
                                    }
                                    $d.doUntil(
                                        children,
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case 'DeclareKeyword':
                                                    processElement()
                                                    return true
                                                case 'ExportKeyword':
                                                    processElement()
                                                    return true
                                                case 'ReadonlyKeyword':
                                                    processElement()
                                                    return true
                                                default: return false
                                            }
                                        },
                                    )
                                    pl.cc(elements.getArray(), ($) => {
                                        const _modifiers = $
                                        GidentifierOrStringLiteral(node, children, ($) => {
                                            const _name = $
                                            let optional: null | mapi.TVTGtypeSignature_property$_quesionToken = null
                                            const setOptional = () => {
                                                children.pop(
                                                    (currentChild) => {
                                                        if ($d.stringsAreEqual(currentChild.kindName, "QuestionToken")) {
                                                            ((
                                                                $: uast.T.UntypedNode,
                                                                callback: ($: mapi.TNGtypeSignature_property$_quesionToken$) => void,
                                                            ): void => {
                                                                const node = $
                                                                const children = ps.createStack($.children)
                                                                callback($.details)
                                                                children.pop(
                                                                    (nextChild) => {
                                                                        $x.reportUnexpectedToken({
                                                                            path: "GtypeSignature_property$_quesionToken$",
                                                                            token: nextChild,
                                                                            expected: null,
                                                                        })
                                                                    },
                                                                    () => {},
                                                                )
                                                            })(
                                                                currentChild,
                                                                ($) => {
                                                                    optional = $
                                                                }
                                                            )
                                                        } else {
                                                            $x.reportUnexpectedToken({
                                                                path: "GtypeSignature_property$_quesionToken",
                                                                token: currentChild,
                                                                expected: "QuestionToken",
                                                            })
                                                        }
                                                    },
                                                    () => { // no child
                                                        $x.reportMissingToken({
                                                            parentDetails: node.details,
                                                            path: "GtypeSignature_property$_quesionToken",
                                                            kindNameOptions: "QuestionToken",
                                                        })
                                                    },
                                                )
                                            }
                                            $d.lookAhead(children, 
                                                (nextChild) => {
                                                    switch (nextChild.kindName) {
                                                        case 'QuestionToken':
                                                            setOptional()
                                                            break
                                                    }
                                                },
                                                () => {},
                                            )
                                            pl.cc(optional, ($) => {
                                                const _quesionToken = $
                                                let optional: null | mapi.TVTGtypeSignature_property$_type = null
                                                const setOptional = () => {
                                                    Gtype(node, children, ($) => {
                                                        optional = $
                                                    })
                                                }
                                                $d.lookAhead(children, 
                                                    (nextChild) => {
                                                        switch (nextChild.kindName) {
                                                            case 'AnyKeyword':
                                                                setOptional()
                                                                break
                                                            case 'ArrayType':
                                                                setOptional()
                                                                break
                                                            case 'BooleanKeyword':
                                                                setOptional()
                                                                break
                                                            case 'FunctionType':
                                                                setOptional()
                                                                break
                                                            case 'LiteralType':
                                                                setOptional()
                                                                break
                                                            case 'NeverKeyword':
                                                                setOptional()
                                                                break
                                                            case 'NumberKeyword':
                                                                setOptional()
                                                                break
                                                            case 'OptionalType':
                                                                setOptional()
                                                                break
                                                            case 'ParenthesizedType':
                                                                setOptional()
                                                                break
                                                            case 'StringKeyword':
                                                                setOptional()
                                                                break
                                                            case 'TupleType':
                                                                setOptional()
                                                                break
                                                            case 'TypeLiteral':
                                                                setOptional()
                                                                break
                                                            case 'TypeReference':
                                                                setOptional()
                                                                break
                                                            case 'UndefinedKeyword':
                                                                setOptional()
                                                                break
                                                            case 'UnionType':
                                                                setOptional()
                                                                break
                                                            case 'VoidKeyword':
                                                                setOptional()
                                                                break
                                                        }
                                                    },
                                                    () => {},
                                                )
                                                pl.cc(optional, ($) => {
                                                    const _type = $
                                                    sequenceEnd({
                                                        "modifiers": _modifiers,
                                                        "name": _name,
                                                        "quesionToken": _quesionToken,
                                                        "type": _type,
                                                    })
                                                })
                                            })
                                        })
                                    })
                                    children.pop(
                                        (nextChild) => {
                                            $x.reportUnexpectedToken({
                                                path: "GtypeSignature_property$",
                                                token: nextChild,
                                                expected: null,
                                            })
                                        },
                                        () => {},
                                    )
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_GtypeSignature(['property', $])
                                    }
                                )
                            } else {
                                $x.reportUnexpectedToken({
                                    path: "GtypeSignature_property",
                                    token: currentChild,
                                    expected: "PropertySignature",
                                })
                            }
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "GtypeSignature_property",
                                kindNameOptions: "PropertySignature",
                            })
                        },
                    )
                }
                switch (nextChild.kindName) {
                    case 'ConstructSignature': /*Y*/ {
                        choose_construct()
                        break
                    }
                    case 'IndexSignature': /*Y*/ {
                        choose_index()
                        break
                    }
                    case 'MethodSignature': /*Y*/ {
                        choose_method()
                        break
                    }
                    case 'PropertySignature': /*Y*/ {
                        choose_property()
                        break
                    }
                    default: {
                        $x.reportUnexpectedToken({
                            path: "GtypeSignature",
                            token: nextChild,
                            expected: "ConstructSignature, IndexSignature, MethodSignature, PropertySignature",
                        })
                    }
                }
            },
            () => { // no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "GtypeSignature",
                    kindNameOptions: "ConstructSignature, IndexSignature, MethodSignature, PropertySignature",
                })
            },
        )
    }
    function GvariableDeclaration(
        node: uast.T.UntypedNode,
        children: ps.Stack<uast.T.UntypedNode>,
        callback: ($: mapi.TGvariableDeclaration) => void,
    ): void {
        children.pop(
            (currentChild) => {
                if ($d.stringsAreEqual(currentChild.kindName, "VariableDeclaration")) {
                    ((
                        $: uast.T.UntypedNode,
                        callback: ($: mapi.TNGvariableDeclaration$) => void,
                    ): void => {
                        const node = $
                        const children = ps.createStack($.children)
                        const sequenceEnd = ($: mapi.TVTGvariableDeclaration$) => {
                            callback({
                                tokenDetails: node.details,
                                content: $,
                            })
                        }
                        Gidentifier(node, children, ($) => {
                            const _name = $
                            let optional: null | mapi.TVTGvariableDeclaration$_type = null
                            const setOptional = () => {
                                Gtype(node, children, ($) => {
                                    optional = $
                                })
                            }
                            $d.lookAhead(children, 
                                (nextChild) => {
                                    switch (nextChild.kindName) {
                                        case 'AnyKeyword':
                                            setOptional()
                                            break
                                        case 'ArrayType':
                                            setOptional()
                                            break
                                        case 'BooleanKeyword':
                                            setOptional()
                                            break
                                        case 'FunctionType':
                                            setOptional()
                                            break
                                        case 'LiteralType':
                                            setOptional()
                                            break
                                        case 'NeverKeyword':
                                            setOptional()
                                            break
                                        case 'NumberKeyword':
                                            setOptional()
                                            break
                                        case 'OptionalType':
                                            setOptional()
                                            break
                                        case 'ParenthesizedType':
                                            setOptional()
                                            break
                                        case 'StringKeyword':
                                            setOptional()
                                            break
                                        case 'TupleType':
                                            setOptional()
                                            break
                                        case 'TypeLiteral':
                                            setOptional()
                                            break
                                        case 'TypeReference':
                                            setOptional()
                                            break
                                        case 'UndefinedKeyword':
                                            setOptional()
                                            break
                                        case 'UnionType':
                                            setOptional()
                                            break
                                        case 'VoidKeyword':
                                            setOptional()
                                            break
                                    }
                                },
                                () => {},
                            )
                            pl.cc(optional, ($) => {
                                const _type = $
                                let optional: null | mapi.TVTGvariableDeclaration$_expression = null
                                const setOptional = () => {
                                    Gexpression(node, children, ($) => {
                                        optional = $
                                    })
                                }
                                $d.lookAhead(children, 
                                    (nextChild) => {
                                        switch (nextChild.kindName) {
                                            case 'ArrayLiteralExpression':
                                                setOptional()
                                                break
                                            case 'ArrowFunction':
                                                setOptional()
                                                break
                                            case 'BinaryExpression':
                                                setOptional()
                                                break
                                            case 'CallExpression':
                                                setOptional()
                                                break
                                            case 'ConditionalExpression':
                                                setOptional()
                                                break
                                            case 'ElementAccessExpression':
                                                setOptional()
                                                break
                                            case 'FalseKeyword':
                                                setOptional()
                                                break
                                            case 'Identifier':
                                                setOptional()
                                                break
                                            case 'NewExpression':
                                                setOptional()
                                                break
                                            case 'NoSubstitutionTemplateLiteral':
                                                setOptional()
                                                break
                                            case 'NullKeyword':
                                                setOptional()
                                                break
                                            case 'NumericLiteral':
                                                setOptional()
                                                break
                                            case 'ObjectLiteralExpression':
                                                setOptional()
                                                break
                                            case 'ParenthesizedExpression':
                                                setOptional()
                                                break
                                            case 'PostfixUnaryExpression':
                                                setOptional()
                                                break
                                            case 'PrefixUnaryExpression':
                                                setOptional()
                                                break
                                            case 'PropertyAccessExpression':
                                                setOptional()
                                                break
                                            case 'StringLiteral':
                                                setOptional()
                                                break
                                            case 'TemplateExpression':
                                                setOptional()
                                                break
                                            case 'TrueKeyword':
                                                setOptional()
                                                break
                                        }
                                    },
                                    () => {},
                                )
                                pl.cc(optional, ($) => {
                                    const _expression = $
                                    sequenceEnd({
                                        "name": _name,
                                        "type": _type,
                                        "expression": _expression,
                                    })
                                })
                            })
                        })
                        children.pop(
                            (nextChild) => {
                                $x.reportUnexpectedToken({
                                    path: "GvariableDeclaration$",
                                    token: nextChild,
                                    expected: null,
                                })
                            },
                            () => {},
                        )
                    })(
                        currentChild,
                        ($) => {
                            callback($)
                        }
                    )
                } else {
                    $x.reportUnexpectedToken({
                        path: "GvariableDeclaration",
                        token: currentChild,
                        expected: "VariableDeclaration",
                    })
                }
            },
            () => { // no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "GvariableDeclaration",
                    kindNameOptions: "VariableDeclaration",
                })
            },
        )
    }
    function GvariableDeclarationList(
        node: uast.T.UntypedNode,
        children: ps.Stack<uast.T.UntypedNode>,
        callback: ($: mapi.TGvariableDeclarationList) => void,
    ): void {
        children.pop(
            (currentChild) => {
                if ($d.stringsAreEqual(currentChild.kindName, "VariableDeclarationList")) {
                    ((
                        $: uast.T.UntypedNode,
                        callback: ($: mapi.TNGvariableDeclarationList$) => void,
                    ): void => {
                        const node = $
                        const children = ps.createStack($.children)
                        const elements = ps.createArrayBuilderFIXME<mapi.TVTGvariableDeclarationList$>()
                        const processElement = () => {
                            GvariableDeclaration(node, children, ($) => {
                                elements.push($)
                            })
                        }
                        $d.doUntil(
                            children,
                            (nextChild) => {
                                switch (nextChild.kindName) {
                                    case 'VariableDeclaration':
                                        processElement()
                                        return true
                                    default: return false
                                }
                            },
                        )
                        pl.cc(elements.getArray(), ($) => {
                            callback({
                                tokenDetails: node.details,
                                content: $,
                            })
                        })
                        children.pop(
                            (nextChild) => {
                                $x.reportUnexpectedToken({
                                    path: "GvariableDeclarationList$",
                                    token: nextChild,
                                    expected: null,
                                })
                            },
                            () => {},
                        )
                    })(
                        currentChild,
                        ($) => {
                            callback($)
                        }
                    )
                } else {
                    $x.reportUnexpectedToken({
                        path: "GvariableDeclarationList",
                        token: currentChild,
                        expected: "VariableDeclarationList",
                    })
                }
            },
            () => { // no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "GvariableDeclarationList",
                    kindNameOptions: "VariableDeclarationList",
                })
            },
        )
    }
    if ($d.stringsAreEqual($.kindName, "SourceFile")) {
        ((
            $: uast.T.UntypedNode,
            callback: ($: mapi.TNroot) => void,
        ): void => {
            const node = $
            const children = ps.createStack($.children)
            const sequenceEnd = ($: mapi.TVTroot) => {
                callback({
                    tokenDetails: node.details,
                    content: $,
                })
            }
            const elements = ps.createArrayBuilderFIXME<mapi.TVTroot_statements>()
            const processElement = () => {
                Gstatement(node, children, ($) => {
                    elements.push($)
                })
            }
            $d.doUntil(
                children,
                (nextChild) => {
                    switch (nextChild.kindName) {
                        case 'Block':
                            processElement()
                            return true
                        case 'BreakStatement':
                            processElement()
                            return true
                        case 'ExportDeclaration':
                            processElement()
                            return true
                        case 'ExpressionStatement':
                            processElement()
                            return true
                        case 'ForStatement':
                            processElement()
                            return true
                        case 'FunctionDeclaration':
                            processElement()
                            return true
                        case 'IfStatement':
                            processElement()
                            return true
                        case 'ImportDeclaration':
                            processElement()
                            return true
                        case 'InterfaceDeclaration':
                            processElement()
                            return true
                        case 'LabeledStatement':
                            processElement()
                            return true
                        case 'ReturnStatement':
                            processElement()
                            return true
                        case 'SwitchStatement':
                            processElement()
                            return true
                        case 'ThrowStatement':
                            processElement()
                            return true
                        case 'TryStatement':
                            processElement()
                            return true
                        case 'TypeAliasDeclaration':
                            processElement()
                            return true
                        case 'VariableStatement':
                            processElement()
                            return true
                        case 'WhileStatement':
                            processElement()
                            return true
                        default: return false
                    }
                },
            )
            pl.cc(elements.getArray(), ($) => {
                const _statements = $
                children.pop(
                    (currentChild) => {
                        if ($d.stringsAreEqual(currentChild.kindName, "EndOfFileToken")) {
                            ((
                                $: uast.T.UntypedNode,
                                callback: ($: mapi.TNroot_endOfFile$) => void,
                            ): void => {
                                const node = $
                                const children = ps.createStack($.children)
                                callback($.details)
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "root_endOfFile$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    const _endOfFile = $
                                    sequenceEnd({
                                        "statements": _statements,
                                        "endOfFile": _endOfFile,
                                    })
                                }
                            )
                        } else {
                            $x.reportUnexpectedToken({
                                path: "root_endOfFile",
                                token: currentChild,
                                expected: "EndOfFileToken",
                            })
                        }
                    },
                    () => { // no child
                        $x.reportMissingToken({
                            parentDetails: node.details,
                            path: "root_endOfFile",
                            kindNameOptions: "EndOfFileToken",
                        })
                    },
                )
            })
            children.pop(
                (nextChild) => {
                    $x.reportUnexpectedToken({
                        path: "root",
                        token: nextChild,
                        expected: null,
                    })
                },
                () => {},
            )
        })(
            $,
            ($) => {
                $x.callback($)
            },
        )
    } else {
        $x.reportUnexpectedToken({
            path: "",
            token: $,
            expected: "SourceFile",
        })
    }
}