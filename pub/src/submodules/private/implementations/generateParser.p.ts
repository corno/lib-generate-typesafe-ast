
import * as pl from 'pareto-core-lib'
import * as pt from 'pareto-core-types'
import * as ps from 'pareto-core-state'
import * as pd from 'pareto-core-dev'

import * as mapi from "../api"
import * as mfp from "lib-fountain-pen"
import * as mresolved from "../../resolved"

function buildDictionary<T>($c: (add: (key: string, value: T) => void) => void): pt.Dictionary<T> {
    const temp = ps.createDictionaryBuilder<T>(
        ['ignore', {}],
        () => {
            //allow duplicates???
        }
    )
    $c((key, value) => {
        temp.add(key, value)
    })
    return temp.getDictionary()
}

export const $$: mapi.CgenerateParser = ($d) => {
    return ($, $i) => {
        const grammar = $.grammar
        function findNextPossibleTokensInSymbolType(
            $: mresolved.T.ValueType,
            onToken: (token: string) => void,
            onEnd: () => void,
        ) {
            switch ($[0]) {
                case 'choice':
                    pl.cc($[1], ($) => {
                        $d.sortedForEach(
                            $.options,
                            ($) => {
                                findNextPossibleTokensInSymbolType(
                                    $.value.type,
                                    onToken,
                                    onEnd
                                )
                            })
                    })
                    break
                case 'reference':
                    pl.cc($[1], ($) => {
                        findNextPossibleTokensInSymbolType(
                            $.referencee(),
                            onToken,
                            onEnd,
                        )
                        // pr.getEntry(
                        //     grammar.globalValueTypes,
                        //     $.name,
                        //     (x) => {
                        //     },
                        //     () => {
                        //         pl.panic(`no such value type: '${$.name}'`)
                        //     }
                        // )
                    })
                    break
                case 'sequence':
                    pl.cc($[1], ($) => {
                        const elementsStack = ps.createStack($.elements)
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
                case 'node':
                    pl.cc($[1], ($) => {
                        onToken($.name)
                    })
                    break
                default:
                    pl.au($[0])
            }
        }
        pl.cc($i, ($w) => {
            $w.line(`import * as pl from 'pareto-core-lib'`)
            $w.line(`import * as ps from 'pareto-core-state'`)
            $w.line(``)
            $w.line(`import * as muast from "glo-typescript-untyped-ast"`)
            $w.line(`import * as mapi from "${$.pathToInterface}"`)
            $w.line(``)
            $w.nestedLine(($w) => {
                $w.snippet(`export function parse(`)
                $w.indent(($w) => {
                    $w.line(`$: uast.T.UntypedNode,`)

                    $w.nestedLine(($w) => {
                        $w.snippet(`$i: {`)
                        $w.indent(($w) => {
                            $w.line(`callback: ($: mapi.TRoot) => void,`)
                            $w.line(`reportUnexpectedToken: ($: { path: string, token: uast.T.UntypedNode, expected: null | string }) => void,`)
                            $w.line(`reportMissingToken: ($: { parentDetails: uast.T.Details, path: string, kindNameOptions: string, }) => void,`)
                        })
                        $w.snippet(`},`)
                    })
                    $w.nestedLine(($w) => {
                        $w.snippet(`$d: {`)
                        $w.indent(($w) => {
                            $w.line(`doUntil: <T>(stack: ps.Stack<T>, callback: ($: T) => boolean) => void,`)
                            $w.line(`lookAhead: <T>(stack: ps.Stack<T>, exists: ($: T) => void, notExists: () => void) => void,`)
                            $w.line(`stringsAreEqual: (a: string, b: string) => boolean,`)
                        })
                        $w.snippet(`},`)
                    })
                })
                $w.snippet(`): void {`)
                $w.indent(($w) => {

                    $w.line(`const $x = $i`)
                    function generateNode(
                        $: mresolved.T.Node2,
                        path: string,
                        $w: mfp.IBlock,
                        call: ($w: mfp.ILine) => void
                    ) {

                        $w.nestedLine(($w) => {

                            $w.snippet(`((`)
                            $w.indent(($w) => {
                                $w.line(`$: uast.T.UntypedNode,`)
                                $w.line(`callback: ($: mapi.TN${path}) => void,`)
                            })
                            $w.snippet(`): void => {`)
                            $w.indent(($w) => {
                                $w.line(`const node = $`)
                                $w.line(`const children = ps.createStack($.children)`)
                                switch ($.type[0]) {
                                    case 'composite':
                                        pl.cc($.type[1], ($) => {
                                            generateValue(
                                                $,
                                                path,
                                                $w,
                                                ($w) => {
                                                    $w.nestedLine(($w) => {
                                                        $w.snippet(`callback({`)
                                                        $w.indent(($w) => {
                                                            $w.line(`tokenDetails: node.details,`)
                                                            $w.line(`content: $,`)
                                                        })
                                                        $w.snippet(`})`)
                                                    })
                                                }
                                            )
                                        })
                                        break
                                    case 'leaf':
                                        pl.cc($.type[1], ($) => {
                                            $w.nestedLine(($w) => {
                                                $w.snippet(`callback(`)
                                                if ($.hasTextContent) {
                                                    $w.snippet(`{`)
                                                    $w.indent(($w) => {
                                                        $w.line(`tokenDetails: $.details,`)
                                                        $w.line(`value: $.value`)
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

                                $w.nestedLine(($w) => {
                                    $w.snippet(`children.pop(`)
                                    $w.indent(($w) => {
                                        $w.nestedLine(($w) => {
                                            $w.snippet(`(nextChild) => {`)
                                            $w.indent(($w) => {
                                                $w.nestedLine(($w) => {
                                                    $w.snippet(`$x.reportUnexpectedToken({`)
                                                    $w.indent(($w) => {
                                                        $w.line(`path: "${path}",`)
                                                        $w.line(`token: nextChild,`)
                                                        $w.line(`expected: null,`)
                                                    })
                                                    $w.snippet(`})`)
                                                })
                                            })
                                            $w.snippet(`},`)
                                        })
                                        $w.nestedLine(($w) => {
                                            $w.snippet(`() => {`)
                                            $w.indent(($w) => {
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
                        $: mresolved.T.Value,
                        path: string,
                        $w: mfp.IBlock,
                        endCallback: (
                            $w: mfp.IBlock,
                        ) => void,
                    ) {
                        const symbol = $
                        if ($.cardinality !== undefined) {
                            switch ($.cardinality[0]) {
                                case 'array':
                                    pl.cc($.cardinality[1], ($) => {
                                        $w.line(`const elements = ps.createArrayBuilderFIXME<mapi.TVT${path}>()`)
                                        $w.nestedLine(($w) => {
                                            $w.snippet(`const processElement = () => {`)
                                            $w.indent(($w) => {
                                                generateValueType(
                                                    symbol.type,
                                                    path,
                                                    $w,
                                                    ($w) => {
                                                        $w.line(`elements.push($)`)
                                                    },
                                                )
                                            })
                                            $w.snippet(`}`)
                                        })
                                        $w.nestedLine(($w) => {
                                            $w.snippet(`$d.doUntil(`)
                                            $w.indent(($w) => {
                                                $w.line(`children,`)
                                                $w.nestedLine(($w) => {
                                                    $w.snippet(`(nextChild) => {`)
                                                    $w.indent(($w) => {
                                                        $w.nestedLine(($w) => {
                                                            $w.snippet(`switch (nextChild.kindName) {`)
                                                            $w.indent(($w) => {

                                                                $d.sortedForEach(
                                                                    buildDictionary((add) => {
                                                                        findNextPossibleTokensInSymbolType(
                                                                            symbol.type,
                                                                            ($) => {
                                                                                add($, null)
                                                                            },
                                                                            () => {
                                                                                pd.implementMe("IMPLEMENT ME 4")
                                                                            }
                                                                        )
                                                                    }),
                                                                    ($) => {
                                                                        $w.nestedLine(($w) => {
                                                                            $w.snippet(`case '${$.key}':`)
                                                                            $w.indent(($w) => {
                                                                                $w.line(`processElement()`)
                                                                                $w.line(`return true`)
                                                                            })
                                                                        })
                                                                    })

                                                                $w.line(`default: return false`)
                                                            })
                                                            $w.snippet(`}`)
                                                        })
                                                    })
                                                    $w.snippet(`},`)
                                                })
                                            })
                                            $w.snippet(`)`)
                                        })
                                        $w.nestedLine(($w) => {
                                            $w.snippet(`pl.cc(elements.getArray(), ($) => {`)
                                            $w.indent(($w) => {
                                                endCallback($w)
                                            })
                                            $w.snippet(`})`)
                                        })
                                    })
                                    break
                                case 'one':
                                    pl.cc($.cardinality[1], ($) => {
                                        generateValueType(
                                            symbol.type,
                                            path,
                                            $w,
                                            endCallback,
                                        )
                                    })
                                    break
                                case 'optional':
                                    pl.cc($.cardinality[1], ($) => {
                                        $w.line(`let optional: null | mapi.TVT${path} = null`)
                                        $w.nestedLine(($w) => {
                                            $w.snippet(`const setOptional = () => {`)
                                            $w.indent(($w) => {
                                                generateValueType(
                                                    symbol.type,
                                                    path,
                                                    $w,
                                                    ($w) => {
                                                        $w.line(`optional = $`)
                                                    },
                                                )
                                            })
                                            $w.snippet(`}`)
                                        })

                                        $w.nestedLine(($w) => {
                                            $w.snippet(`$d.lookAhead(children, `)
                                            $w.indent(($w) => {
                                                $w.nestedLine(($w) => {
                                                    $w.snippet(`(nextChild) => {`)
                                                    $w.indent(($w) => {
                                                        $w.nestedLine(($w) => {
                                                            $w.snippet(`switch (nextChild.kindName) {`)
                                                            $w.indent(($w) => {
                                                                $d.sortedForEach(
                                                                    buildDictionary((add) => {
                                                                        findNextPossibleTokensInSymbolType(
                                                                            symbol.type,
                                                                            ($) => {
                                                                                add($, null)
                                                                            },
                                                                            () => {
                                                                                pl.panic("IMPLEMENT ME 5")
                                                                            }
                                                                        )
                                                                    }),
                                                                    ($) => {
                                                                        $w.nestedLine(($w) => {
                                                                            $w.snippet(`case '${$.key}':`)
                                                                            $w.indent(($w) => {
                                                                                $w.line(`setOptional()`)
                                                                                $w.line(`break`)
                                                                            })
                                                                        })
                                                                    })
                                                            })
                                                            $w.snippet(`}`)
                                                        })
                                                    })
                                                    $w.snippet(`},`)
                                                })
                                                $w.nestedLine(($w) => {
                                                    $w.snippet(`() => {`)
                                                    $w.indent(($w) => {
                                                    })
                                                    $w.snippet(`},`)
                                                })
                                            })
                                            $w.snippet(`)`)
                                        })
                                        $w.nestedLine(($w) => {
                                            $w.snippet(`pl.cc(optional, ($) => {`)
                                            $w.indent(($w) => {
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
                        $: mresolved.T.ValueType,
                        path: string,
                        $w: mfp.IBlock,
                        endCallback: (
                            $w: mfp.IBlock,
                        ) => void,
                    ) {
                        switch ($[0]) {
                            case 'choice':
                                pl.cc($[1], ($) => {
                                    const possibleTokens = ps.createUnsafeDictionaryBuilder<string>()
                                    $d.sortedForEach(
                                        $.options,
                                        ($) => {
                                            const option = $.value
                                            const key = $.key
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
                                    $w.nestedLine(($w) => {
                                        $w.snippet(`const choiceEnd_${path} = ($: mapi.TVT${path}) => {`)
                                        $w.indent(($w) => {
                                            endCallback(
                                                $w,
                                            )
                                        })
                                        $w.snippet(`}`)
                                    })

                                    $w.nestedLine(($w) => {
                                        $w.snippet(`$d.lookAhead(children, `)
                                        $w.indent(($w) => {
                                            $w.nestedLine(($w) => {
                                                $w.snippet(`(nextChild) => {`)
                                                $w.indent(($w) => {
                                                    $d.sortedForEach(
                                                        $.options,
                                                        ($) => {
                                                            const option = $.value
                                                            $w.nestedLine(($w) => {
                                                                $w.snippet(`const choose_${$.key} = () => {`)
                                                                $w.indent(($w) => {

                                                                    generateValue(
                                                                        option,
                                                                        `${path}_${$.key}`,
                                                                        $w,
                                                                        ($w) => {
                                                                            $w.line(`choiceEnd_${path}(['${$.key}', $])`)
                                                                        }
                                                                    )
                                                                })
                                                                $w.snippet(`}`)
                                                            })
                                                        })
                                                    $w.nestedLine(($w) => {
                                                        $w.snippet(`switch (nextChild.kindName) {`)
                                                        $w.indent(($w) => {
                                                            const possibleTokens = ps.createUnsafeDictionaryBuilder<string>()
                                                            $d.sortedForEach(
                                                                $.options,
                                                                ($) => {
                                                                    const option = $.value
                                                                    const key = $.key
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
                                                            $d.sortedForEach(
                                                                possibleTokens.getDictionary(),
                                                                (optionKey) => {
                                                                    $w.nestedLine(($w) => {
                                                                        $w.snippet(`case '${optionKey.key}': /*Y*/ {`)
                                                                        $w.indent(($w) => {
                                                                            $w.line(`choose_${optionKey.value}()`)
                                                                            $w.line(`break`)
                                                                        })
                                                                        $w.snippet(`}`)
                                                                    })
                                                                })
                                                            $w.nestedLine(($w) => {
                                                                $w.snippet(`default: {`)
                                                                $w.indent(($w) => {
                                                                    $w.nestedLine(($w) => {
                                                                        $w.snippet(`$x.reportUnexpectedToken({`)
                                                                        $w.indent(($w) => {
                                                                            $w.line(`path: "${path}",`)
                                                                            $w.line(`token: nextChild,`)
                                                                            $w.nestedLine(($w) => {
                                                                                $w.snippet(`expected: "${$d.getKeysAsString(possibleTokens.getDictionary().map(() => null))}",`)
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
                                            $w.nestedLine(($w) => {
                                                $w.snippet(`() => { // no child`)
                                                $w.indent(($w) => {
                                                    $w.nestedLine(($w) => {
                                                        $w.snippet(`$x.reportMissingToken({`)
                                                        $w.indent(($w) => {
                                                            $w.line(`parentDetails: node.details,`)
                                                            $w.line(`path: "${path}",`)
                                                            $w.nestedLine(($w) => {
                                                                $w.snippet(`kindNameOptions: "${$d.getKeysAsString(possibleTokens.getDictionary().map(() => null))}",`)
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
                            case 'reference':
                                pl.cc($[1], ($) => {
                                    $w.nestedLine(($w) => {
                                        $w.snippet(`G${$.name}(node, children, ($) => {`)
                                        $w.indent(($w) => {
                                            endCallback(
                                                $w,
                                            )
                                        })
                                        $w.snippet(`})`)
                                    })
                                })
                                break
                            case 'sequence':
                                pl.cc($[1], ($) => {
                                    $w.nestedLine(($w) => {
                                        $w.snippet(`const sequenceEnd = ($: mapi.TVT${path}) => {`)
                                        $w.indent(($w) => {
                                            endCallback(
                                                $w,
                                            )
                                        })
                                        $w.snippet(`}`)
                                    })
                                    function generateElements(
                                        elements: ps.Stack<mresolved.T.ValueType.sequence.elements.A>,
                                        $w: mfp.IBlock,
                                    ) {
                                        elements.pop(
                                            ($) => {
                                                const element = $
                                                generateValue(
                                                    element.value,
                                                    `${path}_${element.name}`,
                                                    $w,
                                                    ($w) => {
                                                        $w.line(`const _${element.name} = $`)
                                                        generateElements(
                                                            elements,
                                                            $w,
                                                        )
                                                    }
                                                )
                                            },
                                            () => {
                                                $w.nestedLine(($w) => {
                                                    $w.snippet(`sequenceEnd({`)
                                                    $w.indent(($w) => {
                                                        $.elements.__forEach(($) => {
                                                            $w.line(`"${$.name}": _${$.name},`)
                                                        })
                                                    })
                                                    $w.snippet(`})`)
                                                })
                                            }
                                        )
                                    }
                                    generateElements(
                                        ps.createStack($.elements),
                                        $w,
                                    )
                                })
                                break
                            case 'node':
                                pl.cc($[1], ($) => {
                                    $w.nestedLine(($w) => {
                                        $w.snippet(`children.pop(`)
                                        $w.indent(($w) => {
                                            $w.nestedLine(($w) => {
                                                $w.snippet(`(currentChild) => {`)
                                                $w.indent(($w) => {
                                                    $w.nestedLine(($w) => {
                                                        $w.snippet(`if ($d.stringsAreEqual(currentChild.kindName, "${$.name}")) {`)
                                                        $w.indent(($w) => {
                                                            generateNode(
                                                                $,
                                                                `${path}$`,
                                                                $w,
                                                                ($w) => {
                                                                    $w.snippet(`(`)
                                                                    $w.indent(($w) => {
                                                                        $w.line(`currentChild,`)
                                                                        $w.nestedLine(($w) => {
                                                                            $w.snippet(`($) => {`)
                                                                            $w.indent(($w) => {
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
                                                        $w.indent(($w) => {
                                                            $w.nestedLine(($w) => {
                                                                $w.snippet(`$x.reportUnexpectedToken({`)
                                                                $w.indent(($w) => {
                                                                    $w.line(`path: "${path}",`)
                                                                    $w.line(`token: currentChild,`)
                                                                    $w.line(`expected: "${$.name}",`)
                                                                })
                                                                $w.snippet(`})`)
                                                            })
                                                        })
                                                        $w.snippet(`}`)
                                                    })
                                                })
                                                $w.snippet(`},`)
                                            })
                                            $w.nestedLine(($w) => {
                                                $w.snippet(`() => { // no child`)
                                                $w.indent(($w) => {
                                                    $w.nestedLine(($w) => {
                                                        $w.snippet(`$x.reportMissingToken({`)
                                                        $w.indent(($w) => {
                                                            $w.line(`parentDetails: node.details,`)
                                                            $w.line(`path: "${path}",`)
                                                            $w.line(`kindNameOptions: "${$.name}",`)
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
                    $d.sortedForEach(
                        grammar.globalValueTypes,
                        ($) => {

                            $w.nestedLine(($w) => {

                                $w.snippet(`function G${$.key}(`)
                                $w.indent(($w) => {
                                    $w.line(`node: uast.T.UntypedNode,`)
                                    $w.line(`children: ps.Stack<uast.T.UntypedNode>,`)
                                    $w.line(`callback: ($: mapi.TG${$.key}) => void,`)
                                })
                                $w.snippet(`): void {`)
                                $w.indent(($w) => {
                                    generateValueType(
                                        $.value,
                                        `G${$.key}`,
                                        $w,
                                        ($w) => {
                                            $w.line(`callback($)`)
                                        }
                                    )
                                })
                                $w.snippet(`}`)
                            })
                        }
                    )

                    $w.nestedLine(($w) => {
                        $w.snippet(`if ($d.stringsAreEqual($.kindName, "${grammar.root.name}")) {`)
                        $w.indent(($w) => {
                            generateNode(
                                grammar.root,
                                "root",
                                $w,
                                ($w) => {

                                    $w.snippet(`(`)
                                    $w.indent(($w) => {
                                        $w.line(`$,`)
                                        $w.nestedLine(($w) => {
                                            $w.snippet(`($) => {`)
                                            $w.indent(($w) => {
                                                $w.line(`$x.callback($)`)
                                            })
                                            $w.snippet(`},`)
                                        })
                                    })
                                    $w.snippet(`)`)
                                },
                            )
                        })
                        $w.snippet(`} else {`)
                        $w.indent(($w) => {
                            $w.nestedLine(($w) => {
                                $w.snippet(`$x.reportUnexpectedToken({`)
                                $w.indent(($w) => {
                                    $w.line(`path: "",`)
                                    $w.line(`token: $,`)
                                    $w.line(`expected: "${grammar.root.name}",`)
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

}