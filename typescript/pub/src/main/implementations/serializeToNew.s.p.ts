import * as pv from 'pareto-core-dev'

import * as g_def from "../../submodules/grammar_old"
import * as g_fp from "lib-fountain-pen"
import * as g_foreach from "res-pareto-foreach"
import * as g_collation from "res-pareto-collation"

import { A } from "../api.generated"

export const $$: A.serializeToNew = () => {
    return ($) => {
        g_fp.$b.createDirectory()({
            'onError': ($) => {
                pv.logDebugMessage("FSDFSDSFDFSDFS")
            },
            'reportSuperfluousNode': ($) => {
                pv.logDebugMessage("SDSFS")
            },
        })([$.rootPath], ($i) => {
            $i.file("newserialized.data.ts", ($i) => {
                g_def.$a.serializeToNew({
                    "dictionaryForEach": g_foreach.$a.createDictionaryForEach({
                        "compare": g_collation.$a.localeIsABeforeB
                    })
                })($.grammar, $i)
            })
        })
    }
}