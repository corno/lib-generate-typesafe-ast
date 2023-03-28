import * as pl from 'pareto-core-lib'

import * as g_this from "../glossary"
import * as g_fp from "lib-fountain-pen"

import { A } from "../api.generated"

export const $$: A.serialize = ($d) => {
    return ($, $i) => {
        function serializeNode2($: g_this.T.Node2, $i: g_fp.SYNC.I.Line) {
            const name = $.name
            switch ($.type[0]) {
                case 'composite':
                    pl.cc($.type[1], ($) => {
                        $i.snippet(`node("${name}", `)
                        serializeValue($, $i)
                        $i.snippet(`)`)
                    })
                    break
                case 'leaf':
                    pl.cc($.type[1], ($) => {
                        $i.snippet(`node("${name}", ${$.hasTextContent ? `true` : `false`})`)
                    })
                    break
                default: pl.au($.type[0])
            }
        }

        function serializeValue($: g_this.T.Value, $i: g_fp.SYNC.I.Line) {
            const val = $.type
            if ($.cardinality === undefined) {
                serializeValueType(val, $i)
            } else {
                switch ($.cardinality[0]) {
                    case 'array':
                        pl.cc($.cardinality[1], ($) => {
                            $i.snippet(`array(`)
                            serializeValueType(val, $i)
                            $i.snippet(`)`)
                        })
                        break
                    case 'one':
                        pl.cc($.cardinality[1], ($) => {
                            serializeValueType(val, $i)
                        })
                        break
                    case 'optional':
                        pl.cc($.cardinality[1], ($) => {
                            $i.snippet(`optional(`)
                            serializeValueType(val, $i)
                            $i.snippet(`)`)
                        })
                        break
                    default: pl.au($.cardinality[0])
                }

            }
        }

        function serializeValueType($: g_this.T.ValueType, $i: g_fp.SYNC.I.Line) {
            switch ($[0]) {
                case 'choice':
                    pl.cc($[1], ($) => {
                        $i.snippet(`choice({`)
                        $i.indent(($i) => {
                            $d.dictionaryForEach($.options, ($) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`"${$.key}": `)
                                    serializeValue($.value, $i)
                                    $i.snippet(`,`)
                                })
                            })
                        })
                        $i.snippet(`})`)
                    })
                    break
                case 'node':
                    pl.cc($[1], ($) => {
                        serializeNode2($, $i)
                    })
                    break
                case 'reference':
                    pl.cc($[1], ($) => {
                        $i.snippet(`component("${$.name}")`)
                    })
                    break
                case 'sequence':
                    pl.cc($[1], ($) => {
                        $i.snippet(`group({`)
                        $i.indent(($i) => {
                            $.elements.__forEach(($) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`"${$.name}": member(`)
                                    serializeValue($.value, $i)
                                    $i.snippet(`),`)
                                })
                            })
                        })
                        $i.snippet(`})`)
                    })
                    break
                default: pl.au($[0])
            }
        }

        $i.line(`import * as pd from 'pareto-core-data'`)
        $i.line(``)
        $i.line(`import * as ggr from "../../../pub/dist/submodules/definition"`)
        $i.line(``)
        $i.line(`const d = pd.wrapRawDictionary`)
        $i.line(``)
        $i.nestedLine(($i) => {
            $i.snippet(`export const $: mgr.T.Grammar = {`)
            $i.indent(($i) => {
                $i.nestedLine(($i) => {
                    $i.snippet(`'types': d({`)
                    $i.indent(($i) => {
                        $d.dictionaryForEach($.globalValueTypes, ($) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`"${$.key}": `)
                                serializeValueType($.value, $i)
                                $i.snippet(`,`)
                            })
                        })
                        $i.nestedLine(($i) => {
                            $i.snippet(``)
                        })
                    })
                    $i.snippet(`}),`)
                })
                $i.nestedLine(($i) => {
                    $i.snippet(`'root': "sourceFile",`)
                })
            })
            $i.snippet(`}`)
        })
    }
}