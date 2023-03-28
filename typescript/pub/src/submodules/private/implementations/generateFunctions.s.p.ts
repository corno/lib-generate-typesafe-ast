import * as pl from 'pareto-core-lib'

import { A } from "../api.generated"

export const $$: A.generateFunctions = () => {
    return ($, $i) => {
        //const grammar = $.grammar
        pl.cc($i, ($w) => {

            $w.line(`import * as pt from 'pareto-core-types'`)
            $w.line(``)
            $w.line(`import * as guast from "glo-typescript-untyped-ast"`)
            $w.line(``)
            $w.nestedLine(($w) => {
                $w.snippet(`export type XParse = (`)
                $w.indent(($w) => {
                    $w.line(`$: uast.T.UntypedNode,`)

                    $w.nestedLine(($w) => {
                        $w.snippet(`$i: {`)
                        $w.indent(($w) => {
                            $w.line(`callback: ($: api.TRoot) => void,`)
                            $w.line(`reportUnexpectedToken: ($: { path: string, token: uast.T.UntypedNode, expected: null | string }) => void,`)
                            $w.line(`reportMissingToken: ($: { parentDetails: uast.T.Details, path: string, kindNameOptions: string, }) => void,`)
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