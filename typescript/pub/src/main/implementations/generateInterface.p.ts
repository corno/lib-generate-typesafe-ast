import * as pd from 'pareto-core-dev'

import * as gfp from "lib-fountain-pen"
import * as gprivate from "../../submodules/private"
import * as gforeach from "res-pareto-foreach"
import * as gcoll from "res-pareto-collation"
import * as gtostring from "res-pareto-tostring"

import { $$ as ugIf } from "./unboundGenerateInterface.p"

import { CgenerateInterface } from "../api"

export const $$:CgenerateInterface = ($) => {

    const dfe = gforeach.$a.createDictionaryForEach({
        'compare': gcoll.$a.localeIsABeforeB,
    })
    gfp.$a.createDirectory({
        'onError': ($) => {
            pd.logDebugMessage("FSDFSDSFDFSDFS")
        },
        'reportSuperfluousNode': ($) => {
            pd.logDebugMessage("SDSFS")
        },
    })([$.rootPath], ($i) => {
        ugIf({
            'generateFunctions': gprivate.$a.generateFunctions({

            }),
            'generateInterfaceIndex': gprivate.$a.generateInterfaceIndex,
            'generateTypes': gprivate.$a.generateTypes({
                'joinNestedStrings': gtostring.$a.joinNestedStrings({
                    'separator': "_",
                    'maximum': [false],
                }, {}),
                'sortedForEach': dfe,
            }),
            'generateVisitorInterface': gprivate.$a.generateVisitorInterface({
                'sortedForEach': dfe,
            }),

        })($, $i)
    })
}