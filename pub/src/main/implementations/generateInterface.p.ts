import * as pl from "pareto-core-lib"

import * as api from "../api"

import * as mfp from "lib-fountain-pen"
import * as mcommon from "glo-pareto-common"
import * as mprivate from "../../private"

export const igenerateInterface: api.CgenerateInterface = ($d) => {
    return ($) => {

        const conf = $

        function generateFile(
            $: mcommon.TPath,
            $x: {
                func: mprivate.XGenerateInterfaceFile,
            }
        ) {

            $d.createWriteStream(
                {
                    path: $,
                    createContainingDirectories: true,
                },
                ($i) => {
                    mfp.$a.createUnboundFountainPen(
                        conf.fpSettings,
                        ($i) => {
                            $x.func(
                                conf.generation,
                                {
                                    block: $i,
                                },
                                $d.generateInf
                            )

                        },
                        $i,
                        $d.fp,

                    )
                },
                {
                    onError: ($) => {
                        pl.implementMe("@#@#$@")
                    }
                },
            )
        }

        generateFile(
            'types/ts_api.generated.ts',
            {
                func: mprivate.$a.generateTypes
            },
        )
        generateFile(
            'interfaces/visitor.generated.ts',
            {
                func: mprivate.$a.generateVisitorInterface
            },
        )
        generateFile(
            'algorithms/algorithms.generated.ts',
            {
                func: mprivate.$a.generateVisitorInterface
            },
        )
        generateFile(
            'index.ts',
            {
                func: mprivate.$a.generateInterfaceIndex
            },
        )
    }
}