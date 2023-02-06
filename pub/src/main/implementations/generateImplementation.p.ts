import * as pl from "pareto-core-lib"

import * as api from "../api"

import * as mfp from "lib-fountain-pen"
import * as mcommon from "glo-pareto-common"
//import * as fs from "api-pareto-filesystem"

import * as mprivate from "../../private"

export const igenerateImplementation: api.CgenerateImplementation = ($d) => {
    return ($) => {
        const conf = $
        const deps = $d

        function generateFile(
            $: mcommon.TPath,
            $d: {
                func: mprivate.XGenerateImplementationFile,
            }
        ) {

            deps.createWriteStream(
                {
                    path: $,
                    createContainingDirectories: true,
                },
                ($i) => {
                    mfp.f_createContext(
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
                func: mprivate.$a.generateParser
            },
        )
        generateFile(
            'public/visit.generated.ts',
            {
                func:  mprivate.$a.generateVisit
            },
        )
        generateFile(
            'public/createDefaultVisitor.generated.ts',
            {
                func:  mprivate.$a.generateCreateDefaultVisitor
            },
        )
        generateFile(
            'index.ts',
            {
                func:  mprivate.$a.generateImplementationIndex
            },
        )

    }
}