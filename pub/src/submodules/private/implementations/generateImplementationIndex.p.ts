import * as pl from "pareto-core-lib"

import * as api from "../api"

export const $$: api.CgenerateImplementationIndex = ($, $i) => {
    pl.cc($i, ($w) => {

        $w.line(`export * from "./public/parse.generated"`)
        $w.line(`export * from "./public/visit.generated"`)
        $w.line(`export * from "./createDefaultVisitor.generated"`)
    })
}
