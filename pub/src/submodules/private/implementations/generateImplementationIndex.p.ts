import * as pl from "pareto-core-lib"

import * as api from "../api"

export const igenerateImplementationIndex: FGenerateImplementationFile = ($, $i) => {
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
