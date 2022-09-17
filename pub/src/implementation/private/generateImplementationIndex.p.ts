import * as pl from "pareto-core-lib"

import { FGenerateImplementationFile } from "../types/functions.p"

export const p_generateImplementationIndex: FGenerateImplementationFile = ($, $i) => {
    pl.cc($i.block, ($w) => {

        $w.line(($w) => {
            $w.snippet(`export * from "./public/parse.generated"`)
        })
        $w.line(($w) => {
            $w.snippet(`export * from "./public/visit.generated"`)
        })
        $w.line(($w) => {
            $w.snippet(`export * from "./createDefaultVisitor.generated"`)
        })
    })
}
