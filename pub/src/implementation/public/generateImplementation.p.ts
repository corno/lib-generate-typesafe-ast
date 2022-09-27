import * as pl from "pareto-core-lib"

import * as fp from "lib-fountain-pen"
import * as fs from "api-pareto-filesystem"

import * as api from "../../interface"

import { p_generateParser } from "../private/generateParser.p"
import { p_generateVisit } from "../private/generateVisit.p"
import { p_generateCreateDefaultVisitor } from "../private/generateCreateDefaultVisitor.p"
import { p_generateImplementationIndex } from "../private/generateImplementationIndex.p"
import { FGenerateImplementationFile } from "../types/functions.p"

export const p_generateImplementation: api.FGenerateImplementation = ($, $d, $a) => {
    const conf = $
    const deps = $d

    function generateFile(
        $: fs.TPath,
        $d: {
            func: FGenerateImplementationFile,
        }
    ) {

        deps.createWriteStream(
            {
                path: $,
                createContainingDirectories: true,
            },
            ($i) => {
                fp.f_createContext(
                    conf.fpSettings,
                    ($c) => {
                        $d.func(
                            conf.generation,
                            {
                                block: $c,
                            },
                            deps.generateImp
                        )
                    },
                    $i,
                    deps.fp,

                )
            },
            {
                onError: ($) => {
                    pl.implementMe("!!!!")
                }
            },
            $a,
        )
    }
    generateFile(
        'public/parse.generated.ts',
        {
            func: p_generateParser
        },
    )
    generateFile(
        'public/visit.generated.ts',
        {
            func: p_generateVisit
        },
    )
    generateFile(
        'public/createDefaultVisitor.generated.ts',
        {
            func: p_generateCreateDefaultVisitor
        },
    )
    generateFile(
        'index.ts',
        {
            func: p_generateImplementationIndex
        },
    )

}
