import * as pl from 'pareto-core-lib'

import * as api from "../api"

export const $$: api.CunboundGenerateImplementation = ($d) => {
    return ($, $i) => {
        $i.file("createDefaultVisitor.p.ts", ($i) => {
            $d.generateCreateDefaultVisitor($.generation, $i)
        })
        $i.file("parse.generated.ts", ($i) => {
            $d.generateParser($.generation, $i)
        })
        $i.file("visit.generated.ts", ($i) => {
            $d.generateVisit($.generation, $i)
        })
        $i.directory("public", ($i) => {
        })
        $i.file("index.ts", ($i) => {
            $d.generateImplementationIndex($.generation, $i)
        })
    }
}