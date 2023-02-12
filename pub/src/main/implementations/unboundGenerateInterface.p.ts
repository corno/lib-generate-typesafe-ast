import * as pl from 'pareto-core-lib'

import * as api from "../api"

export const $$: api.CunboundGenerateInterface = ($d) => {
    return ($, $i) => {
        $i.directory("types", ($i) => {
            $i.file("ts_api.p.ts", ($i) => {
                $d.generateTypes($.generation, $i)
            })
        })
        $i.directory("interfaces", ($i) => {
            $i.file("visitor.p.ts", ($i) => {
                $d.generateVisitorInterface($.generation, $i)
            })
        })
        $i.directory("algorithms", ($i) => {
            $i.file("algorithms.p.ts", ($i) => {
                $d.generateVisitorInterface($.generation, $i)
            })
        })
        $i.file("index.ts", ($i) => {
            $d.generateInterfaceIndex($.generation, $i)
        })
    }
}