import * as pv from 'pareto-core-dev'

import * as api from "../api"

import * as def from "../../submodules/definition"

import * as mfp from "lib-fountain-pen"
import * as mforeach from "res-pareto-foreach"
import * as mcollation from "res-pareto-collation"

export const $$: api.Cserialize = ($d) => {
    return ($) => {
        mfp.$a.createWriter({
            'onError': ($) => {
                pv.logDebugMessage("FSDFSDSFDFSDFS")
            },
            'reportSuperfluousNode': ($) => {
                pv.logDebugMessage("SDSFS")
            },
        })([$.rootPath], ($i) => {
            $i.file("serialized.data.ts", ($i) => {
                def.$a.serialize({
                    "dictionaryForEach": mforeach.$a.createDictionaryForEach({
                        "compare": mcollation.$a.localeIsABeforeB
                    })
                })($.grammar, $i)
            })
        })
    }
}