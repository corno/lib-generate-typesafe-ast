
import * as pl from "pareto-core-lib"
import * as p2 from "pareto-core-tostring"
import * as pm from "pareto-core-state"
import * as pr from "pareto-core-resolve"

import * as wapi from "lib-fountain-pen"

import * as api from "../../interface"

import { XGenerateImplementationFile } from "./GenerateFile"

export const generateParse: XGenerateImplementationFile = ($, $i, $d) => {
    const grammar = $.grammar
    function findNextPossibleTokensInSymbolType(
        $: api.TValueType,
        onToken: (token: string) => void,
        onEnd: () => void,
    ) {
        switch ($[0]) {
            case "choice":
                pl.cc($[1], ($) => {
                    $.options.forEach((a, b) => false, ($, key) => {
                        findNextPossibleTokensInSymbolType(
                            $.type,
                            onToken,
                            onEnd
                        )
                    })
                })
                break
            case "reference":
                pl.cc($[1], ($) => {
                    pr.getEntry(
                        grammar.globalValueTypes,
                        $.name,
                        (x) => {
                            findNextPossibleTokensInSymbolType(
                                x,
                                onToken,
                                onEnd,
                            )
                        },
                        () => {
                            pl.panic(`no such value type: '${$.name}'`)
                        }
                    )
                })
                break
            case "sequence":
                pl.cc($[1], ($) => {
                    const elementsStack = pm.createStack($.elements)
                    function doNextElement() {
                        elementsStack.pop(
                            ($) => {

                                findNextPossibleTokensInSymbolType(
                                    $.value.type,
                                    onToken,
                                    () => {
                                        doNextElement()
                                    },
                                )
                            },
                            () => {
                                onEnd()

                            }
                        )
                    }
                    doNextElement()
                })
                break
            case "node":
                pl.cc($[1], ($) => {
                    onToken($.name)
                })
                break
            default:
                pl.au($[0])
        }
    }
    pl.cc($i.block, ($w) => {
        $w.line({}, ($w) => {
            $w.snippet(`import * as pl from "pareto-core-lib"`)
        })
        $w.line({}, ($w) => {
            $w.snippet(`import * as pm from "pareto-core-state"`)
        })
        $w.line({}, ($w) => {
            $w.snippet(`import * as uast from "api-untyped-ast"`)
        })

        $w.line({}, ($w) => {
            $w.snippet(`import * as api from "${$.pathToInterface}"`)
        })

        $w.line({}, ($w) => { })

        $w.line({}, ($w) => {
            $w.snippet(`export function parse(`)
            $w.indent({}, ($w) => {
                $w.line({}, ($w) => {
                    $w.snippet(`$: uast.TUntypedNode,`)
                })

                $w.line({}, ($w) => {
                    $w.snippet(`$i: {`)
                    $w.indent({}, ($w) => {
                        $w.line({}, ($w) => {
                            $w.snippet(`callback: ($: api.TRoot) => void,`)
                        })
                        $w.line({}, ($w) => {
                            $w.snippet(`reportUnexpectedToken: ($: { path: string, token: uast.TUntypedNode, expected: null | string }) => void,`)
                        })
                        $w.line({}, ($w) => {
                            $w.snippet(`reportMissingToken: ($: { parentDetails: uast.TDetails, path: string, kindNameOptions: string, }) => void,`)
                        })
                    })
                    $w.snippet(`},`)
                })
                $w.line({}, ($w) => {
                    $w.snippet(`$d: {`)
                    $w.indent({}, ($w) => {
                        $w.line({}, ($w) => {
                            $w.snippet(`doUntil: <T>(stack: pm.Stack<T>, callback: ($: T) => boolean) => void,`)
                        })
                        $w.line({}, ($w) => {
                            $w.snippet(`lookAhead: <T>(stack: pm.Stack<T>, exists: ($: T) => void, notExists: () => void) => void,`)
                        })
                        $w.line({}, ($w) => {
                            $w.snippet(`stringsAreEqual: (a: string, b: string) => boolean,`)
                        })
                    })
                    $w.snippet(`},`)
                })
            })
            $w.snippet(`): void {`)
            $w.indent({}, ($w) => {

                $w.line({}, ($w) => {
                    $w.snippet(`const $x = $i`)
                })
                function generateNode(
                    $: api.TNode2,
                    path: string,
                    $w: wapi.IBlock,
                    call: ($w: wapi.ILine) => void
                ) {

                    $w.line({}, ($w) => {

                        $w.snippet(`((`)
                        $w.indent({}, ($w) => {
                            $w.line({}, ($w) => {
                                $w.snippet(`$: uast.TUntypedNode,`)
                            })
                            $w.line({}, ($w) => {
                                $w.snippet(`callback: ($: api.TN${path}) => void,`)
                            })
                        })
                        $w.snippet(`): void => {`)
                        $w.indent({}, ($w) => {
                            $w.line({}, ($w) => {
                                $w.snippet(`const node = $`)
                            })
                            $w.line({}, ($w) => {
                                $w.snippet(`const children = pm.createStack($.children)`)
                            })
                            switch ($.type[0]) {
                                case "composite":
                                    pl.cc($.type[1], ($) => {
                                        generateValue(
                                            $,
                                            path,
                                            $w,
                                            ($w) => {
                                                $w.line({}, ($w) => {
                                                    $w.snippet(`callback({`)
                                                    $w.indent({}, ($w) => {
                                                        $w.line({}, ($w) => {
                                                            $w.snippet(`tokenDetails: node.details,`)
                                                        })
                                                        $w.line({}, ($w) => {
                                                            $w.snippet(`content: $,`)
                                                        })
                                                    })
                                                    $w.snippet(`})`)
                                                })
                                            }
                                        )
                                    })
                                    break
                                case "leaf":
                                    pl.cc($.type[1], ($) => {
                                        $w.line({}, ($w) => {
                                            $w.snippet(`callback(`)
                                            if ($.hasTextContent) {
                                                $w.snippet(`{`)
                                                $w.indent({}, ($w) => {
                                                    $w.line({}, ($w) => {
                                                        $w.snippet(`tokenDetails: $.details,`)
                                                    })
                                                    $w.line({}, ($w) => {
                                                        $w.snippet(`value: $.value`)
                                                    })
                                                })
                                                $w.snippet(`}`)
                                            } else {
                                                $w.snippet(`$.details`)
                                            }
                                            $w.snippet(`)`)
                                        })
                                    })
                                    break
                                default:
                                    pl.au($.type[0])
                            }

                            $w.line({}, ($w) => {
                                $w.snippet(`children.pop(`)
                                $w.indent({}, ($w) => {
                                    $w.line({}, ($w) => {
                                        $w.snippet(`(nextChild) => {`)
                                        $w.indent({}, ($w) => {
                                            $w.line({}, ($w) => {
                                                $w.snippet(`$x.reportUnexpectedToken({`)
                                                $w.indent({}, ($w) => {
                                                    $w.line({}, ($w) => {
                                                        $w.snippet(`path: "${path}",`)
                                                    })
                                                    $w.line({}, ($w) => {
                                                        $w.snippet(`token: nextChild,`)
                                                    })
                                                    $w.line({}, ($w) => {
                                                        $w.snippet(`expected: null,`)
                                                    })
                                                })
                                                $w.snippet(`})`)
                                            })
                                        })
                                        $w.snippet(`},`)
                                    })
                                    $w.line({}, ($w) => {
                                        $w.snippet(`() => {`)
                                        $w.indent({}, ($w) => {
                                        })
                                        $w.snippet(`},`)
                                    })
                                })
                                $w.snippet(`)`)
                            })
                        })
                        $w.snippet(`})`)
                        call($w)
                    })

                }
                function generateValue(
                    $: api.TValue,
                    path: string,
                    $w: wapi.IBlock,
                    endCallback: (
                        $w: wapi.IBlock,
                    ) => void,
                ) {
                    const symbol = $
                    if (pl.isNotUndefined($.cardinality)) {
                        switch ($.cardinality[0]) {
                            case "array":
                                pl.cc($.cardinality[1], ($) => {
                                    $w.line({}, ($w) => {
                                        $w.snippet(`const elements = pm.createArrayBuilder<api.TVT${path}>()`)
                                    })
                                    $w.line({}, ($w) => {
                                        $w.snippet(`const processElement = () => {`)
                                        $w.indent({}, ($w) => {
                                            generateValueType(
                                                symbol.type,
                                                path,
                                                $w,
                                                ($w) => {
                                                    $w.line({}, ($w) => {
                                                        $w.snippet(`elements.push($)`)
                                                    })
                                                },
                                            )
                                        })
                                        $w.snippet(`}`)
                                    })
                                    $w.line({}, ($w) => {
                                        $w.snippet(`$d.doUntil(`)
                                        $w.indent({}, ($w) => {
                                            $w.line({}, ($w) => {
                                                $w.snippet(`children,`)
                                            })
                                            $w.line({}, ($w) => {
                                                $w.snippet(`(nextChild) => {`)
                                                $w.indent({}, ($w) => {
                                                    $w.line({}, ($w) => {
                                                        $w.snippet(`switch (nextChild.kindName) {`)
                                                        $w.indent({}, ($w) => {

                                                            const possibleTokens = pm.createDictionaryBuilder<null>(
                                                                ["ignore", {}],
                                                                () => {

                                                                }
                                                            )
                                                            findNextPossibleTokensInSymbolType(
                                                                symbol.type,
                                                                ($) => {
                                                                    possibleTokens.add($, null)
                                                                },
                                                                () => {
                                                                    pl.panic("IMPLEMENT ME 4")
                                                                }
                                                            )
                                                            $d.sortedForEach(
                                                                possibleTokens.getDictionary(),
                                                                ($, key) => {
                                                                    $w.line({}, ($w) => {
                                                                        $w.snippet(`case "${key}":`)
                                                                        $w.indent({}, ($w) => {
                                                                            $w.line({}, ($w) => {
                                                                                $w.snippet(`processElement()`)
                                                                            })
                                                                            $w.line({}, ($w) => {
                                                                                $w.snippet(`return true`)
                                                                            })
                                                                        })
                                                                    })
                                                                })

                                                            $w.line({}, ($w) => {
                                                                $w.snippet(`default: return false`)
                                                            })
                                                        })
                                                        $w.snippet(`}`)
                                                    })
                                                })
                                                $w.snippet(`},`)
                                            })
                                        })
                                        $w.snippet(`)`)
                                    })
                                    $w.line({}, ($w) => {
                                        $w.snippet(`pl.cc(elements.getArray(), ($) => {`)
                                        $w.indent({}, ($w) => {
                                            endCallback($w)
                                        })
                                        $w.snippet(`})`)
                                    })
                                })
                                break
                            case "one":
                                pl.cc($.cardinality[1], ($) => {
                                    generateValueType(
                                        symbol.type,
                                        path,
                                        $w,
                                        endCallback,
                                    )
                                })
                                break
                            case "optional":
                                pl.cc($.cardinality[1], ($) => {
                                    $w.line({}, ($w) => {
                                        $w.snippet(`let optional: null | api.TVT${path} = null`)
                                    })
                                    $w.line({}, ($w) => {
                                        $w.snippet(`const setOptional = () => {`)
                                        $w.indent({}, ($w) => {
                                            generateValueType(
                                                symbol.type,
                                                path,
                                                $w,
                                                ($w) => {
                                                    $w.line({}, ($w) => {
                                                        $w.snippet(`optional = $`)
                                                    })
                                                },
                                            )
                                        })
                                        $w.snippet(`}`)
                                    })

                                    $w.line({}, ($w) => {
                                        $w.snippet(`$d.lookAhead(children, `)
                                        $w.indent({}, ($w) => {
                                            $w.line({}, ($w) => {
                                                $w.snippet(`(nextChild) => {`)
                                                $w.indent({}, ($w) => {
                                                    $w.line({}, ($w) => {
                                                        $w.snippet(`switch (nextChild.kindName) {`)
                                                        $w.indent({}, ($w) => {

                                                            const possibleTokens = pm.createDictionaryBuilder<null>(
                                                                ["ignore", {}],
                                                                () => {

                                                                }
                                                            )
                                                            findNextPossibleTokensInSymbolType(
                                                                symbol.type,
                                                                ($) => {
                                                                    possibleTokens.add($, null)
                                                                },
                                                                () => {
                                                                    pl.panic("IMPLEMENT ME 5")
                                                                }
                                                            )
                                                            $d.sortedForEach(possibleTokens.getDictionary(), ($, key) => {
                                                                $w.line({}, ($w) => {
                                                                    $w.snippet(`case "${key}":`)
                                                                    $w.indent({}, ($w) => {
                                                                        $w.line({}, ($w) => {
                                                                            $w.snippet(`setOptional()`)
                                                                        })
                                                                        $w.line({}, ($w) => {
                                                                            $w.snippet(`break`)
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                        $w.snippet(`}`)
                                                    })
                                                })
                                                $w.snippet(`},`)
                                            })
                                            $w.line({}, ($w) => {
                                                $w.snippet(`() => {`)
                                                $w.indent({}, ($w) => {
                                                })
                                                $w.snippet(`},`)
                                            })
                                        })
                                        $w.snippet(`)`)
                                    })
                                    $w.line({}, ($w) => {
                                        $w.snippet(`pl.cc(optional, ($) => {`)
                                        $w.indent({}, ($w) => {
                                            endCallback($w)
                                        })
                                        $w.snippet(`})`)
                                    })
                                })
                                break
                            default:
                                pl.au($.cardinality[0])
                        }
                    } else {
                        generateValueType(
                            symbol.type,
                            path,
                            $w,
                            endCallback,
                        )
                    }
                }
                function generateValueType(
                    $: api.TValueType,
                    path: string,
                    $w: wapi.IBlock,
                    endCallback: (
                        $w: wapi.IBlock,
                    ) => void,
                ) {
                    switch ($[0]) {
                        case "choice":
                            pl.cc($[1], ($) => {
                                const possibleTokens = pm.createDictionaryBuilder<string>(
                                    ["ignore", {}],
                                    () => {
                                        pl.panic("tokens are not unique")
                                    }
                                )
                                $.options.forEach((a, b) => $d.isYinBeforeYang({ yin: b, yang: a }), ($, key) => {
                                    const option = $
                                    findNextPossibleTokensInSymbolType(
                                        option.type,
                                        ($) => {
                                            possibleTokens.add($, key)
                                        },
                                        () => {
                                            pl.panic("IMPLEMENT ME 1")
                                        }
                                    )
                                })
                                $w.line({}, ($w) => {
                                    $w.snippet(`const choiceEnd_${path} = ($: api.TVT${path}) => {`)
                                    $w.indent({}, ($w) => {
                                        endCallback(
                                            $w,
                                        )
                                    })
                                    $w.snippet(`}`)
                                })

                                $w.line({}, ($w) => {
                                    $w.snippet(`$d.lookAhead(children, `)
                                    $w.indent({}, ($w) => {
                                        $w.line({}, ($w) => {
                                            $w.snippet(`(nextChild) => {`)
                                            $w.indent({}, ($w) => {
                                                $.options.forEach((a, b) => $d.isYinBeforeYang({ yin: b, yang: a }), ($, key) => {
                                                    const option = $
                                                    $w.line({}, ($w) => {
                                                        $w.snippet(`const choose_${key} = () => {`)
                                                        $w.indent({}, ($w) => {

                                                            generateValue(
                                                                option,
                                                                `${path}_${key}`,
                                                                $w,
                                                                ($w) => {
                                                                    $w.line({}, ($w) => {
                                                                        $w.snippet(`choiceEnd_${path}(["${key}", $])`)
                                                                    })
                                                                }
                                                            )
                                                        })
                                                        $w.snippet(`}`)
                                                    })
                                                })
                                                $w.line({}, ($w) => {
                                                    $w.snippet(`switch (nextChild.kindName) {`)
                                                    $w.indent({}, ($w) => {
                                                        const possibleTokens = pm.createDictionaryBuilder<string>(
                                                            ["ignore", {}],
                                                            () => {
                                                                pl.panic("unexpected: duplicate key")
                                                            }
                                                        )
                                                        $.options.forEach((a, b) => $d.isYinBeforeYang({ yin: b, yang: a }), ($, key) => {
                                                            const option = $
                                                            findNextPossibleTokensInSymbolType(
                                                                option.type,
                                                                ($) => {
                                                                    possibleTokens.add($, key)
                                                                },
                                                                () => {
                                                                    pl.panic("IMPLEMENT ME 2")
                                                                }
                                                            )
                                                        })
                                                        possibleTokens.getDictionary().forEach((a, b) => $d.isYinBeforeYang({ yin: b, yang: a }), (optionKey, key) => {
                                                            $w.line({}, ($w) => {
                                                                $w.snippet(`case "${key}": /*Y*/ {`)
                                                                $w.indent({}, ($w) => {
                                                                    $w.line({}, ($w) => {
                                                                        $w.snippet(`choose_${optionKey}()`)
                                                                    })
                                                                    $w.line({}, ($w) => {
                                                                        $w.snippet(`break`)
                                                                    })
                                                                })
                                                                $w.snippet(`}`)
                                                            })
                                                        })
                                                        $w.line({}, ($w) => {
                                                            $w.snippet(`default: {`)
                                                            $w.indent({}, ($w) => {
                                                                $w.line({}, ($w) => {
                                                                    $w.snippet(`$x.reportUnexpectedToken({`)
                                                                    $w.indent({}, ($w) => {
                                                                        $w.line({}, ($w) => {
                                                                            $w.snippet(`path: "${path}",`)
                                                                        })
                                                                        $w.line({}, ($w) => {
                                                                            $w.snippet(`token: nextChild,`)
                                                                        })
                                                                        $w.line({}, ($w) => {
                                                                            $w.snippet(`expected: "${p2.getKeysAsString(possibleTokens.getDictionary())}",`)
                                                                        })
                                                                    })
                                                                    $w.snippet(`})`)
                                                                })
                                                            })
                                                            $w.snippet(`}`)

                                                        })
                                                    })
                                                    $w.snippet(`}`)
                                                })
                                            })
                                            $w.snippet(`},`)
                                        })
                                        $w.line({}, ($w) => {
                                            $w.snippet(`() => { // no child`)
                                            $w.indent({}, ($w) => {
                                                $w.line({}, ($w) => {
                                                    $w.snippet(`$x.reportMissingToken({`)
                                                    $w.indent({}, ($w) => {
                                                        $w.line({}, ($w) => {
                                                            $w.snippet(`parentDetails: node.details,`)
                                                        })
                                                        $w.line({}, ($w) => {
                                                            $w.snippet(`path: "${path}",`)
                                                        })
                                                        $w.line({}, ($w) => {
                                                            $w.snippet(`kindNameOptions: "${p2.getKeysAsString(possibleTokens.getDictionary())}",`)
                                                        })
                                                    })
                                                    $w.snippet(`})`)
                                                })
                                            })
                                            $w.snippet(`},`)
                                        })
                                    })
                                    $w.snippet(`)`)
                                })
                            })
                            break
                        case "reference":
                            pl.cc($[1], ($) => {
                                $w.line({}, ($w) => {
                                    $w.snippet(`G${$.name}(node, children, ($) => {`)
                                    $w.indent({}, ($w) => {
                                        endCallback(
                                            $w,
                                        )
                                    })
                                    $w.snippet(`})`)
                                })
                            })
                            break
                        case "sequence":
                            pl.cc($[1], ($) => {
                                $w.line({}, ($w) => {
                                    $w.snippet(`const sequenceEnd = ($: api.TVT${path}) => {`)
                                    $w.indent({}, ($w) => {
                                        endCallback(
                                            $w,
                                        )
                                    })
                                    $w.snippet(`}`)
                                })
                                function generateElements(
                                    elements: pm.Stack<api.TSequenceElement>,
                                    $w: wapi.IBlock,
                                ) {
                                    elements.pop(
                                        ($) => {
                                            const element = $
                                            generateValue(
                                                element.value,
                                                `${path}_${element.name}`,
                                                $w,
                                                ($w) => {
                                                    $w.line({}, ($w) => {
                                                        $w.snippet(`const _${element.name} = $`)
                                                    })
                                                    generateElements(
                                                        elements,
                                                        $w,
                                                    )
                                                }
                                            )
                                        },
                                        () => {
                                            $w.line({}, ($w) => {
                                                $w.snippet(`sequenceEnd({`)
                                                $w.indent({}, ($w) => {
                                                    $.elements.forEach(($) => {
                                                        $w.line({}, ($w) => {
                                                            $w.snippet(`"${$.name}": _${$.name},`)
                                                        })
                                                    })
                                                })
                                                $w.snippet(`})`)
                                            })
                                        }
                                    )
                                }
                                generateElements(
                                    pm.createStack($.elements),
                                    $w,
                                )
                            })
                            break
                        case "node":
                            pl.cc($[1], ($) => {
                                $w.line({}, ($w) => {
                                    $w.snippet(`children.pop(`)
                                    $w.indent({}, ($w) => {
                                        $w.line({}, ($w) => {
                                            $w.snippet(`(currentChild) => {`)
                                            $w.indent({}, ($w) => {
                                                $w.line({}, ($w) => {
                                                    $w.snippet(`if ($d.stringsAreEqual(currentChild.kindName, "${$.name}")) {`)
                                                    $w.indent({}, ($w) => {
                                                        generateNode(
                                                            $,
                                                            `${path}$`,
                                                            $w,
                                                            ($w) => {
                                                                $w.snippet(`(`)
                                                                $w.indent({}, ($w) => {
                                                                    $w.line({}, ($w) => {
                                                                        $w.snippet(`currentChild,`)
                                                                    })
                                                                    $w.line({}, ($w) => {
                                                                        $w.snippet(`($) => {`)
                                                                        $w.indent({}, ($w) => {
                                                                            endCallback($w)
                                                                        })
                                                                        $w.snippet(`}`)
                                                                    })
                                                                })
                                                                $w.snippet(`)`)
                                                            }
                                                        )

                                                    })
                                                    $w.snippet(`} else {`)
                                                    $w.indent({}, ($w) => {
                                                        $w.line({}, ($w) => {
                                                            $w.snippet(`$x.reportUnexpectedToken({`)
                                                            $w.indent({}, ($w) => {
                                                                $w.line({}, ($w) => {
                                                                    $w.snippet(`path: "${path}",`)
                                                                })
                                                                $w.line({}, ($w) => {
                                                                    $w.snippet(`token: currentChild,`)
                                                                })
                                                                $w.line({}, ($w) => {
                                                                    $w.snippet(`expected: "${$.name}",`)
                                                                })
                                                            })
                                                            $w.snippet(`})`)
                                                        })
                                                    })
                                                    $w.snippet(`}`)
                                                })
                                            })
                                            $w.snippet(`},`)
                                        })
                                        $w.line({}, ($w) => {
                                            $w.snippet(`() => { // no child`)
                                            $w.indent({}, ($w) => {
                                                $w.line({}, ($w) => {
                                                    $w.snippet(`$x.reportMissingToken({`)
                                                    $w.indent({}, ($w) => {
                                                        $w.line({}, ($w) => {
                                                            $w.snippet(`parentDetails: node.details,`)
                                                        })
                                                        $w.line({}, ($w) => {
                                                            $w.snippet(`path: "${path}",`)
                                                        })
                                                        $w.line({}, ($w) => {
                                                            $w.snippet(`kindNameOptions: "${$.name}",`)
                                                        })
                                                    })
                                                    $w.snippet(`})`)
                                                })
                                            })
                                            $w.snippet(`},`)
                                        })
                                    })
                                    $w.snippet(`)`)
                                })
                            })
                            break
                        default:
                            pl.au($[0])
                    }
                }
                grammar.globalValueTypes.forEach((a, b) => $d.isYinBeforeYang({ yin: b, yang: a }), ($, key) => {

                    $w.line({}, ($w) => {

                        $w.snippet(`function G${key}(`)
                        $w.indent({}, ($w) => {
                            $w.line({}, ($w) => {
                                $w.snippet(`node: uast.TUntypedNode,`)
                            })
                            $w.line({}, ($w) => {
                                $w.snippet(`children: pm.Stack<uast.TUntypedNode>,`)
                            })
                            $w.line({}, ($w) => {
                                $w.snippet(`callback: ($: api.TG${key}) => void,`)
                            })
                        })
                        $w.snippet(`): void {`)
                        $w.indent({}, ($w) => {
                            generateValueType(
                                $,
                                `G${key}`,
                                $w,
                                ($w) => {
                                    $w.line({}, ($w) => {
                                        $w.snippet(`callback($)`)
                                    })
                                }
                            )
                        })
                        $w.snippet(`}`)
                    })
                })

                $w.line({}, ($w) => {
                    $w.snippet(`if ($d.stringsAreEqual($.kindName, "${grammar.root.name}")) {`)
                    $w.indent({}, ($w) => {
                        generateNode(
                            grammar.root,
                            "root",
                            $w,
                            ($w) => {

                                $w.snippet(`(`)
                                $w.indent({}, ($w) => {
                                    $w.line({}, ($w) => {
                                        $w.snippet(`$,`)
                                    })
                                    $w.line({}, ($w) => {
                                        $w.snippet(`($) => {`)
                                        $w.indent({}, ($w) => {
                                            $w.line({}, ($w) => {
                                                $w.snippet(`$x.callback($)`)
                                            })
                                        })
                                        $w.snippet(`},`)
                                    })
                                })
                                $w.snippet(`)`)
                            },
                        )
                    })
                    $w.snippet(`} else {`)
                    $w.indent({}, ($w) => {
                        $w.line({}, ($w) => {
                            $w.snippet(`$x.reportUnexpectedToken({`)
                            $w.indent({}, ($w) => {
                                $w.line({}, ($w) => {
                                    $w.snippet(`path: "",`)
                                })
                                $w.line({}, ($w) => {
                                    $w.snippet(`token: $,`)
                                })
                                $w.line({}, ($w) => {
                                    $w.snippet(`expected: "${grammar.root.name}",`)
                                })
                            })
                            $w.snippet(`})`)
                        })
                    })
                    $w.snippet(`}`)
                })
            })
            $w.snippet(`}`)
        })

    })
}
