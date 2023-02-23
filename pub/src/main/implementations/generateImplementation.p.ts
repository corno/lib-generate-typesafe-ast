import * as pd from 'pareto-core-dev'

import * as mapi from "../api"
import * as mfp from "lib-fountain-pen"
import * as mresolved from "../../submodules/resolved"
import * as mprivate from "../../submodules/private"
import * as mforeach from "res-pareto-foreach"
import * as mcoll from "res-pareto-collation"
import * as mtostring from "res-pareto-tostring"

import { $$ as ugImp } from "./unboundGenerateImplementation.p"

export const $$: mapi.CgenerateImplementation = ($) => {

    const dfe = mforeach.$a.createDictionaryForEach({
        'compare': mcoll.$a.localeIsABeforeB,
    })
    mfp.$a.createWriter({
        'onError': ($) => {
            pd.logDebugMessage("FSDFSDSFDFSDFS")
        },
        'reportSuperfluousNode': ($) => {
            pd.logDebugMessage("SDSFS")
        },
    })([$.rootPath], ($i) => {
        ugImp({
            'generateCreateDefaultVisitor': mprivate.$a.generateCreateDefaultVisitor({
                'sortedForEach': dfe
            }),
            'generateImplementationIndex': mprivate.$a.generateImplementationIndex,
            'generateParser': mprivate.$a.generateParser({
                'getKeysAsString': mtostring.$a.getKeysAsString({
                    'maximum': [false],
                    'separator': ", ",
                }, {}),
                'sortedForEach': dfe,
            }),
            'generateVisit': mprivate.$a.generateVisit({
                'sortedForEach': dfe,
            }),
            'resolve': mresolved.$a.resolve,
        })($, $i)
    })
}