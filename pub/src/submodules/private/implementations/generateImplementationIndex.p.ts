import * as pl from 'pareto-core-lib'

import { CgenerateImplementationIndex } from "../api"

export const $$:CgenerateImplementationIndex = ($, $i) => {
    pl.cc($i, ($w) => {

        $w.line(`export * from "./parse.generated"`)
        $w.line(`export * from "./visit.generated"`)
        $w.line(`export * from "./createDefaultVisitor.generated"`)
    })
}
