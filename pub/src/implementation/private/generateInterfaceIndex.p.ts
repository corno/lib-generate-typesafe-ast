import * as pl from "pareto-core-lib"

import { FGenerateInterfaceFile } from "../types/functions.p"

export const p_generateInterfaceIndex: FGenerateInterfaceFile = ($, $i) => {
    pl.cc($i.block, ($w) => {

        $w.line(($w) => {
            $w.snippet(`export * from "./types/ts_api.generated"`)
        })
        $w.line(($w) => {
            $w.snippet(`export * from "./interfaces/visitor.generated"`)
        })
        $w.line(($w) => {
            $w.snippet(`export * from "./algorithms/algorithms.generated"`)
        })
    })
}
