import * as pl from "pareto-core-lib"

import * as api from "../api"

export const igenerateInterfaceIndex: FGenerateInterfaceFile = ($, $i) => {
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
