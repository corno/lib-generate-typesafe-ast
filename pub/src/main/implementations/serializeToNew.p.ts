import * as pv from 'pareto-core-dev'

import * as gdef from "../../submodules/grammar_old"
import * as gfp from "lib-fountain-pen"
import * as gforeach from "res-pareto-foreach"
import * as gcollation from "res-pareto-collation"

import { Cserialize } from "../api"

export const $$:Cserialize = ($d) => {
    return ($) => {
        gfp.$a.createDirectory({
            'onError': ($) => {
                pv.logDebugMessage("FSDFSDSFDFSDFS")
            },
            'reportSuperfluousNode': ($) => {
                pv.logDebugMessage("SDSFS")
            },
        })([$.rootPath], ($i) => {
            $i.file("newserialized.data.ts", ($i) => {
                gdef.$a.serializeToNew({
                    "dictionaryForEach": gforeach.$a.createDictionaryForEach({
                        "compare": gcollation.$a.localeIsABeforeB
                    })
                })($.grammar, $i)
            })
        })
    }
}