import * as pl from "pareto-core-lib"

import * as api from "../api"

import * as mfp from "lib-fountain-pen"
import * as mmain from "../../../main"


export const $$: api.CgenerateCreateDefaultVisitor = ($d) => {
    return ($, $i) => {
        const grammar = $.grammar
        pl.cc(($i), $w => {

            $w.line(`import * as pt from "pareto-core-types"`)
            $w.line(`import * as api from "${$.pathToInterface}"`)
            $w.line(``)
            $w.nestedLine(($w) => {
                $w.snippet(`export function createDefaultVisistor(`)
                $w.indent(($w) => {
                    $w.nestedLine(($w) => {
                        $w.snippet(`$i: {`)
                        $w.indent(($w) => {
                            $w.line(`log: ($: string) => void`)
                        })
                        $w.snippet(`}`)
                    })
                })
                $w.snippet(`): api.IVisitor {`)
                $w.indent(($w) => {
                    $w.nestedLine(($w) => {
                        $w.snippet(`return {`)
                        $w.indent(($w) => {
                            function generateNode(
                                $: mmain.TNode2,
                                $w: mfp.IBlock,
                                path: string,
                            ) {
                                switch ($.type[0]) {
                                    case "composite":
                                        pl.cc($.type[1], ($) => {
                                            generateValue(
                                                $,
                                                $w,
                                                path,
                                            )
                                        })
                                        break
                                    case "leaf":
                                        pl.cc($.type[1], ($) => {
                                        })
                                        break
                                    default:
                                        pl.au($.type[0])
                                }
                                $w.nestedLine(($w) => {
                                    $w.snippet(`"${path}": `)
                                    switch ($.type[0]) {
                                        case "composite":
                                            pl.cc($.type[1], ($) => {
                                                $w.snippet(`{`)
                                                $w.indent(($w) => {
                                                    $w.line(`begin: ($) => { $i.log("${path} begin") },`)
                                                    $w.line(`end: ($) => { $i.log("${path} end") },`)
                                                })
                                                $w.snippet(`},`)
                                            })
                                            break
                                        case "leaf":
                                            pl.cc($.type[1], ($) => {
                                                $w.snippet(`($) => { $i.log("${path}") },`)
                                            })
                                            break
                                        default:
                                            pl.au($.type[0])
                                    }
                                })

                            }
                            function generateValueType(
                                $: mmain.TValueType,
                                $w: mfp.IBlock,
                                path: string,
                            ) {
                                switch ($[0]) {
                                    case "choice":
                                        pl.cc($[1], ($) => {
                                            $d.sortedForEach(
                                                $.options,
                                                ($) => {
                                                    generateValue(
                                                        $.value,
                                                        $w,
                                                        `${path}/?${$.key}`
                                                    )
                                                })
                                        })
                                        break
                                    case "reference":
                                        pl.cc($[1], ($) => {

                                        })
                                        break
                                    case "sequence":
                                        pl.cc($[1], ($) => {
                                            $.elements.forEach(($) => {
                                                generateValue(
                                                    $.value,
                                                    $w,
                                                    `${path}/.${$.name}`
                                                )
                                            })
                                        })
                                        break
                                    case "node":
                                        pl.cc($[1], ($) => {
                                            generateNode(
                                                $,
                                                $w,
                                                `${path}/*${$.name}`
                                            )
                                        })
                                        break
                                    default:
                                        pl.au($[0])
                                }

                            }
                            function generateValue(
                                $: mmain.TValue,
                                $w: mfp.IBlock,
                                path: string,
                            ) {
                                const symbol = $
                                generateValueType(
                                    symbol.type,
                                    $w,
                                    path,
                                )
                            }
                            $d.sortedForEach(grammar.globalValueTypes, ($) => {
                                generateValueType(
                                    $.value,
                                    $w,
                                    `$${$.key}`,
                                )
                            })

                            generateNode(
                                grammar.root,
                                $w,
                                "",
                            )


                        })
                        $w.snippet(`}`)
                    })
                })
                $w.snippet(`}`)
            })
        })
    }
}