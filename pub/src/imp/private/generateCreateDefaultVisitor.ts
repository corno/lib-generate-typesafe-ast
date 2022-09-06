import * as pl from "pareto-core-lib"

import * as wapi from "lib-fountain-pen"

import * as g from "../../interface"
import { XGenerateImplementationFile } from "./GenerateFile"

export const generateCreateDefaultVisitor: XGenerateImplementationFile = ($, $i, $d) => {
    const grammar = $.grammar
    pl.cc(($i.block), $w => {

        $w.line({}, ($w) => {
            $w.snippet(`import * as pt from "pareto-core-types"`)
        })
        $w.line({}, ($w) => {
            $w.snippet(`import * as api from "${$.pathToInterface}"`)
        })
        $w.line({}, ($w) => { })
        $w.line({}, ($w) => {
            $w.snippet(`export function createDefaultVisistor(`)
            $w.indent({}, ($w) => {
                $w.line({}, ($w) => {
                    $w.snippet(`$i: {`)
                    $w.indent({}, ($w) => {
                        $w.line({}, ($w) => {
                            $w.snippet(`log: ($: string) => void`)
                        })
                    })
                    $w.snippet(`}`)
                })
            })
            $w.snippet(`): api.IVisitor {`)
            $w.indent({}, ($w) => {
                $w.line({}, ($w) => {
                    $w.snippet(`return {`)
                    $w.indent({}, ($w) => {
                        function generateNode(
                            $: g.TNode2,
                            $w: wapi.IBlock,
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
                            $w.line({}, ($w) => {
                                $w.snippet(`"${path}": `)
                                switch ($.type[0]) {
                                    case "composite":
                                        pl.cc($.type[1], ($) => {
                                            $w.snippet(`{`)
                                            $w.indent({}, ($w) => {
                                                $w.line({}, ($w) => {
                                                    $w.snippet(`begin: ($) => { $i.log("${path} begin") },`)
                                                })
                                                $w.line({}, ($w) => {
                                                    $w.snippet(`end: ($) => { $i.log("${path} end") },`)
                                                })
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
                            $: g.TValueType,
                            $w: wapi.IBlock,
                            path: string,
                        ) {
                            switch ($[0]) {
                                case "choice":
                                    pl.cc($[1], ($) => {
                                        $.options.forEach((a, b) => $d.isYinBeforeYang({ yin: b, yang: a}), (option, key) => {
                                            generateValue(
                                                option,
                                                $w,
                                                `${path}/?${key}`
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
                            $: g.TValue,
                            $w: wapi.IBlock,
                            path: string,
                        ) {
                            const symbol = $
                            generateValueType(
                                symbol.type,
                                $w,
                                path,
                            )
                        }
                        grammar.globalValueTypes.forEach((a, b) => $d.isYinBeforeYang({ yin: b, yang: a}), ($, key) => {
                            generateValueType(
                                $,
                                $w,
                                `$${key}`,
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
