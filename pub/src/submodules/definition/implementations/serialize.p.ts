import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mfp from "lib-fountain-pen"

export const $$: api.Cserialize = ($d) => {
    return ($, $i) => {
        function serializeNode2($: api.T.Node2, $i: mfp.ILine) {
            const name = $.name
            switch ($.type[0]) {
                case 'composite':
                    pl.cc($.type[1], ($) => {
                        $i.snippet(`composite("${name}", `)
                        serializeValue($, $i)
                        $i.snippet(`)`)
                    })
                    break
                case 'leaf':
                    pl.cc($.type[1], ($) => {
                        $i.snippet(`leaf("${name}", ${$.hasTextContent ? `true` : `false`})`)
                    })
                    break
                default: pl.au($.type[0])
            }
        }

        function serializeValue($: api.T.Value, $i: mfp.ILine) {
            const val = $.type
            if ($.cardinality === undefined) {
                $i.snippet(`one(`)
                serializeValueType(val, $i)
                $i.snippet(`)`)
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
                            $i.snippet(`one(`)
                            serializeValueType(val, $i)
                            $i.snippet(`)`)
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

        function serializeValueType($: api.T.ValueType, $i: mfp.ILine) {
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
                        $i.snippet(`node(`)
                        serializeNode2($, $i)
                        $i.snippet(`)`)
                    })
                    break
                case 'reference':
                    pl.cc($[1], ($) => {
                        $i.snippet(`reference("${$.name}")`)
                    })
                    break
                case 'sequence':
                    pl.cc($[1], ($) => {
                        $i.snippet(`sequence([`)
                        $i.indent(($i) => {
                            $.elements.forEach(($) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`e("${$.name}", `)
                                    serializeValue($.value, $i)
                                    $i.snippet(`),`)
                                })
                            })
                        })
                        $i.snippet(`])`)
                    })
                    break
                default: pl.au($[0])
            }
        }


        $i.line(`import * as pd from 'pareto-core-data'`)
        $i.line(``)
        $i.line(`import * as mgr from "../../../pub/dist/submodules/definition"`)
        $i.line(``)
        $i.line(`const d = pd.wrapRawDictionary`)
        $i.line(``)
        $i.nestedLine(($i) => {
            $i.snippet(`export const $: mgr.T.Grammar = {`)
            $i.indent(($i) => {
                $i.nestedLine(($i) => {
                    $i.snippet(`'globalValueTypes': d({`)
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
                    $i.snippet(`'root': `)
                    serializeNode2($.root, $i)
                    $i.snippet(`,`)
                })
            })
            $i.snippet(`}`)
        })
    }
}