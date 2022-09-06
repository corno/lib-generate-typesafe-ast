import * as pl from "pareto-core-lib"

import { XGenerateImplementationFile } from "./GenerateFile"

export const generateImplementationIndex: XGenerateImplementationFile = ($, $i) => {
    pl.cc($i.block, ($w) => {

        $w.line({}, ($w) => {
            $w.snippet(`export * from "./public/parse.generated"`)
        })
        $w.line({}, ($w) => {
            $w.snippet(`export * from "./public/visit.generated"`)
        })
        $w.line({}, ($w) => {
            $w.snippet(`export * from "./createDefaultVisitor.generated"`)
        })
    })
}
