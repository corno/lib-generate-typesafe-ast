import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mdefinition from "../../definition"
import * as mfp from "lib-fountain-pen"

export const $$: api.CgenerateVisitorInterface = ($d) => {
    return ($, $i) => {
        const grammar = $.grammar
        pl.cc(($i), $w => {

            $w.line(`import * as pt from 'pareto-core-types'`)
            $w.line(`import * as types from "../types/ts_api.p"`)
            $w.line(``)
            $w.nestedLine(($w) => {
                $w.snippet(`export type IVisitor = {`)
                $w.indent(($w) => {

                    function generateNode(
                        $: mdefinition.T.Node2,
                        $w: mfp.IBlock,
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
                        $w.nestedLine(($w) => {
                            $w.snippet(`readonly "${pathForReporting}"?: `)
                            switch ($.type[0]) {
                                case "composite":
                                    pl.cc($.type[1], ($) => {
                                        $w.snippet(`{`)
                                        $w.indent(($w) => {
                                            $w.line(`readonly "begin": ($: types.TN${pathForCode}) => void,`)
                                            $w.line(`readonly "end": ($: types.TN${pathForCode}) => void,`)
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
                        $: mdefinition.T.ValueType,
                        $w: mfp.IBlock,
                        pathForCode: string,
                        pathForReporting: string,
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
                                                `${pathForCode}_${$.key}`,
                                                `${pathForReporting}/?${$.key}`,
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
                        $: mdefinition.T.Value,
                        $w: mfp.IBlock,
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
                    $d.sortedForEach(
                        grammar.globalValueTypes,
                        ($) => {
                            generateValueType(
                                $.value,
                                $w,
                                `G${$.key}`,
                                `$${$.key}`,
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
}
