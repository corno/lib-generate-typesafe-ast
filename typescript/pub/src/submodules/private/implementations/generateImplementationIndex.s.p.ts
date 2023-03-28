import * as pl from 'pareto-core-lib'

import { A } from "../api.generated"

export const $$: A.generateImplementationIndex = () => {
    return ($, $i) => {
        pl.cc($i, ($w) => {

            $w.line(`export * from "./parse.generated"`)
            $w.line(`export * from "./visit.generated"`)
            $w.line(`export * from "./createDefaultVisitor.generated"`)
        })
    }
}
