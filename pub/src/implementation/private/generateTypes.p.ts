import * as pl from "pareto-core-lib"


import * as api from "../../interface"
import * as fp from "lib-fountain-pen"

import { FGenerateInterfaceFile } from "../types/functions.p"


export const p_generateTypes: FGenerateInterfaceFile = ($, $i, $d) => {
    const grammar = $.grammar
    function generateTypesForNode(
        $: api.TNode2,
        $w: fp.IBlock,
        path: string
    ) {
        switch ($.type[0]) {
            case "composite":
                pl.cc($.type[1], ($) => {
                    generateTypesForValue(
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
        $w.line(($w) => {
            $w.snippet(``)
        })
        $w.line(($w) => {
            $w.snippet(`export type TN${path} = `)
            switch ($.type[0]) {
                case "composite":
                    pl.cc($.type[1], ($) => {
                        $w.snippet(`TAnnotatedType<TV${path}>`)
                    })
                    break
                case "leaf":
                    pl.cc($.type[1], ($) => {
                        if ($.hasTextContent) {
                            $w.snippet(`TAnnotatedString`)
                        } else {
                            $w.snippet(`uast.TDetails`)

                        }
                    })
                    break
                default:
                    pl.au($.type[0])
            }
        })

    }
    function generateTypesForValueType(
        $: api.TValueType,
        $w: fp.IBlock,
        path: string,
    ) {
        switch ($[0]) {
            case "choice":
                pl.cc($[1], ($) => {
                    $d.sortedForEach(
                        $.options,
                        ($) => {
                            generateTypesForValue(
                                $.value,
                                $w,
                                $d.joinNestedStrings({
                                    strings: [path, "_", $.key],
                                    separator: ", ",
                                })
                            )
                        })
                })
                break
            case "reference":
                pl.cc($[1], ($) => {
                    //
                })
                break
            case "sequence":
                pl.cc($[1], ($) => {
                    $.elements.forEach(($) => {
                        generateTypesForValue(
                            $.value,
                            $w,
                            $d.joinNestedStrings({
                                strings: [path, "_", $.name],
                                separator: ", ",
                            })
                        )
                    })
                })
                break
            case "node":
                pl.cc($[1], ($) => {
                    generateTypesForNode(
                        $,
                        $w,
                        `${path}$`,
                    )
                })
                break
            default:
                pl.au($[0])
        }
        $w.line(($w) => {
            $w.snippet(`export type TVT${path} = `)

            switch ($[0]) {
                case "choice":
                    pl.cc($[1], ($) => {

                        $w.indent(($w) => {
                            $d.sortedForEach(
                                $.options,
                                ($) => {
                                    $w.line(($w) => {
                                        $w.snippet(`| [ "${$.key}", TV${path}_${$.key}]`)
                                    })
                                }
                            )
                        })
                    })
                    break
                case "reference":
                    pl.cc($[1], ($) => {
                        $w.snippet(`TG${$.name}`)
                    })
                    break
                case "sequence":
                    pl.cc($[1], ($) => {
                        $w.snippet(`{`)
                        $w.indent(($w) => {
                            $.elements.forEach(($) => {
                                $w.line(($w) => {
                                    $w.snippet(`readonly "${$.name}":  TV${path}_${$.name}`)
                                })
                            })
                        })
                        $w.snippet(`}`)
                    })
                    break
                case "node":
                    pl.cc($[1], ($) => {
                        $w.snippet(`TN${path}$`)
                    })
                    break
                default:
                    pl.au($[0])
            }
        })
    }
    function generateTypesForValue(
        $: api.TValue,
        $w: fp.IBlock,
        path: string,
    ) {
        generateTypesForValueType(
            $.type,
            $w,
            path,
        )
        $w.line(($w) => {
            $w.snippet(`export type TV${path} = `)
            if (pl.isNotUndefined($.cardinality)) {
                switch ($.cardinality[0]) {
                    case "array":
                        pl.cc($.cardinality[1], ($) => {
                            $w.snippet(`pt.Array<TVT${path}>`)
                        })
                        break
                    case "one":
                        pl.cc($.cardinality[1], ($) => {
                            $w.snippet(`TVT${path}`)
                        })
                        break
                    case "optional":
                        pl.cc($.cardinality[1], ($) => {
                            $w.snippet(`null | TVT${path}`)
                        })
                        break
                    default:
                        pl.au($.cardinality[0])
                }
            } else {
                $w.snippet(`TVT${path}`)
            }
        })
    }
    pl.cc($i.block, ($w) => {

        $w.line(($w) => {
            $w.snippet(`import * as pt from "pareto-core-types"`)
        })
        $w.line(($w) => {
        })

        $w.line(($w) => {
            $w.snippet(`import * as uast from "api-untyped-ast"`)
        })
        $w.line(($w) => {
        })

        $w.line(($w) => {
            $w.snippet(`export type TAnnotatedString = { readonly "tokenDetails": uast.TDetails; readonly "value": string }`)
        })
        $w.line(($w) => {
            $w.snippet(`export type TAnnotatedType<Type> = { readonly "tokenDetails": uast.TDetails; readonly "content": Type }`)
        })

        $d.sortedForEach(
            grammar.globalValueTypes,
            ($) => {
                generateTypesForValueType(
                    $.value,
                    $w,
                    `G${$.key}`,
                )
                $w.line(($w) => {
                    $w.snippet(`export type TG${$.key} = TVTG${$.key}`)
                })
            })
        generateTypesForNode(
            grammar.root,
            $w,
            "root",
        )

        $w.line(($w) => {
            $w.snippet(`export type TRoot = TNroot`)
        })

    })

}