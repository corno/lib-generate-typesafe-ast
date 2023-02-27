import * as pv from 'pareto-core-dev'

import * as gdef from "../../submodules/definition"
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
            $i.file("serialized.data.ts", ($i) => {
                gdef.$a.serialize({
                    "dictionaryForEach": gforeach.$a.createDictionaryForEach({
                        "compare": gcollation.$a.localeIsABeforeB
                    })
                })($.grammar, $i)
            })
        })
    }
}