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
        })([], ($i) => {
            $i.file("FOOOBAR.ts", ($i) => {
                pl.logDebugMessage("JA HOOR")
                def.$a.serialize({
                    "dictionaryForEach": mforeach.$a.createDictionaryForEach({
                        "compare": mcollation.$a.localeIsABeforeB
                    })
                })($, $i)
            })
        })
    }
}