import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mdefinition from "../../definition"
import * as mfp from "lib-fountain-pen"

export const $$: api.CgenerateVisit = ($d) => {
    return ($, $i) => {
        const grammar = $.grammar

        pl.cc($i, ($w) => {

            $w.line(`import * as pl from 'pareto-core-lib'`)
            $w.line(`import * as api from "${$.pathToInterface}"`)

            $w.line(``)
            $w.line(`function isNotNull<T>($: null | T): $ is T {`)
            $w.line(`    return $ !== null`)
            $w.line(`}`)

            $w.line(``)
            $w.nestedLine(($w) => {
                $w.snippet(`export function visit(`)
                $w.indent(($w) => {
                    $w.line(`$: api.TNroot,`)
                    $w.nestedLine(($w) => {
                        $w.snippet(`$i: {`)
                        $w.indent(($w) => {
                            $w.line(`visitor: api.IVisitor,`)
                        })
                        $w.snippet(`}`)
                    })
                })
                $w.snippet(`): void {`)
                $w.indent(($w) => {

                    function generateNode(
                        $: mdefinition.T.Node2,
                        $w: mfp.IBlock,
                        pathForCode: string,
                        pathForReporting: string,
                    ) {
                        $w.nestedLine(($w) => {

                            $w.snippet(`((`)
                            $w.indent(($w) => {
                                $w.line(`$: api.TN${pathForCode},`)
                            })
                            $w.snippet(`) => {`)
                            $w.indent(($w) => {
                                switch ($.type[0]) {
                                    case "composite":
                                        pl.cc($.type[1], ($) => {
                                            $w.line(`if (pl.isNotUndefined($i.visitor["${pathForReporting}"])) { $i.visitor["${pathForReporting}"].begin($) }`)
                                            $w.nestedLine(($w) => {
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
                                            $w.line(`if (pl.isNotUndefined($i.visitor["${pathForReporting}"])) { $i.visitor["${pathForReporting}"].end($) }`)
                                        })
                                        break
                                    case "leaf":
                                        pl.cc($.type[1], ($) => {
                                            $w.line(`if (pl.isNotUndefined($i.visitor["${pathForReporting}"])) { $i.visitor["${pathForReporting}"]($) }`)
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
                        $: mdefinition.T.ValueType,
                        $w: mfp.IBlock,
                        pathForCode: string,
                        pathForReporting: string,
                    ) {
                        switch ($[0]) {
                            case "choice":
                                pl.cc($[1], ($) => {
                                    $w.nestedLine(($w) => {

                                        $w.snippet(`switch ($[0]) {`)
                                        $w.indent(($w) => {
                                            $d.sortedForEach(
                                                $.options,
                                                ($) => {
                                                    $w.nestedLine(($w) => {
                                                        $w.snippet(`case "${$.key}": {`)
                                                        $w.indent(($w) => {
                                                            $w.nestedLine(($w) => {
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
                                                            $w.line(`break`)
                                                        })
                                                        $w.snippet(`}`)
                                                    })
                                                })
                                            $w.line(`default: pl.au($[0])`)
                                        })
                                        $w.snippet(`}`)
                                    })
                                })
                                break
                            case "reference":
                                pl.cc($[1], ($) => {

                                    $w.line(`X_${$.name}($)`)
                                })
                                break
                            case "sequence":
                                pl.cc($[1], ($) => {
                                    $.elements.__forEach(($) => {
                                        $w.nestedLine(($w) => {
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
                        $: mdefinition.T.Value,
                        $w: mfp.IBlock,
                        pathForCode: string,
                        pathForReporting: string,
                    ) {
                        const symbol = $
                        if (pl.isNotUndefined($.cardinality)) {
                            switch ($.cardinality[0]) {
                                case "array":
                                    pl.cc($.cardinality[1], ($) => {
                                        $w.nestedLine(($w) => {
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
                                        $w.nestedLine(($w) => {
                                            $w.snippet(`if (isNotNull($)) {`)
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
                                                $w.line(`//FIXME??`)
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
                            $w.nestedLine(($w) => {

                                $w.snippet(`function X_${$.key}(`)
                                $w.indent(($w) => {
                                    $w.line(`$: api.TG${$.key},`)
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
}