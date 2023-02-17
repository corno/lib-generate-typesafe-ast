import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mfp from "lib-fountain-pen"

import { $$ as ugImp } from "./unboundGenerateImplementation.p"

import * as mresolved from "../../submodules/resolved"
import * as mprivate from "../../submodules/private"
import * as mforeach from "res-pareto-foreach"
import * as mcoll from "res-pareto-collation"
import * as mtostring from "res-pareto-tostring"

export const $$: api.CgenerateImplementation = ($) => {

    const dfe = mforeach.$a.createDictionaryForEach({
        'compare': mcoll.$a.localeIsABeforeB,
    })
    mfp.$a.createWriter({
        'onError': ($) => {
            pl.logDebugMessage("FSDFSDSFDFSDFS")
        },
        'reportSuperfluousNode': ($) => {
            pl.logDebugMessage("SDSFS")
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