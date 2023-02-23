import * as pd from 'pareto-core-dev'


import * as gfp from "lib-fountain-pen"
import * as gresolved from "../../submodules/resolved"
import * as gprivate from "../../submodules/private"
import * as gforeach from "res-pareto-foreach"
import * as gcoll from "res-pareto-collation"
import * as gtostring from "res-pareto-tostring"

import { $$ as ugImp } from "./unboundGenerateImplementation.p"

import { CgenerateImplementation } from "../api"

export const $$:CgenerateImplementation = ($) => {

    const dfe = gforeach.$a.createDictionaryForEach({
        'compare': gcoll.$a.localeIsABeforeB,
    })
    gfp.$a.createWriter({
        'onError': ($) => {
            pd.logDebugMessage("FSDFSDSFDFSDFS")
        },
        'reportSuperfluousNode': ($) => {
            pd.logDebugMessage("SDSFS")
        },
    })([$.rootPath], ($i) => {
        ugImp({
            'generateCreateDefaultVisitor': gprivate.$a.generateCreateDefaultVisitor({
                'sortedForEach': dfe
            }),
            'generateImplementationIndex': gprivate.$a.generateImplementationIndex,
            'generateParser': gprivate.$a.generateParser({
                'getKeysAsString': gtostring.$a.getKeysAsString({
                    'maximum': [false],
                    'separator': ", ",
                }, {}),
                'sortedForEach': dfe,
            }),
            'generateVisit': gprivate.$a.generateVisit({
                'sortedForEach': dfe,
            }),
            'resolve': gresolved.$a.resolve,
        })($, $i)
    })
}