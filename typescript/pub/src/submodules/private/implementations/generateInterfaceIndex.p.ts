import * as pl from 'pareto-core-lib'

import { CgenerateInterfaceIndex } from "../api"

export const $$:CgenerateInterfaceIndex = ($, $i) => {
    pl.cc($i, ($w) => {

        $w.line(`export * from "./types/ts_api.generated"`)
        $w.line(`export * from "./interfaces/visitor.generated"`)
        //$w.line(`export * from "./algorithms/algorithms.p"`)
    })
}
