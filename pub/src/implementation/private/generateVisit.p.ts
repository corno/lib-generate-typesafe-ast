import * as pl from "pareto-core-lib"

import * as g from "../../interface"
import * as wapi from "lib-fountain-pen"
import { FGenerateImplementationFile } from "../types/functions.p"

export const p_generateVisit: FGenerateImplementationFile = ($, $i, $d) => {
    const grammar = $.grammar

    pl.cc($i.block, ($w) => {

        $w.line(($w) => {
            $w.snippet(`import * as pl from "pareto-core-lib"`)
        })
        $w.line(($w) => {
            $w.snippet(`import * as api from "${$.pathToInterface}"`)
        })

        $w.line(($w) => { })

        $w.line(($w) => { })
        $w.line(($w) => {
            $w.snippet(`export function visit(`)
            $w.indent(($w) => {
                $w.line(($w) => {
                    $w.snippet(`$: api.TNroot,`)
                })
                $w.line(($w) => {
                    $w.snippet(`$i: {`)
                    $w.indent(($w) => {
                        $w.line(($w) => {
                            $w.snippet(`visitor: api.IVisitor,`)
                        })
                    })
                    $w.snippet(`}`)
                })
            })
            $w.snippet(`): void {`)
            $w.indent(($w) => {

                function generateNode(
                    $: g.TNode2,
                    $w: wapi.IBlock,
                    pathForCode: string,
                    pathForReporting: string,
                ) {
                    $w.line(($w) => {

                        $w.snippet(`((`)
                        $w.indent(($w) => {
                            $w.line(($w) => {
                                $w.snippet(`$: api.TN${pathForCode},`)
                            })
                        })
                        $w.snippet(`) => {`)
                        $w.indent(($w) => {
                            switch ($.type[0]) {
                                case "composite":
                                    pl.cc($.type[1], ($) => {
                                        $w.line(($w) => {
                                            $w.snippet(`if (pl.isNotUndefined($i.visitor["${pathForReporting}"])) { $i.visitor["${pathForReporting}"].begin($) }`)
                                        })
                                        $w.line(($w) => {
                                            $w.snippet(`pl.cc($.content, ($) => {`)
                                            $w.indent(($w) => {
                                                generateValue(
                                                    $,
                                                    $w,
                                                    pathForCode,
                                                    pathForReporting,
                                                )
                                            })
                                            $w.snippet(`})`)
                                        })
                                        $w.line(($w) => {
                                            $w.snippet(`if (pl.isNotUndefined($i.visitor["${pathForReporting}"])) { $i.visitor["${pathForReporting}"].end($) }`)
                                        })
                                    })
                                    break
                                case "leaf":
                                    pl.cc($.type[1], ($) => {
                                        $w.line(($w) => {
                                            $w.snippet(`if (pl.isNotUndefined($i.visitor["${pathForReporting}"])) { $i.visitor["${pathForReporting}"]($) }`)
                                        })
                                    })
                                    break
                                default:
                                    pl.au($.type[0])
                            }
                        })
                        $w.snippet(`})($)`)
                    })
                }
                function generateValueType(
                    $: g.TValueType,
                    $w: wapi.IBlock,
                    pathForCode: string,
                    pathForReporting: string,
                ) {
                    switch ($[0]) {
                        case "choice":
                            pl.cc($[1], ($) => {
                                $w.line(($w) => {

                                    $w.snippet(`switch ($[0]) {`)
                                    $w.indent(($w) => {
                                        $d.sortedForEach(
                                            $.options,
                                            ($) => {
                                                $w.line(($w) => {
                                                    $w.snippet(`case "${$.key}": {`)
                                                    $w.indent(($w) => {
                                                        $w.line(($w) => {
                                                            $w.snippet(`pl.cc($[1], ($) => {`)
                                                            $w.indent(($w) => {
                                                                generateValue(
                                                                    $.value,
                                                                    $w,
                                                                    `${pathForCode}_${$.key}`,
                                                                    `${pathForReporting}/?${$.key}`,
                                                                )
                                                            })
                                                            $w.snippet(`})`)
                                                        })
                                                        $w.line(($w) => {
                                                            $w.snippet(`break`)
                                                        })
                                                    })
                                                    $w.snippet(`}`)
                                                })
                                            })
                                        $w.line(($w) => {
                                            $w.snippet(`default: pl.au($[0])`)
                                        })
                                    })
                                    $w.snippet(`}`)
                                })
                            })
                            break
                        case "reference":
                            pl.cc($[1], ($) => {

                                $w.line(($w) => {
                                    $w.snippet(`X_${$.name}($)`)
                                })
                            })
                            break
                        case "sequence":
                            pl.cc($[1], ($) => {
                                $.elements.forEach(($) => {
                                    $w.line(($w) => {
                                        $w.snippet(`pl.cc($["${$.name}"], ($) => {`)
                                        $w.indent(($w) => {
                                            generateValue(
                                                $.value,
                                                $w,
                                                `${pathForCode}_${$.name}`,
                                                `${pathForReporting}/.${$.name}`,
                                            )
                                        })
                                        $w.snippet(`})`)
                                    })
                                })
                            })
                            break
                        case "node":
                            pl.cc($[1], ($) => {
                                generateNode(
                                    $,
                                    $w,
                                    `${pathForCode}$`,
                                    `${pathForReporting}/*${$.name}`,
                                )
                            })
                            break
                        default:
                            pl.au($[0])
                    }

                }
                function generateValue(
                    $: g.TValue,
                    $w: wapi.IBlock,
                    pathForCode: string,
                    pathForReporting: string,
                ) {
                    const symbol = $
                    if (pl.isNotUndefined($.cardinality)) {
                        switch ($.cardinality[0]) {
                            case "array":
                                pl.cc($.cardinality[1], ($) => {
                                    $w.line(($w) => {
                                        $w.snippet(`$.forEach(($) => {`)
                                        $w.indent(($w) => {
                                            generateValueType(
                                                symbol.type,
                                                $w,
                                                `${pathForCode}`,
                                                `${pathForReporting}`,
                                            )
                                        })
                                        $w.snippet(`})`)
                                    })
                                })
                                break
                            case "one":
                                pl.cc($.cardinality[1], ($) => {
                                    generateValueType(
                                        symbol.type,
                                        $w,
                                        `${pathForCode}`,
                                        `${pathForReporting}`,
                                    )

                                })
                                break
                            case "optional":
                                pl.cc($.cardinality[1], ($) => {
                                    $w.line(($w) => {
                                        $w.snippet(`if (pl.isNotNull($)) {`)
                                        $w.indent(($w) => {
                                            generateValueType(
                                                symbol.type,
                                                $w,
                                                `${pathForCode}`,
                                                `${pathForReporting}`,
                                            )
                                        })
                                        $w.snippet(`} else {`)
                                        $w.indent(($w) => {
                                            $w.line(($w) => {
                                                $w.snippet(`//FIXME??`)
                                            })
                                        })
                                        $w.snippet(`}`)
                                    })
                                })
                                break
                            default:
                                pl.au($.cardinality[0])
                        }

                    } else {
                        generateValueType(
                            symbol.type,
                            $w,
                            `${pathForCode}`,
                            `${pathForReporting}`,
                        )
                    }
                }
                $d.sortedForEach(
                    grammar.globalValueTypes,
                    ($) => {
                        $w.line(($w) => {

                            $w.snippet(`function X_${$.key}(`)
                            $w.indent(($w) => {
                                $w.line(($w) => {
                                    $w.snippet(`$: api.TG${$.key},`)
                                })
                            })
                            $w.snippet(`) {`)
                            $w.indent(($w) => {
                                generateValueType(
                                    $.value,
                                    $w,
                                    `G${$.key}`,
                                    `$${$.key}`,
                                )
                            })
                            $w.snippet(`}`)

                        })
                    })

                generateNode(
                    grammar.root,
                    $w,
                    "root",
                    "",
                )

            })
            $w.snippet(`}`)
        })
    })
}
