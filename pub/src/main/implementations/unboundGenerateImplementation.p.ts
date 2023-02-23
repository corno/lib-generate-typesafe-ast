import * as pv from 'pareto-core-dev'


import * as gprivate from "../../submodules/private"

import { CunboundGenerateImplementation } from "../api"

export const $$:CunboundGenerateImplementation = ($d) => {

    return ($, $i) => {
        const grammar = $d.resolve($.generation.grammar, ($) => {
            pv.implementMe("CREATE ERROR MESSAGE")
        })
        if (grammar[0] === true) {
            const generation: gprivate.T.GenerateImplementationFileData = {
                'pathToInterface': $.generation.pathToInterface,
                'grammar': grammar[1],
            }

            $i.file("createDefaultVisitor.generated.ts", ($i) => {
                $d.generateCreateDefaultVisitor(generation, $i)
            })
            $i.file("parse.generated.ts", ($i) => {
                $d.generateParser(generation, $i)
            })
            $i.file("visit.generated.ts", ($i) => {
                $d.generateVisit(generation, $i)
            })
            $i.directory("public", ($i) => {
            })
            $i.file("index.ts", ($i) => {
                $d.generateImplementationIndex(generation, $i)
            })
        } else {
            pv.implementMe("RESOLVE GRAMMAR")
        }
    }
}