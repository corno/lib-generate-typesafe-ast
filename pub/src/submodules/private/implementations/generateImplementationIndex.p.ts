import * as pl from 'pareto-core-lib'

import * as mapi from "../api"

export const $$: mapi.CgenerateImplementationIndex = ($, $i) => {
    pl.cc($i, ($w) => {

        $w.line(`export * from "./parse.generated"`)
        $w.line(`export * from "./visit.generated"`)
        $w.line(`export * from "./createDefaultVisitor.generated"`)
    })
}
