import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as def from "../../submodules/definition"

import * as mfp from "lib-fountain-pen"
import * as mforeach from "res-pareto-foreach"
import * as mcollation from "res-pareto-collation"

export const $$: api.Cserialize = ($d) => {
    return ($) => {
        mfp.$a.createWriter({
            'onError': ($) => {
                pl.logDebugMessage("FSDFSDSFDFSDFS")
            },
            'reportSuperfluousNode': ($) => {
                pl.logDebugMessage("SDSFS")
            },
        })([$.rootPath], ($i) => {
            $i.file("newserialized.data.ts", ($i) => {
                def.$a.serializeToNew({
                    "dictionaryForEach": mforeach.$a.createDictionaryForEach({
                        "compare": mcollation.$a.localeIsABeforeB
                    })
                })($.grammar, $i)
            })
        })
    }
}