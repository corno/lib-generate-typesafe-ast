import * as pl from "pareto-core-lib"
import { FGenerateInterfaceFile } from "../types/functions.p"

export const p_generateFunctions: FGenerateInterfaceFile = ($, $i, $d) => {
    const grammar = $.grammar
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
            $w.snippet(`export type XParse = (`)
            $w.indent(($w) => {
                $w.line(($w) => {
                    $w.snippet(`$: uast.TUntypedNode,`)
                })

                $w.line(($w) => {
                    $w.snippet(`$i: {`)
                    $w.indent(($w) => {
                        $w.line(($w) => {
                            $w.snippet(`callback: ($: api.TRoot) => void,`)
                        })
                        $w.line(($w) => {
                            $w.snippet(`reportUnexpectedToken: ($: { path: string, token: uast.TUntypedNode, expected: null | string }) => void,`)
                        })
                        $w.line(($w) => {
                            $w.snippet(`reportMissingToken: ($: { parentDetails: uast.TDetails, path: string, kindNameOptions: string, }) => void,`)
                        })
                    })
                    $w.snippet(`},`)
                })
                $w.line(($w) => {
                    $w.snippet(`$d: {`)
                    $w.indent(($w) => {
                        $w.line(($w) => {
                            $w.snippet(`doUntil: <T>(stack: pm.Stack<T>, callback: ($: T) => boolean) => void,`)
                        })
                        $w.line(($w) => {
                            $w.snippet(`lookAhead: <T>(stack: pm.Stack<T>, exists: ($: T) => void, notExists: () => void) => void,`)
                        })
                        $w.line(($w) => {
                            $w.snippet(`stringsAreEqual: (a: string, b: string) => boolean,`)
                        })
                    })
                    $w.snippet(`},`)
                })
            })
            $w.snippet(`) => void`)

        })


        $w.line(($w) => { })
        $w.line(($w) => {
            $w.snippet(`export type XVisit = (`)
            $w.indent(($w) => {
                $w.line(($w) => {
                    $w.snippet(`$: api.TNroot,`)
                })
                $w.line(($w) => {
                    $w.snippet(`$i: {`)
                    $w.indent(($w) => {
                        $w.line(($w) => {
                            $w.snippet(`visitor: api.IVisitor,`)
                        })
                    })
                    $w.snippet(`}`)
                })
            })
            $w.snippet(`) => void`)
        })


        $w.line(($w) => { })
        $w.line(($w) => {
            $w.snippet(`export type XCreateDefaultVisistor = (`)
            $w.indent(($w) => {
                $w.line(($w) => {
                    $w.snippet(`$i: {`)
                    $w.indent(($w) => {
                        $w.line(($w) => {
                            $w.snippet(`log: ($: string) => void`)
                        })
                    })
                    $w.snippet(`}`)
                })
            })
            $w.snippet(`) => api.IVisitor`)
        })

    })
}