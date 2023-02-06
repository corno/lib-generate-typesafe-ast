import * as pl from "pareto-core-lib"

import * as api from "../api"

export const $$: api.CgenerateFunctions = ($d) => {
    return ($, $i) => {
        //const grammar = $.grammar
        pl.cc($i, ($w) => {

            $w.line(`import * as pt from "pareto-core-types"`)
            $w.line(``)

            $w.line(`import * as uast from "api-untyped-ast"`)
            $w.line(``)


            $w.nestedLine(($w) => {
                $w.snippet(`export type XParse = (`)
                $w.indent(($w) => {
                    $w.line(`$: uast.TUntypedNode,`)

                    $w.nestedLine(($w) => {
                        $w.snippet(`$i: {`)
                        $w.indent(($w) => {
                            $w.line(`callback: ($: api.TRoot) => void,`)
                            $w.line(`reportUnexpectedToken: ($: { path: string, token: uast.TUntypedNode, expected: null | string }) => void,`)
                            $w.line(`reportMissingToken: ($: { parentDetails: uast.TDetails, path: string, kindNameOptions: string, }) => void,`)
                        })
                        $w.snippet(`},`)
                    })
                    $w.nestedLine(($w) => {
                        $w.snippet(`$d: {`)
                        $w.indent(($w) => {
                            $w.line(`doUntil: <T>(stack: pm.Stack<T>, callback: ($: T) => boolean) => void,`)
                            $w.line(`lookAhead: <T>(stack: pm.Stack<T>, exists: ($: T) => void, notExists: () => void) => void,`)
                            $w.line(`stringsAreEqual: (a: string, b: string) => boolean,`)
                        })
                        $w.snippet(`},`)
                    })
                })
                $w.snippet(`) => void`)

            })


            $w.line(``)
            $w.nestedLine(($w) => {
                $w.snippet(`export type XVisit = (`)
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
                $w.snippet(`) => void`)
            })


            $w.line(``)
            $w.nestedLine(($w) => {
                $w.snippet(`export type XCreateDefaultVisistor = (`)
                $w.indent(($w) => {
                    $w.nestedLine(($w) => {
                        $w.snippet(`$i: {`)
                        $w.indent(($w) => {
                            $w.line(`log: ($: string) => void`)
                        })
                        $w.snippet(`}`)
                    })
                })
                $w.snippet(`) => api.IVisitor`)
            })

        })
    }
}