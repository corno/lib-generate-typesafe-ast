import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mfp from "lib-fountain-pen"
import * as mdefinition from "../../definition"

export const $$: api.CgenerateTypes = ($d) => {
    return ($, $i) => {
        const grammar = $.grammar
        function generateTypesForNode(
            $: mdefinition.T.Node2,
            $w: mfp.IBlock,
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
            $w.line(``)
            $w.nestedLine(($w) => {
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
                                $w.snippet(`uast.T.Details`)

                            }
                        })
                        break
                    default:
                        pl.au($.type[0])
                }
            })

        }
        function generateTypesForValueType(
            $: mdefinition.T.ValueType,
            $w: mfp.IBlock,
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
                                    $d.joinNestedStrings([path, $.key])
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
                                $d.joinNestedStrings([path, $.name])
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
            $w.nestedLine(($w) => {
                $w.snippet(`export type TVT${path} = `)

                switch ($[0]) {
                    case "choice":
                        pl.cc($[1], ($) => {

                            $w.indent(($w) => {
                                $d.sortedForEach(
                                    $.options,
                                    ($) => {
                                        $w.line(`| [ "${$.key}", TV${path}_${$.key}]`)
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
                                    $w.line(`readonly "${$.name}":  TV${path}_${$.name}`)
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
            $: mdefinition.T.Value,
            $w: mfp.IBlock,
            path: string,
        ) {
            generateTypesForValueType(
                $.type,
                $w,
                path,
            )
            $w.nestedLine(($w) => {
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
        pl.cc($i, ($w) => {

            $w.line(`import * as pt from 'pareto-core-types'`)
            $w.nestedLine(($w) => {
            })

            $w.line(`import * as uast from "glo-typescript-untyped-ast"`)
            $w.nestedLine(($w) => {
            })

            $w.line(`export type TAnnotatedString = { readonly "tokenDetails": uast.T.Details; readonly "value": string }`)
            $w.line(`export type TAnnotatedType<Type> = { readonly "tokenDetails": uast.T.Details; readonly "content": Type }`)

            $d.sortedForEach(
                grammar.globalValueTypes,
                ($) => {
                    generateTypesForValueType(
                        $.value,
                        $w,
                        `G${$.key}`,
                    )
                    $w.line(`export type TG${$.key} = TVTG${$.key}`)
                })
            generateTypesForNode(
                grammar.root,
                $w,
                "root",
            )

            $w.line(`export type TRoot = TNroot`)

        })

    }
}