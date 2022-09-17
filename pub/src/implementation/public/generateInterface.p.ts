import * as pl from "pareto-core-lib"

import * as fp from "lib-fountain-pen"

import * as api from "../../interface"

import { p_generateTypes } from "../private/generateTypes.p"
import { p_generateVisitorInterface } from "../private/generateVisitorInterface.p"
import { p_generateInterfaceIndex } from "../private/generateInterfaceIndex.p"
import { FGenerateInterfaceFile } from "../types/functions.p"

export const p_generateInterface: api.FGenerateInterface = ($, $d, $a) => {

    const conf = $
    const deps = $d

    function generateFile(
        filePath: api.TPath,
        func: FGenerateInterfaceFile,
    ) {

        $d.createWriteStream(
            {
                path: filePath,
                createContainingDirectories: true,
            },
            ($i) => {
                fp.f_createContext(
                    $.fpSettings,
                    ($i) => {
                        func(
                            $.generation,
                            {
                                block: $i,
                            },
                            {
                                sortedForEach: $d.sortedForEach,
                                joinNestedStrings: $d.joinNestedStrings,
                            }
                        )

                    },
                    $i,
                    $d,

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
        p_generateTypes,
    )
    generateFile(
        'interfaces/visitor.generated.ts',
        p_generateVisitorInterface,
    )
    generateFile(
        'algorithms/algorithms.generated.ts',
        p_generateVisitorInterface,
    )
    generateFile(
        'index.ts',
        p_generateInterfaceIndex,
    )
}
