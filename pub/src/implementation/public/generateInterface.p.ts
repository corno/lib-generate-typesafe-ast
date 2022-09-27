import * as pl from "pareto-core-lib"

import * as fp from "lib-fountain-pen"
import * as fs from "api-pareto-filesystem"

import * as api from "../../interface"

import { p_generateTypes } from "../private/generateTypes.p"
import { p_generateVisitorInterface } from "../private/generateVisitorInterface.p"
import { p_generateInterfaceIndex } from "../private/generateInterfaceIndex.p"
import { FGenerateInterfaceFile } from "../types/functions.p"

export const p_generateInterface: api.FGenerateInterface = ($, $d, $a) => {

    const conf = $
    const deps = $d

    function generateFile(
        $: fs.TPath,
        $d: {
            func: FGenerateInterfaceFile,
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
                    ($i) => {
                        $d.func(
                            conf.generation,
                            {
                                block: $i,
                            },
                            deps.generateInf
                        )

                    },
                    $i,
                    deps.fp,

                )
            },
            {
                onError: ($) => {
                    pl.implementMe("@#@#$@")
                }
            },
            $a
        )
    }

    generateFile(
        'types/ts_api.generated.ts',
        {
            func: p_generateTypes
        }
        ,
    )
    generateFile(
        'interfaces/visitor.generated.ts',
        {
            func: p_generateVisitorInterface
        }
        ,
    )
    generateFile(
        'algorithms/algorithms.generated.ts',
        {
            func: p_generateVisitorInterface
        }
        ,
    )
    generateFile(
        'index.ts',
        {
            func: p_generateInterfaceIndex
        }
        ,
    )
}
