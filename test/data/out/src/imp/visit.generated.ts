import * as pl from 'pareto-core-lib'
import * as api from "../interface"


export function visit(
    $: api.TNroot,
    $i: {
        visitor: api.IVisitor,
    }
): void {
    function X_block(
        $: api.TGblock,
    ) {
        ((
            $: api.TNGblock$,
        ) => {
            if (pl.isNotUndefined($i.visitor["$block/*Block"])) { $i.visitor["$block/*Block"].begin($) }
            pl.cc($.content, ($) => {
                $.forEach(($) => {
                    X_statement($)
                })
            })
            if (pl.isNotUndefined($i.visitor["$block/*Block"])) { $i.visitor["$block/*Block"].end($) }
        })($)
    }
    function X_expression(
        $: api.TGexpression,
    ) {
        switch ($[0]) {
            case "arrayLiteral": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_arrayLiteral$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?arrayLiteral/*ArrayLiteralExpression"])) { $i.visitor["$expression/?arrayLiteral/*ArrayLiteralExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_expression($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$expression/?arrayLiteral/*ArrayLiteralExpression"])) { $i.visitor["$expression/?arrayLiteral/*ArrayLiteralExpression"].end($) }
                    })($)
                })
                break
            }
            case "arrowFunction": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_arrowFunction$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?arrowFunction/*ArrowFunction"])) { $i.visitor["$expression/?arrowFunction/*ArrowFunction"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    X_parameter($)
                                })
                            })
                            pl.cc($["returnType"], ($) => {
                                if (pl.isNotNull($)) {
                                    X_type($)
                                } else {
                                    //FIXME??
                                }
                            })
                            pl.cc($["equalsGreaterThan"], ($) => {
                                ((
                                    $: api.TNGexpression_arrowFunction$_equalsGreaterThan$,
                                ) => {
                                    if (pl.isNotUndefined($i.visitor["$expression/?arrowFunction/*ArrowFunction/.equalsGreaterThan/*EqualsGreaterThanToken"])) { $i.visitor["$expression/?arrowFunction/*ArrowFunction/.equalsGreaterThan/*EqualsGreaterThanToken"]($) }
                                })($)
                            })
                            pl.cc($["implementation"], ($) => {
                                switch ($[0]) {
                                    case "block": {
                                        pl.cc($[1], ($) => {
                                            X_block($)
                                        })
                                        break
                                    }
                                    case "expression": {
                                        pl.cc($[1], ($) => {
                                            X_expression($)
                                        })
                                        break
                                    }
                                    default: pl.au($[0])
                                }
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$expression/?arrowFunction/*ArrowFunction"])) { $i.visitor["$expression/?arrowFunction/*ArrowFunction"].end($) }
                    })($)
                })
                break
            }
            case "binary": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_binary$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?binary/*BinaryExpression"])) { $i.visitor["$expression/?binary/*BinaryExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["leftHandSide"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["operator"], ($) => {
                                switch ($[0]) {
                                    case "ampersandAmpersand": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_ampersandAmpersand$,
                                            ) => {
                                                if (pl.isNotUndefined($i.visitor["$expression/?binary/*BinaryExpression/.operator/?ampersandAmpersand/*AmpersandAmpersandToken"])) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?ampersandAmpersand/*AmpersandAmpersandToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "barBar": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_barBar$,
                                            ) => {
                                                if (pl.isNotUndefined($i.visitor["$expression/?binary/*BinaryExpression/.operator/?barBar/*BarBarToken"])) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?barBar/*BarBarToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "equals": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_equals$,
                                            ) => {
                                                if (pl.isNotUndefined($i.visitor["$expression/?binary/*BinaryExpression/.operator/?equals/*EqualsToken"])) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?equals/*EqualsToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "equalsEqualsEquals": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_equalsEqualsEquals$,
                                            ) => {
                                                if (pl.isNotUndefined($i.visitor["$expression/?binary/*BinaryExpression/.operator/?equalsEqualsEquals/*EqualsEqualsEqualsToken"])) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?equalsEqualsEquals/*EqualsEqualsEqualsToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "exclamationEqualsEquals": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_exclamationEqualsEquals$,
                                            ) => {
                                                if (pl.isNotUndefined($i.visitor["$expression/?binary/*BinaryExpression/.operator/?exclamationEqualsEquals/*ExclamationEqualsEqualsToken"])) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?exclamationEqualsEquals/*ExclamationEqualsEqualsToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "greaterThan": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_greaterThan$,
                                            ) => {
                                                if (pl.isNotUndefined($i.visitor["$expression/?binary/*BinaryExpression/.operator/?greaterThan/*GreaterThanToken"])) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?greaterThan/*GreaterThanToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "lessThan": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_lessThan$,
                                            ) => {
                                                if (pl.isNotUndefined($i.visitor["$expression/?binary/*BinaryExpression/.operator/?lessThan/*LessThanToken"])) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?lessThan/*LessThanToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "minus": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_minus$,
                                            ) => {
                                                if (pl.isNotUndefined($i.visitor["$expression/?binary/*BinaryExpression/.operator/?minus/*MinusToken"])) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?minus/*MinusToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "minusEquals": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_minusEquals$,
                                            ) => {
                                                if (pl.isNotUndefined($i.visitor["$expression/?binary/*BinaryExpression/.operator/?minusEquals/*MinusEqualsToken"])) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?minusEquals/*MinusEqualsToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "plus": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_plus$,
                                            ) => {
                                                if (pl.isNotUndefined($i.visitor["$expression/?binary/*BinaryExpression/.operator/?plus/*PlusToken"])) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?plus/*PlusToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "plusEquals": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_plusEquals$,
                                            ) => {
                                                if (pl.isNotUndefined($i.visitor["$expression/?binary/*BinaryExpression/.operator/?plusEquals/*PlusEqualsToken"])) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?plusEquals/*PlusEqualsToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    default: pl.au($[0])
                                }
                            })
                            pl.cc($["rightHandSide"], ($) => {
                                X_expression($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$expression/?binary/*BinaryExpression"])) { $i.visitor["$expression/?binary/*BinaryExpression"].end($) }
                    })($)
                })
                break
            }
            case "call": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_call$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?call/*CallExpression"])) { $i.visitor["$expression/?call/*CallExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["function"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["typeParameters"], ($) => {
                                $.forEach(($) => {
                                    X_type($)
                                })
                            })
                            pl.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    X_expression($)
                                })
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$expression/?call/*CallExpression"])) { $i.visitor["$expression/?call/*CallExpression"].end($) }
                    })($)
                })
                break
            }
            case "conditional": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_conditional$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?conditional/*ConditionalExpression"])) { $i.visitor["$expression/?conditional/*ConditionalExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["test"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["questionToken"], ($) => {
                                ((
                                    $: api.TNGexpression_conditional$_questionToken$,
                                ) => {
                                    if (pl.isNotUndefined($i.visitor["$expression/?conditional/*ConditionalExpression/.questionToken/*QuestionToken"])) { $i.visitor["$expression/?conditional/*ConditionalExpression/.questionToken/*QuestionToken"]($) }
                                })($)
                            })
                            pl.cc($["ifExpression"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["colonToken"], ($) => {
                                ((
                                    $: api.TNGexpression_conditional$_colonToken$,
                                ) => {
                                    if (pl.isNotUndefined($i.visitor["$expression/?conditional/*ConditionalExpression/.colonToken/*ColonToken"])) { $i.visitor["$expression/?conditional/*ConditionalExpression/.colonToken/*ColonToken"]($) }
                                })($)
                            })
                            pl.cc($["elseExpression"], ($) => {
                                X_expression($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$expression/?conditional/*ConditionalExpression"])) { $i.visitor["$expression/?conditional/*ConditionalExpression"].end($) }
                    })($)
                })
                break
            }
            case "elementAccess": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_elementAccess$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?elementAccess/*ElementAccessExpression"])) { $i.visitor["$expression/?elementAccess/*ElementAccessExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["array"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["element"], ($) => {
                                X_expression($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$expression/?elementAccess/*ElementAccessExpression"])) { $i.visitor["$expression/?elementAccess/*ElementAccessExpression"].end($) }
                    })($)
                })
                break
            }
            case "false": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_false$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?false/*FalseKeyword"])) { $i.visitor["$expression/?false/*FalseKeyword"]($) }
                    })($)
                })
                break
            }
            case "identifier": {
                pl.cc($[1], ($) => {
                    X_identifier($)
                })
                break
            }
            case "new": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_new$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?new/*NewExpression"])) { $i.visitor["$expression/?new/*NewExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["class"], ($) => {
                                X_identifier($)
                            })
                            pl.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    X_expression($)
                                })
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$expression/?new/*NewExpression"])) { $i.visitor["$expression/?new/*NewExpression"].end($) }
                    })($)
                })
                break
            }
            case "noSubstitutionTemplateLiteral": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_noSubstitutionTemplateLiteral$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?noSubstitutionTemplateLiteral/*NoSubstitutionTemplateLiteral"])) { $i.visitor["$expression/?noSubstitutionTemplateLiteral/*NoSubstitutionTemplateLiteral"]($) }
                    })($)
                })
                break
            }
            case "nullKeyword": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_nullKeyword$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?nullKeyword/*NullKeyword"])) { $i.visitor["$expression/?nullKeyword/*NullKeyword"]($) }
                    })($)
                })
                break
            }
            case "numericLiteral": {
                pl.cc($[1], ($) => {
                    X_numericLiteral($)
                })
                break
            }
            case "objectLiteral": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_objectLiteral$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?objectLiteral/*ObjectLiteralExpression"])) { $i.visitor["$expression/?objectLiteral/*ObjectLiteralExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            $.forEach(($) => {
                                ((
                                    $: api.TNGexpression_objectLiteral$$,
                                ) => {
                                    if (pl.isNotUndefined($i.visitor["$expression/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"])) { $i.visitor["$expression/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"].begin($) }
                                    pl.cc($.content, ($) => {
                                        pl.cc($["name"], ($) => {
                                            switch ($[0]) {
                                                case "identifier": {
                                                    pl.cc($[1], ($) => {
                                                        X_identifier($)
                                                    })
                                                    break
                                                }
                                                case "numericLiteral": {
                                                    pl.cc($[1], ($) => {
                                                        X_numericLiteral($)
                                                    })
                                                    break
                                                }
                                                case "stringLiteral": {
                                                    pl.cc($[1], ($) => {
                                                        X_stringLiteral($)
                                                    })
                                                    break
                                                }
                                                default: pl.au($[0])
                                            }
                                        })
                                        pl.cc($["expression"], ($) => {
                                            X_expression($)
                                        })
                                    })
                                    if (pl.isNotUndefined($i.visitor["$expression/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"])) { $i.visitor["$expression/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"].end($) }
                                })($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$expression/?objectLiteral/*ObjectLiteralExpression"])) { $i.visitor["$expression/?objectLiteral/*ObjectLiteralExpression"].end($) }
                    })($)
                })
                break
            }
            case "parenthesizedExpression": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_parenthesizedExpression$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?parenthesizedExpression/*ParenthesizedExpression"])) { $i.visitor["$expression/?parenthesizedExpression/*ParenthesizedExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (pl.isNotUndefined($i.visitor["$expression/?parenthesizedExpression/*ParenthesizedExpression"])) { $i.visitor["$expression/?parenthesizedExpression/*ParenthesizedExpression"].end($) }
                    })($)
                })
                break
            }
            case "postfixUnary": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_postfixUnary$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?postfixUnary/*PostfixUnaryExpression"])) { $i.visitor["$expression/?postfixUnary/*PostfixUnaryExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (pl.isNotUndefined($i.visitor["$expression/?postfixUnary/*PostfixUnaryExpression"])) { $i.visitor["$expression/?postfixUnary/*PostfixUnaryExpression"].end($) }
                    })($)
                })
                break
            }
            case "prefixUnary": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_prefixUnary$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?prefixUnary/*PrefixUnaryExpression"])) { $i.visitor["$expression/?prefixUnary/*PrefixUnaryExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (pl.isNotUndefined($i.visitor["$expression/?prefixUnary/*PrefixUnaryExpression"])) { $i.visitor["$expression/?prefixUnary/*PrefixUnaryExpression"].end($) }
                    })($)
                })
                break
            }
            case "propertyAccess": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_propertyAccess$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?propertyAccess/*PropertyAccessExpression"])) { $i.visitor["$expression/?propertyAccess/*PropertyAccessExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["object"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["property"], ($) => {
                                X_expression($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$expression/?propertyAccess/*PropertyAccessExpression"])) { $i.visitor["$expression/?propertyAccess/*PropertyAccessExpression"].end($) }
                    })($)
                })
                break
            }
            case "stringLiteral": {
                pl.cc($[1], ($) => {
                    X_stringLiteral($)
                })
                break
            }
            case "template": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_template$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?template/*TemplateExpression"])) { $i.visitor["$expression/?template/*TemplateExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["head"], ($) => {
                                ((
                                    $: api.TNGexpression_template$_head$,
                                ) => {
                                    if (pl.isNotUndefined($i.visitor["$expression/?template/*TemplateExpression/.head/*TemplateHead"])) { $i.visitor["$expression/?template/*TemplateExpression/.head/*TemplateHead"]($) }
                                })($)
                            })
                            pl.cc($["spans"], ($) => {
                                $.forEach(($) => {
                                    ((
                                        $: api.TNGexpression_template$_spans$,
                                    ) => {
                                        if (pl.isNotUndefined($i.visitor["$expression/?template/*TemplateExpression/.spans/*TemplateSpan"])) { $i.visitor["$expression/?template/*TemplateExpression/.spans/*TemplateSpan"].begin($) }
                                        pl.cc($.content, ($) => {
                                            pl.cc($["expression"], ($) => {
                                                X_expression($)
                                            })
                                            pl.cc($["x"], ($) => {
                                                switch ($[0]) {
                                                    case "middle": {
                                                        pl.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNGexpression_template$_spans$_x_middle$,
                                                            ) => {
                                                                if (pl.isNotUndefined($i.visitor["$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?middle/*TemplateMiddle"])) { $i.visitor["$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?middle/*TemplateMiddle"]($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    case "tail": {
                                                        pl.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNGexpression_template$_spans$_x_tail$,
                                                            ) => {
                                                                if (pl.isNotUndefined($i.visitor["$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?tail/*TemplateTail"])) { $i.visitor["$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?tail/*TemplateTail"]($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    default: pl.au($[0])
                                                }
                                            })
                                        })
                                        if (pl.isNotUndefined($i.visitor["$expression/?template/*TemplateExpression/.spans/*TemplateSpan"])) { $i.visitor["$expression/?template/*TemplateExpression/.spans/*TemplateSpan"].end($) }
                                    })($)
                                })
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$expression/?template/*TemplateExpression"])) { $i.visitor["$expression/?template/*TemplateExpression"].end($) }
                    })($)
                })
                break
            }
            case "true": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_true$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?true/*TrueKeyword"])) { $i.visitor["$expression/?true/*TrueKeyword"]($) }
                    })($)
                })
                break
            }
            default: pl.au($[0])
        }
    }
    function X_functionDefinition(
        $: api.TGfunctionDefinition,
    ) {
        pl.cc($["typeParameters"], ($) => {
            $.forEach(($) => {
                X_typeParameter($)
            })
        })
        pl.cc($["parameters"], ($) => {
            $.forEach(($) => {
                X_parameter($)
            })
        })
        pl.cc($["returnType"], ($) => {
            if (pl.isNotNull($)) {
                X_type($)
            } else {
                //FIXME??
            }
        })
    }
    function X_identifier(
        $: api.TGidentifier,
    ) {
        ((
            $: api.TNGidentifier$,
        ) => {
            if (pl.isNotUndefined($i.visitor["$identifier/*Identifier"])) { $i.visitor["$identifier/*Identifier"]($) }
        })($)
    }
    function X_identifierOrStringLiteral(
        $: api.TGidentifierOrStringLiteral,
    ) {
        switch ($[0]) {
            case "identifier": {
                pl.cc($[1], ($) => {
                    X_identifier($)
                })
                break
            }
            case "stringLiteral": {
                pl.cc($[1], ($) => {
                    X_stringLiteral($)
                })
                break
            }
            default: pl.au($[0])
        }
    }
    function X_modifier(
        $: api.TGmodifier,
    ) {
        switch ($[0]) {
            case "declare": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGmodifier_declare$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$modifier/?declare/*DeclareKeyword"])) { $i.visitor["$modifier/?declare/*DeclareKeyword"]($) }
                    })($)
                })
                break
            }
            case "export": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGmodifier_export$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$modifier/?export/*ExportKeyword"])) { $i.visitor["$modifier/?export/*ExportKeyword"]($) }
                    })($)
                })
                break
            }
            case "readonly": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGmodifier_readonly$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$modifier/?readonly/*ReadonlyKeyword"])) { $i.visitor["$modifier/?readonly/*ReadonlyKeyword"]($) }
                    })($)
                })
                break
            }
            default: pl.au($[0])
        }
    }
    function X_numericLiteral(
        $: api.TGnumericLiteral,
    ) {
        ((
            $: api.TNGnumericLiteral$,
        ) => {
            if (pl.isNotUndefined($i.visitor["$numericLiteral/*NumericLiteral"])) { $i.visitor["$numericLiteral/*NumericLiteral"]($) }
        })($)
    }
    function X_parameter(
        $: api.TGparameter,
    ) {
        ((
            $: api.TNGparameter$,
        ) => {
            if (pl.isNotUndefined($i.visitor["$parameter/*Parameter"])) { $i.visitor["$parameter/*Parameter"].begin($) }
            pl.cc($.content, ($) => {
                pl.cc($["name"], ($) => {
                    X_identifier($)
                })
                pl.cc($["questionToken"], ($) => {
                    if (pl.isNotNull($)) {
                        ((
                            $: api.TNGparameter$_questionToken$,
                        ) => {
                            if (pl.isNotUndefined($i.visitor["$parameter/*Parameter/.questionToken/*QuestionToken"])) { $i.visitor["$parameter/*Parameter/.questionToken/*QuestionToken"]($) }
                        })($)
                    } else {
                        //FIXME??
                    }
                })
                pl.cc($["type"], ($) => {
                    if (pl.isNotNull($)) {
                        X_type($)
                    } else {
                        //FIXME??
                    }
                })
            })
            if (pl.isNotUndefined($i.visitor["$parameter/*Parameter"])) { $i.visitor["$parameter/*Parameter"].end($) }
        })($)
    }
    function X_statement(
        $: api.TGstatement,
    ) {
        switch ($[0]) {
            case "block": {
                pl.cc($[1], ($) => {
                    X_block($)
                })
                break
            }
            case "break": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_break$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?break/*BreakStatement"])) { $i.visitor["$statement/?break/*BreakStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            if (pl.isNotNull($)) {
                                X_identifier($)
                            } else {
                                //FIXME??
                            }
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?break/*BreakStatement"])) { $i.visitor["$statement/?break/*BreakStatement"].end($) }
                    })($)
                })
                break
            }
            case "export": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_export$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?export/*ExportDeclaration"])) { $i.visitor["$statement/?export/*ExportDeclaration"].begin($) }
                        pl.cc($.content, ($) => {
                            X_stringLiteral($)
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?export/*ExportDeclaration"])) { $i.visitor["$statement/?export/*ExportDeclaration"].end($) }
                    })($)
                })
                break
            }
            case "expression": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_expression$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?expression/*ExpressionStatement"])) { $i.visitor["$statement/?expression/*ExpressionStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?expression/*ExpressionStatement"])) { $i.visitor["$statement/?expression/*ExpressionStatement"].end($) }
                    })($)
                })
                break
            }
            case "for": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_for$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?for/*ForStatement"])) { $i.visitor["$statement/?for/*ForStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["initializer"], ($) => {
                                X_variableDeclarationList($)
                            })
                            pl.cc($["condition"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["incrementer"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["block"], ($) => {
                                X_block($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?for/*ForStatement"])) { $i.visitor["$statement/?for/*ForStatement"].end($) }
                    })($)
                })
                break
            }
            case "function": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_function$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?function/*FunctionDeclaration"])) { $i.visitor["$statement/?function/*FunctionDeclaration"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["modifiers"], ($) => {
                                $.forEach(($) => {
                                    X_modifier($)
                                })
                            })
                            pl.cc($["name"], ($) => {
                                X_identifier($)
                            })
                            pl.cc($["definition"], ($) => {
                                X_functionDefinition($)
                            })
                            pl.cc($["block"], ($) => {
                                if (pl.isNotNull($)) {
                                    X_block($)
                                } else {
                                    //FIXME??
                                }
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?function/*FunctionDeclaration"])) { $i.visitor["$statement/?function/*FunctionDeclaration"].end($) }
                    })($)
                })
                break
            }
            case "if": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_if$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?if/*IfStatement"])) { $i.visitor["$statement/?if/*IfStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["expression"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["thenStatement"], ($) => {
                                X_statement($)
                            })
                            pl.cc($["elseStatement"], ($) => {
                                if (pl.isNotNull($)) {
                                    X_statement($)
                                } else {
                                    //FIXME??
                                }
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?if/*IfStatement"])) { $i.visitor["$statement/?if/*IfStatement"].end($) }
                    })($)
                })
                break
            }
            case "import": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_import$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?import/*ImportDeclaration"])) { $i.visitor["$statement/?import/*ImportDeclaration"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["clause"], ($) => {
                                ((
                                    $: api.TNGstatement_import$_clause$,
                                ) => {
                                    if (pl.isNotUndefined($i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause"])) { $i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause"].begin($) }
                                    pl.cc($.content, ($) => {
                                        switch ($[0]) {
                                            case "named": {
                                                pl.cc($[1], ($) => {
                                                    ((
                                                        $: api.TNGstatement_import$_clause$_named$,
                                                    ) => {
                                                        if (pl.isNotUndefined($i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"])) { $i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"].begin($) }
                                                        pl.cc($.content, ($) => {
                                                            $.forEach(($) => {
                                                                ((
                                                                    $: api.TNGstatement_import$_clause$_named$$,
                                                                ) => {
                                                                    if (pl.isNotUndefined($i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"])) { $i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"].begin($) }
                                                                    pl.cc($.content, ($) => {
                                                                        pl.cc($["name"], ($) => {
                                                                            X_identifier($)
                                                                        })
                                                                        pl.cc($["as"], ($) => {
                                                                            if (pl.isNotNull($)) {
                                                                                X_identifier($)
                                                                            } else {
                                                                                //FIXME??
                                                                            }
                                                                        })
                                                                    })
                                                                    if (pl.isNotUndefined($i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"])) { $i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"].end($) }
                                                                })($)
                                                            })
                                                        })
                                                        if (pl.isNotUndefined($i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"])) { $i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"].end($) }
                                                    })($)
                                                })
                                                break
                                            }
                                            case "namespace": {
                                                pl.cc($[1], ($) => {
                                                    ((
                                                        $: api.TNGstatement_import$_clause$_namespace$,
                                                    ) => {
                                                        if (pl.isNotUndefined($i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"])) { $i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"].begin($) }
                                                        pl.cc($.content, ($) => {
                                                            X_identifier($)
                                                        })
                                                        if (pl.isNotUndefined($i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"])) { $i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"].end($) }
                                                    })($)
                                                })
                                                break
                                            }
                                            default: pl.au($[0])
                                        }
                                    })
                                    if (pl.isNotUndefined($i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause"])) { $i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause"].end($) }
                                })($)
                            })
                            pl.cc($["file"], ($) => {
                                X_stringLiteral($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?import/*ImportDeclaration"])) { $i.visitor["$statement/?import/*ImportDeclaration"].end($) }
                    })($)
                })
                break
            }
            case "interface": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_interface$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?interface/*InterfaceDeclaration"])) { $i.visitor["$statement/?interface/*InterfaceDeclaration"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["modifiers"], ($) => {
                                $.forEach(($) => {
                                    X_modifier($)
                                })
                            })
                            pl.cc($["name"], ($) => {
                                X_identifier($)
                            })
                            pl.cc($["typeParameters"], ($) => {
                                $.forEach(($) => {
                                    X_typeParameter($)
                                })
                            })
                            pl.cc($["signature"], ($) => {
                                $.forEach(($) => {
                                    X_typeSignature($)
                                })
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?interface/*InterfaceDeclaration"])) { $i.visitor["$statement/?interface/*InterfaceDeclaration"].end($) }
                    })($)
                })
                break
            }
            case "labeled": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_labeled$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?labeled/*LabeledStatement"])) { $i.visitor["$statement/?labeled/*LabeledStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["label"], ($) => {
                                X_identifier($)
                            })
                            pl.cc($["statement"], ($) => {
                                X_statement($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?labeled/*LabeledStatement"])) { $i.visitor["$statement/?labeled/*LabeledStatement"].end($) }
                    })($)
                })
                break
            }
            case "return": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_return$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?return/*ReturnStatement"])) { $i.visitor["$statement/?return/*ReturnStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            if (pl.isNotNull($)) {
                                X_expression($)
                            } else {
                                //FIXME??
                            }
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?return/*ReturnStatement"])) { $i.visitor["$statement/?return/*ReturnStatement"].end($) }
                    })($)
                })
                break
            }
            case "switch": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_switch$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?switch/*SwitchStatement"])) { $i.visitor["$statement/?switch/*SwitchStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["expression"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["caseBlock"], ($) => {
                                ((
                                    $: api.TNGstatement_switch$_caseBlock$,
                                ) => {
                                    if (pl.isNotUndefined($i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock"])) { $i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock"].begin($) }
                                    pl.cc($.content, ($) => {
                                        $.forEach(($) => {
                                            switch ($[0]) {
                                                case "case": {
                                                    pl.cc($[1], ($) => {
                                                        ((
                                                            $: api.TNGstatement_switch$_caseBlock$_case$,
                                                        ) => {
                                                            if (pl.isNotUndefined($i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause"])) { $i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause"].begin($) }
                                                            pl.cc($.content, ($) => {
                                                                pl.cc($["case"], ($) => {
                                                                    X_expression($)
                                                                })
                                                                pl.cc($["statements"], ($) => {
                                                                    $.forEach(($) => {
                                                                        X_statement($)
                                                                    })
                                                                })
                                                            })
                                                            if (pl.isNotUndefined($i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause"])) { $i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause"].end($) }
                                                        })($)
                                                    })
                                                    break
                                                }
                                                case "default": {
                                                    pl.cc($[1], ($) => {
                                                        ((
                                                            $: api.TNGstatement_switch$_caseBlock$_default$,
                                                        ) => {
                                                            if (pl.isNotUndefined($i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause"])) { $i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause"].begin($) }
                                                            pl.cc($.content, ($) => {
                                                                $.forEach(($) => {
                                                                    X_statement($)
                                                                })
                                                            })
                                                            if (pl.isNotUndefined($i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause"])) { $i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause"].end($) }
                                                        })($)
                                                    })
                                                    break
                                                }
                                                default: pl.au($[0])
                                            }
                                        })
                                    })
                                    if (pl.isNotUndefined($i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock"])) { $i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock"].end($) }
                                })($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?switch/*SwitchStatement"])) { $i.visitor["$statement/?switch/*SwitchStatement"].end($) }
                    })($)
                })
                break
            }
            case "throw": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_throw$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?throw/*ThrowStatement"])) { $i.visitor["$statement/?throw/*ThrowStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?throw/*ThrowStatement"])) { $i.visitor["$statement/?throw/*ThrowStatement"].end($) }
                    })($)
                })
                break
            }
            case "try": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_try$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?try/*TryStatement"])) { $i.visitor["$statement/?try/*TryStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["block"], ($) => {
                                X_block($)
                            })
                            pl.cc($["catchClause"], ($) => {
                                ((
                                    $: api.TNGstatement_try$_catchClause$,
                                ) => {
                                    if (pl.isNotUndefined($i.visitor["$statement/?try/*TryStatement/.catchClause/*CatchClause"])) { $i.visitor["$statement/?try/*TryStatement/.catchClause/*CatchClause"].begin($) }
                                    pl.cc($.content, ($) => {
                                        pl.cc($["variable"], ($) => {
                                            X_variableDeclaration($)
                                        })
                                        pl.cc($["block"], ($) => {
                                            X_block($)
                                        })
                                    })
                                    if (pl.isNotUndefined($i.visitor["$statement/?try/*TryStatement/.catchClause/*CatchClause"])) { $i.visitor["$statement/?try/*TryStatement/.catchClause/*CatchClause"].end($) }
                                })($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?try/*TryStatement"])) { $i.visitor["$statement/?try/*TryStatement"].end($) }
                    })($)
                })
                break
            }
            case "typeAlias": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_typeAlias$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?typeAlias/*TypeAliasDeclaration"])) { $i.visitor["$statement/?typeAlias/*TypeAliasDeclaration"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["modifiers"], ($) => {
                                $.forEach(($) => {
                                    X_modifier($)
                                })
                            })
                            pl.cc($["name"], ($) => {
                                X_identifier($)
                            })
                            pl.cc($["typeParameters"], ($) => {
                                $.forEach(($) => {
                                    X_typeParameter($)
                                })
                            })
                            pl.cc($["type"], ($) => {
                                X_type($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?typeAlias/*TypeAliasDeclaration"])) { $i.visitor["$statement/?typeAlias/*TypeAliasDeclaration"].end($) }
                    })($)
                })
                break
            }
            case "variable": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_variable$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?variable/*VariableStatement"])) { $i.visitor["$statement/?variable/*VariableStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["modifiers"], ($) => {
                                $.forEach(($) => {
                                    X_modifier($)
                                })
                            })
                            pl.cc($["variableDeclarationList"], ($) => {
                                X_variableDeclarationList($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?variable/*VariableStatement"])) { $i.visitor["$statement/?variable/*VariableStatement"].end($) }
                    })($)
                })
                break
            }
            case "while": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_while$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?while/*WhileStatement"])) { $i.visitor["$statement/?while/*WhileStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["condition"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["block"], ($) => {
                                X_block($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?while/*WhileStatement"])) { $i.visitor["$statement/?while/*WhileStatement"].end($) }
                    })($)
                })
                break
            }
            default: pl.au($[0])
        }
    }
    function X_stringLiteral(
        $: api.TGstringLiteral,
    ) {
        ((
            $: api.TNGstringLiteral$,
        ) => {
            if (pl.isNotUndefined($i.visitor["$stringLiteral/*StringLiteral"])) { $i.visitor["$stringLiteral/*StringLiteral"]($) }
        })($)
    }
    function X_type(
        $: api.TGtype,
    ) {
        switch ($[0]) {
            case "any": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_any$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?any/*AnyKeyword"])) { $i.visitor["$type/?any/*AnyKeyword"]($) }
                    })($)
                })
                break
            }
            case "array": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_array$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?array/*ArrayType"])) { $i.visitor["$type/?array/*ArrayType"].begin($) }
                        pl.cc($.content, ($) => {
                            X_type($)
                        })
                        if (pl.isNotUndefined($i.visitor["$type/?array/*ArrayType"])) { $i.visitor["$type/?array/*ArrayType"].end($) }
                    })($)
                })
                break
            }
            case "boolean": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_boolean$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?boolean/*BooleanKeyword"])) { $i.visitor["$type/?boolean/*BooleanKeyword"]($) }
                    })($)
                })
                break
            }
            case "function": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_function$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?function/*FunctionType"])) { $i.visitor["$type/?function/*FunctionType"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    X_parameter($)
                                })
                            })
                            pl.cc($["returnType"], ($) => {
                                if (pl.isNotNull($)) {
                                    X_type($)
                                } else {
                                    //FIXME??
                                }
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$type/?function/*FunctionType"])) { $i.visitor["$type/?function/*FunctionType"].end($) }
                    })($)
                })
                break
            }
            case "literal": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_literal$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?literal/*LiteralType"])) { $i.visitor["$type/?literal/*LiteralType"].begin($) }
                        pl.cc($.content, ($) => {
                            switch ($[0]) {
                                case "null": {
                                    pl.cc($[1], ($) => {
                                        ((
                                            $: api.TNGtype_literal$_null$,
                                        ) => {
                                            if (pl.isNotUndefined($i.visitor["$type/?literal/*LiteralType/?null/*NullKeyword"])) { $i.visitor["$type/?literal/*LiteralType/?null/*NullKeyword"]($) }
                                        })($)
                                    })
                                    break
                                }
                                case "string": {
                                    pl.cc($[1], ($) => {
                                        X_stringLiteral($)
                                    })
                                    break
                                }
                                default: pl.au($[0])
                            }
                        })
                        if (pl.isNotUndefined($i.visitor["$type/?literal/*LiteralType"])) { $i.visitor["$type/?literal/*LiteralType"].end($) }
                    })($)
                })
                break
            }
            case "never": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_never$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?never/*NeverKeyword"])) { $i.visitor["$type/?never/*NeverKeyword"]($) }
                    })($)
                })
                break
            }
            case "number": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_number$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?number/*NumberKeyword"])) { $i.visitor["$type/?number/*NumberKeyword"]($) }
                    })($)
                })
                break
            }
            case "optional": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_optional$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?optional/*OptionalType"])) { $i.visitor["$type/?optional/*OptionalType"].begin($) }
                        pl.cc($.content, ($) => {
                            X_type($)
                        })
                        if (pl.isNotUndefined($i.visitor["$type/?optional/*OptionalType"])) { $i.visitor["$type/?optional/*OptionalType"].end($) }
                    })($)
                })
                break
            }
            case "parenthesized": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_parenthesized$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?parenthesized/*ParenthesizedType"])) { $i.visitor["$type/?parenthesized/*ParenthesizedType"].begin($) }
                        pl.cc($.content, ($) => {
                            X_type($)
                        })
                        if (pl.isNotUndefined($i.visitor["$type/?parenthesized/*ParenthesizedType"])) { $i.visitor["$type/?parenthesized/*ParenthesizedType"].end($) }
                    })($)
                })
                break
            }
            case "string": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_string$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?string/*StringKeyword"])) { $i.visitor["$type/?string/*StringKeyword"]($) }
                    })($)
                })
                break
            }
            case "tuple": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_tuple$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?tuple/*TupleType"])) { $i.visitor["$type/?tuple/*TupleType"].begin($) }
                        pl.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_type($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$type/?tuple/*TupleType"])) { $i.visitor["$type/?tuple/*TupleType"].end($) }
                    })($)
                })
                break
            }
            case "typeLiteral": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_typeLiteral$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?typeLiteral/*TypeLiteral"])) { $i.visitor["$type/?typeLiteral/*TypeLiteral"].begin($) }
                        pl.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_typeSignature($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$type/?typeLiteral/*TypeLiteral"])) { $i.visitor["$type/?typeLiteral/*TypeLiteral"].end($) }
                    })($)
                })
                break
            }
            case "typeReference": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_typeReference$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?typeReference/*TypeReference"])) { $i.visitor["$type/?typeReference/*TypeReference"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["x"], ($) => {
                                switch ($[0]) {
                                    case "identifier": {
                                        pl.cc($[1], ($) => {
                                            X_identifier($)
                                        })
                                        break
                                    }
                                    case "qualifiedName": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGtype_typeReference$_x_qualifiedName$,
                                            ) => {
                                                if (pl.isNotUndefined($i.visitor["$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName"])) { $i.visitor["$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName"].begin($) }
                                                pl.cc($.content, ($) => {
                                                    pl.cc($["context"], ($) => {
                                                        X_identifier($)
                                                    })
                                                    pl.cc($["type"], ($) => {
                                                        X_identifier($)
                                                    })
                                                })
                                                if (pl.isNotUndefined($i.visitor["$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName"])) { $i.visitor["$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName"].end($) }
                                            })($)
                                        })
                                        break
                                    }
                                    default: pl.au($[0])
                                }
                            })
                            pl.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    X_type($)
                                })
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$type/?typeReference/*TypeReference"])) { $i.visitor["$type/?typeReference/*TypeReference"].end($) }
                    })($)
                })
                break
            }
            case "undefined": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_undefined$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?undefined/*UndefinedKeyword"])) { $i.visitor["$type/?undefined/*UndefinedKeyword"]($) }
                    })($)
                })
                break
            }
            case "union": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_union$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?union/*UnionType"])) { $i.visitor["$type/?union/*UnionType"].begin($) }
                        pl.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_type($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$type/?union/*UnionType"])) { $i.visitor["$type/?union/*UnionType"].end($) }
                    })($)
                })
                break
            }
            case "void": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_void$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?void/*VoidKeyword"])) { $i.visitor["$type/?void/*VoidKeyword"]($) }
                    })($)
                })
                break
            }
            default: pl.au($[0])
        }
    }
    function X_typeParameter(
        $: api.TGtypeParameter,
    ) {
        ((
            $: api.TNGtypeParameter$,
        ) => {
            if (pl.isNotUndefined($i.visitor["$typeParameter/*TypeParameter"])) { $i.visitor["$typeParameter/*TypeParameter"].begin($) }
            pl.cc($.content, ($) => {
                X_identifier($)
            })
            if (pl.isNotUndefined($i.visitor["$typeParameter/*TypeParameter"])) { $i.visitor["$typeParameter/*TypeParameter"].end($) }
        })($)
    }
    function X_typeSignature(
        $: api.TGtypeSignature,
    ) {
        switch ($[0]) {
            case "construct": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtypeSignature_construct$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$typeSignature/?construct/*ConstructSignature"])) { $i.visitor["$typeSignature/?construct/*ConstructSignature"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    X_parameter($)
                                })
                            })
                            pl.cc($["returnType"], ($) => {
                                X_type($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$typeSignature/?construct/*ConstructSignature"])) { $i.visitor["$typeSignature/?construct/*ConstructSignature"].end($) }
                    })($)
                })
                break
            }
            case "index": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtypeSignature_index$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$typeSignature/?index/*IndexSignature"])) { $i.visitor["$typeSignature/?index/*IndexSignature"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["modifiers"], ($) => {
                                $.forEach(($) => {
                                    X_modifier($)
                                })
                            })
                            pl.cc($["parameter"], ($) => {
                                X_parameter($)
                            })
                            pl.cc($["type"], ($) => {
                                if (pl.isNotNull($)) {
                                    X_type($)
                                } else {
                                    //FIXME??
                                }
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$typeSignature/?index/*IndexSignature"])) { $i.visitor["$typeSignature/?index/*IndexSignature"].end($) }
                    })($)
                })
                break
            }
            case "method": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtypeSignature_method$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$typeSignature/?method/*MethodSignature"])) { $i.visitor["$typeSignature/?method/*MethodSignature"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["name"], ($) => {
                                X_identifier($)
                            })
                            pl.cc($["definition"], ($) => {
                                X_functionDefinition($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$typeSignature/?method/*MethodSignature"])) { $i.visitor["$typeSignature/?method/*MethodSignature"].end($) }
                    })($)
                })
                break
            }
            case "property": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtypeSignature_property$,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$typeSignature/?property/*PropertySignature"])) { $i.visitor["$typeSignature/?property/*PropertySignature"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["modifiers"], ($) => {
                                $.forEach(($) => {
                                    X_modifier($)
                                })
                            })
                            pl.cc($["name"], ($) => {
                                X_identifierOrStringLiteral($)
                            })
                            pl.cc($["quesionToken"], ($) => {
                                if (pl.isNotNull($)) {
                                    ((
                                        $: api.TNGtypeSignature_property$_quesionToken$,
                                    ) => {
                                        if (pl.isNotUndefined($i.visitor["$typeSignature/?property/*PropertySignature/.quesionToken/*QuestionToken"])) { $i.visitor["$typeSignature/?property/*PropertySignature/.quesionToken/*QuestionToken"]($) }
                                    })($)
                                } else {
                                    //FIXME??
                                }
                            })
                            pl.cc($["type"], ($) => {
                                if (pl.isNotNull($)) {
                                    X_type($)
                                } else {
                                    //FIXME??
                                }
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$typeSignature/?property/*PropertySignature"])) { $i.visitor["$typeSignature/?property/*PropertySignature"].end($) }
                    })($)
                })
                break
            }
            default: pl.au($[0])
        }
    }
    function X_variableDeclaration(
        $: api.TGvariableDeclaration,
    ) {
        ((
            $: api.TNGvariableDeclaration$,
        ) => {
            if (pl.isNotUndefined($i.visitor["$variableDeclaration/*VariableDeclaration"])) { $i.visitor["$variableDeclaration/*VariableDeclaration"].begin($) }
            pl.cc($.content, ($) => {
                pl.cc($["name"], ($) => {
                    X_identifier($)
                })
                pl.cc($["type"], ($) => {
                    if (pl.isNotNull($)) {
                        X_type($)
                    } else {
                        //FIXME??
                    }
                })
                pl.cc($["expression"], ($) => {
                    if (pl.isNotNull($)) {
                        X_expression($)
                    } else {
                        //FIXME??
                    }
                })
            })
            if (pl.isNotUndefined($i.visitor["$variableDeclaration/*VariableDeclaration"])) { $i.visitor["$variableDeclaration/*VariableDeclaration"].end($) }
        })($)
    }
    function X_variableDeclarationList(
        $: api.TGvariableDeclarationList,
    ) {
        ((
            $: api.TNGvariableDeclarationList$,
        ) => {
            if (pl.isNotUndefined($i.visitor["$variableDeclarationList/*VariableDeclarationList"])) { $i.visitor["$variableDeclarationList/*VariableDeclarationList"].begin($) }
            pl.cc($.content, ($) => {
                $.forEach(($) => {
                    X_variableDeclaration($)
                })
            })
            if (pl.isNotUndefined($i.visitor["$variableDeclarationList/*VariableDeclarationList"])) { $i.visitor["$variableDeclarationList/*VariableDeclarationList"].end($) }
        })($)
    }
    ((
        $: api.TNroot,
    ) => {
        if (pl.isNotUndefined($i.visitor[""])) { $i.visitor[""].begin($) }
        pl.cc($.content, ($) => {
            pl.cc($["statements"], ($) => {
                $.forEach(($) => {
                    X_statement($)
                })
            })
            pl.cc($["endOfFile"], ($) => {
                ((
                    $: api.TNroot_endOfFile$,
                ) => {
                    if (pl.isNotUndefined($i.visitor["/.endOfFile/*EndOfFileToken"])) { $i.visitor["/.endOfFile/*EndOfFileToken"]($) }
                })($)
            })
        })
        if (pl.isNotUndefined($i.visitor[""])) { $i.visitor[""].end($) }
    })($)
}