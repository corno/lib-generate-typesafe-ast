import * as pl from 'pareto-core-lib'

import * as api from "../api"

export const $$: api.CgenerateInterface = ($d) => {
    return ($, $i) => {
        $i.directory("types", ($i) => {
            $i.file("ts_api.generated.ts", ($i) => {
                $d.generateTypes($.generation, $i)
            })
        })
        $i.directory("interfaces", ($i) => {
            $i.file("visitor.generated.ts", ($i) => {
                $d.generateVisitorInterface($.generation, $i)
            })
        })
        $i.directory("algorithms", ($i) => {
            $i.file("algorithms.generated.ts", ($i) => {
                $d.generateVisitorInterface($.generation, $i)
            })
        })
        $i.file("index.ts", ($i) => {
            $d.generateInterfaceIndex($.generation, $i)
        })
    }
}