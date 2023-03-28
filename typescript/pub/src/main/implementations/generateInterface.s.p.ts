import * as pd from 'pareto-core-dev'

import * as g_fp from "lib-fountain-pen"
import * as g_private from "../../submodules/private"
import * as g_foreach from "res-pareto-foreach"
import * as g_coll from "res-pareto-collation"
import * as g_tostring from "res-pareto-tostring"

import { $$ as ugIf } from "./unboundGenerateInterface.s.p"

import { A } from "../api.generated"

export const $$: A.generateInterface = ($) => {

    const dfe = g_foreach.$a.createDictionaryForEach({
        'compare': g_coll.$a.localeIsABeforeB,
    })
    g_fp.$a.createDirectory({
        'onError': ($) => {
            pd.logDebugMessage("FSDFSDSFDFSDFS")
        },
        'reportSuperfluousNode': ($) => {
            pd.logDebugMessage("SDSFS")
        },
    })([$.rootPath], ($i) => {
        ugIf({
            'generateFunctions': g_private.$a.generateFunctions({

            }),
            'generateInterfaceIndex': g_private.$a.generateInterfaceIndex,
            'generateTypes': g_private.$a.generateTypes({
                'joinNestedStrings': g_tostring.$a.joinNestedStrings({
                    'separator': "_",
                    'maximum': [false],
                }, {}),
                'sortedForEach': dfe,
            }),
            'generateVisitorInterface': g_private.$a.generateVisitorInterface({
                'sortedForEach': dfe,
            }),

        })($, $i)
    })
}