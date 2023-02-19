import * as pv from 'pareto-core-dev'

import * as api from "../api"

import * as mfp from "lib-fountain-pen"

import { $$ as ugIf } from "./unboundGenerateInterface.p"

import * as mprivate from "../../submodules/private"
import * as mforeach from "res-pareto-foreach"
import * as mcoll from "res-pareto-collation"
import * as mtostring from "res-pareto-tostring"

export const $$: api.CgenerateInterface = ($) => {

    const dfe = mforeach.$a.createDictionaryForEach({
        'compare': mcoll.$a.localeIsABeforeB,
    })
    mfp.$a.createWriter({
        'onError': ($) => {
            pv.logDebugMessage("FSDFSDSFDFSDFS")
        },
        'reportSuperfluousNode': ($) => {
            pv.logDebugMessage("SDSFS")
        },
    })([$.rootPath], ($i) => {
        ugIf({
            'generateFunctions': mprivate.$a.generateFunctions({

            }),
            'generateInterfaceIndex': mprivate.$a.generateInterfaceIndex,
            'generateTypes': mprivate.$a.generateTypes({
                'joinNestedStrings': mtostring.$a.joinNestedStrings({
                    'separator': "_",
                    'maximum': [false],
                }, {}),
                'sortedForEach': dfe,
            }),
            'generateVisitorInterface': mprivate.$a.generateVisitorInterface({
                'sortedForEach': dfe,
            }),

        })($, $i)
    })
}