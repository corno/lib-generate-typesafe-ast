import * as pv from 'pareto-core-dev'

import * as g_def from "../../submodules/grammar_old"
import * as g_fp from "lib-fountain-pen"
import * as g_foreach from "res-pareto-foreach"

import { A } from "../api.generated"

export const $$: A.serialize = () => {
    return ($) => {
        g_fp.$a.createDirectory({
            'onError': ($) => {
                pv.logDebugMessage("FSDFSDSFDFSDFS")
            },
            'reportSuperfluousNode': ($) => {
                pv.logDebugMessage("SDSFS")
            },
        })([$.rootPath], ($i) => {
            $i.file("serialized.data.ts", ($i) => {
                g_def.$a.serialize({
                    "dictionaryForEach": g_foreach.$a.createDictionaryForEach({
                        "compare": g_collation.$a.localeIsABeforeB
                    })
                })($.grammar, $i)
            })
        })
    }
}