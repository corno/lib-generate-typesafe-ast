import * as pd from 'pareto-core-dev'

import * as g_fp from "lib-fountain-pen"
import * as g_resolved from "../../submodules/grammar_resolved_old"
import * as g_private from "../../submodules/private"
import * as g_tostring from "res-pareto-tostring"
import * as g_build from "res-pareto-build"

import { $$ as ugImp } from "./unboundGenerateImplementation.s.p"

import { A } from "../api.generated"

export const $$: A.generateImplementation = () => {
    return ($) => {

        g_fp.$b.createDirectory({},{
            'onError': ($) => {
                pd.logDebugMessage("FSDFSDSFDFSDFS")
            },
            'reportSuperfluousNode': ($) => {
                pd.logDebugMessage("SDSFS")
            },
        })([$.rootPath], ($i) => {
            ugImp({
                'generateCreateDefaultVisitor': g_private.$a.generateCreateDefaultVisitor({
                    'sortedForEach': dfe
                }),
                'generateImplementationIndex': g_private.$a.generateImplementationIndex,
                'generateParser': g_private.$a.generateParser({
                    'getKeysAsString': g_tostring.$a.getKeysAsString({
                        'maximum': [false],
                        'separator': ", ",
                    }, {}),
                    'sortedForEach': dfe,
                    'buildDictionary': g_build.$a.buildDictionary,
                }),
                'generateVisit': g_private.$a.generateVisit({
                    'sortedForEach': dfe,
                }),
                'resolve': g_resolved.$a.resolve,
            })($, $i)
        })
    }
}