import * as pl from 'pareto-core-lib'
import * as ps from 'pareto-core-state'

import * as api from "../api"

import * as mfp from "lib-fountain-pen"

export const $$: api.Cserialize = ($d) => {
    return ($, $i) => {

        function serializeValueType($: api.T.ValueType, $i: mfp.ILine) {

            switch ($[0]) {
                case 'choice':
                    pl.cc($[1], ($) => {
                        $i.snippet(`choice({`)
                        $i.indent(($i) => {
                            $d.dictionaryForEach($.options, ($) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`"${$.key}": `)
                                    if ($.value.cardinality !== undefined && $.value.cardinality[0] !== 'one') {
                                        pl.panic("option is not singular")
                                    }
                                    serializeValueType($.value.type, $i)
                                    $i.snippet(`,`)
                                })
                            })
                        })
                        $i.snippet(`})`)
                    })
                    break
                case 'node':
                    pl.cc($[1], ($) => {
                        $i.snippet(`node("${$.name}")`)
                    })
                    break
                case 'reference':
                    pl.cc($[1], ($) => {
                        $i.snippet(`reference("${$.name}")`)
                    })
                    break
                case 'sequence':
                    pl.cc($[1], ($) => {
                        pl.panic("SEQUENCE IN SEQUENCE")
                    })
                    break
                default: pl.au($[0])
            }
        }

        function serializeRootValueType($: api.T.ValueType, cardinality: undefined | api.T.Value.cardinality, $i: mfp.ILine) {

            function serializeCardinality($: api.T.Value.cardinality | undefined, $i: mfp.ILine) {

                const cardinality: api.T.Value.cardinality = $ !== undefined
                    ? $
                    : ['one', {}]

                switch (cardinality[0]) {
                    case 'array':
                        pl.cc(cardinality[1], ($) => {
                            $i.snippet(`, 'array'`)
                        })
                        break
                    case 'one':
                        pl.cc(cardinality[1], ($) => {
                        })
                        break
                    case 'optional':
                        pl.cc(cardinality[1], ($) => {
                            $i.snippet(`, 'optional'`)
                        })
                        break
                    default: pl.au(cardinality[0])
                }
            }
            const type = $
            switch ($[0]) {
                case 'choice':
                    pl.cc($[1], ($) => {
                        $i.snippet(`{`)
                        $i.indent(($i) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`"x": prop(`)
                                serializeValueType(type, $i)
                                serializeCardinality(cardinality, $i)
                                $i.snippet(`),`)
                            })
                        })
                        $i.snippet(`}`)
                    })
                    break
                case 'node':
                    pl.cc($[1], ($) => {
                        $i.snippet(`{`)
                        $i.indent(($i) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`"${$.name}": prop(`)
                                serializeValueType(type, $i)
                                serializeCardinality(cardinality, $i)
                                $i.snippet(`),`)
                            })
                        })
                        $i.snippet(`}`)
                    })
                    break
                case 'reference':
                    pl.cc($[1], ($) => {
                        $i.snippet(`{`)
                        $i.indent(($i) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`"${$.name}": prop(reference("${$.name}")`)
                                serializeCardinality(cardinality, $i)
                                $i.snippet(`),`)
                            })
                        })
                        $i.snippet(`}`)
                    })
                    break
                case 'sequence':
                    pl.cc($[1], ($) => {
                        if (cardinality !== undefined && cardinality[0] !== 'one') {
                            pl.panic("NOT ONE")
                        }
                        $i.snippet(`{`)
                        $i.indent(($i) => {
                            $.elements.forEach(($) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`"${$.name}": prop(`)
                                    serializeValueType($.value.type, $i)
                                    serializeCardinality($.value.cardinality, $i)
                                    $i.snippet(`),`)
                                })
                            })
                        })
                        $i.snippet(`}`)
                    })
                    break
                default: pl.au($[0])
            }
        }


        const db = ps.createDictionaryBuilder<api.T.Node2>(
            ['ignore', {}],
            ($) => {
                pl.logDebugMessage(`duplicate: ${$}`)
            }
        )
        function findNodesInNode2($: api.T.Node2) {
            const name = $.name
            db.add($.name, $)
            // $i.nestedLine(($i) => {
            //     $i.snippet(`"${$.name}": `)
            //     switch ($.type[0]) {
            //         case 'composite':
            //             pl.cc($.type[1], ($) => {
            //                 $i.snippet(`composite([`)
            //                 serializeValue($, $i)
            //                 $i.snippet(`])`)
            //             })
            //             break
            //         case 'leaf':
            //             pl.cc($.type[1], ($) => {
            //                 $i.snippet(`leaf(${$.hasTextContent ? `true`: `false`})`)
            //             })
            //             break
            //         default: pl.au($.type[0])
            //     }
            //     $i.snippet(`,`)
            // })
            switch ($.type[0]) {
                case 'composite':
                    pl.cc($.type[1], ($) => {
                        findNodesInValue($)
                    })
                    break
                case 'leaf':
                    pl.cc($.type[1], ($) => {
                    })
                    break
                default: pl.au($.type[0])
            }
        }

        function findNodesInValue($: api.T.Value) {
            const val = $.type
            if ($.cardinality === undefined) {
                findNodesInValueType(val)
            } else {
                switch ($.cardinality[0]) {
                    case 'array':
                        pl.cc($.cardinality[1], ($) => {
                            findNodesInValueType(val)
                        })
                        break
                    case 'one':
                        pl.cc($.cardinality[1], ($) => {
                            findNodesInValueType(val)
                        })
                        break
                    case 'optional':
                        pl.cc($.cardinality[1], ($) => {
                            findNodesInValueType(val)
                        })
                        break
                    default: pl.au($.cardinality[0])
                }

            }
        }

        function findNodesInValueType($: api.T.ValueType) {
            switch ($[0]) {
                case 'choice':
                    pl.cc($[1], ($) => {
                        $d.dictionaryForEach($.options, ($) => {
                            findNodesInValue($.value)
                        })
                    })
                    break
                case 'node':
                    pl.cc($[1], ($) => {
                        findNodesInNode2($)
                    })
                    break
                case 'reference':
                    pl.cc($[1], ($) => {
                    })
                    break
                case 'sequence':
                    pl.cc($[1], ($) => {
                        $.elements.forEach(($) => {
                            findNodesInValue($.value)
                        })
                    })
                    break
                default: pl.au($[0])
            }
        }

        $d.dictionaryForEach($.globalValueTypes, ($) => {
            findNodesInValueType($.value)
        })

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
                    $i.snippet(`'components': d({`)
                    $i.indent(($i) => {
                        $d.dictionaryForEach($.globalValueTypes, ($) => {
                            if ($.value[0] !== 'node') {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`"${$.key}": component(`)
                                    serializeRootValueType($.value, undefined, $i)
                                    $i.snippet(`),`)
                                })

                            }
                        })
                    })
                    $i.snippet(`}),`)
                })
                $i.nestedLine(($i) => {
                    $i.snippet(`'nodes': d({`)
                    $i.indent(($i) => {
                        $d.dictionaryForEach(db.getDictionary(), ($) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`"${$.value.name}": `)
                                switch ($.value.type[0]) {
                                    case 'composite':
                                        pl.cc($.value.type[1], ($) => {
                                            $i.snippet(`composite(`)
                                            serializeRootValueType($.type, $.cardinality, $i)
                                            $i.snippet(`)`)
                                        })
                                        break
                                    case 'leaf':
                                        pl.cc($.value.type[1], ($) => {
                                            $i.snippet(`leaf(${$.hasTextContent ? `true` : `false`})`)
                                        })
                                        break
                                    default: pl.au($.value.type[0])
                                }
                                $i.snippet(`,`)
                            })
                        })
                    })
                    $i.snippet(`}),`)
                })
                $i.nestedLine(($i) => {
                    $i.snippet(`'root': "WWW",`)
                })
            })
            $i.snippet(`}`)
        })
    }
}