import * as pl from "pareto-core-lib"
import * as pr from "pareto-core-raw"


import * as g from "../../interface"
import * as wapi from "lib-fountain-pen"
import { XGenerateInterfaceFile } from "./GenerateFile"

export const generateVisitorInterface: XGenerateInterfaceFile = ($, $i, $d) => {
    const grammar = $.grammar
    pl.cc(($i.block), $w => {

        $w.line({}, ($w) => {
            $w.snippet(`import * as pt from "pareto-core-types"`)
        })
        $w.line({}, ($w) => {
            $w.snippet(`import * as types from "../types/ts_api"`)
        })
        $w.line({}, ($w) => { })
        $w.line({}, ($w) => {
            $w.snippet(`export type IVisitor = {`)
            $w.indent({}, ($w) => {

                function generateNode(
                    $: g.TNode2,
                    $w: wapi.IBlock,
                    pathForCode: string,
                    pathForReporting: string,
                ) {

                    switch ($.type[0]) {
                        case "composite":
                            pl.cc($.type[1], ($) => {
                                generateValue(
                                    $,
                                    $w,
                                    pathForCode,
                                    pathForReporting,
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
                        $w.snippet(`readonly "${pathForReporting}"?: `)
                        switch ($.type[0]) {
                            case "composite":
                                pl.cc($.type[1], ($) => {
                                    $w.snippet(`{`)
                                    $w.indent({}, ($w) => {
                                        $w.line({}, ($w) => {
                                            $w.snippet(`readonly "begin": ($: types.TN${pathForCode}) => void,`)
                                        })
                                        $w.line({}, ($w) => {
                                            $w.snippet(`readonly "end": ($: types.TN${pathForCode}) => void,`)
                                        })
                                    })
                                    $w.snippet(`}`)
                                })
                                break
                            case "leaf":
                                pl.cc($.type[1], ($) => {
                                    $w.snippet(`($: types.TN${pathForCode}) => void`)
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
                    pathForCode: string,
                    pathForReporting: string,
                ) {
                    switch ($[0]) {
                        case "choice":
                            pl.cc($[1], ($) => {
                                $.options.forEach((a, b) => $d.isYinBeforeYang({ yin: b, yang: a}), (option, key) => {
                                    generateValue(
                                        option,
                                        $w,
                                        `${pathForCode}_${key}`,
                                        `${pathForReporting}/?${key}`,
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
                                        `${pathForCode}_${$.name}`,
                                        `${pathForReporting}/.${$.name}`,
                                    )
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
                    generateValueType(
                        symbol.type,
                        $w,
                        pathForCode,
                        pathForReporting,
                    )
                }
                grammar.globalValueTypes.forEach((a, b) => $d.isYinBeforeYang({ yin: b, yang: a}), ($, key) => {
                    generateValueType(
                        $,
                        $w,
                        `G${key}`,
                        `$${key}`,
                    )
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
