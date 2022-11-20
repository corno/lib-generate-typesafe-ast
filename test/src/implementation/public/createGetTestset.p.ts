
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"

import * as test from "lib-pareto-test"

import * as api from "../../interface"

import * as pub from "../../../../pub"

export const createGetTestset: api.FCreateGetTestset = ($, $d) => {
    const config = $
    //const cws = $d.createWriteStream
    return ($, $a) => {

        // pub.p_generateInterface(
        //     {
        //         rootPath: [$.testDirectory, "out", "src", "interface"],
        //         fpSettings: config.config.fp,
        //         generation: {
        //             grammar: config.grammar,
        //         },
        //     },
        //     // {
        //     //     onError: ($) => {
        //     //         pl.panic(`write file stream error: ${$.error[0]}, ${$.error[1]}, ${$.path}`)
        //     //     }
        //     // },
        //     $d,
        //     $a,
        // )
        // pub.p_generateImplementation(
        //     {
        //         rootPath: [$.testDirectory, "out", "src", "imp"],
        //         fpSettings: config.config.fp,
        //         generation: {
        //             grammar: config.grammar,
        //             pathToInterface: "../interface",
        //         },
        //     },
        //     // {
        //     //     onError: ($) => {
        //     //         pl.panic(`write file stream error: ${$.error[0]}, ${$.error[1]}, ${$.path}`)
        //     //     }
        //     // },
        //     $d,
        //     $a,
        // )

        const builder = pm.createUnsafeDictionaryBuilder<test.TTestElement>()
        function createTest(name: string, actual: string, expected: string) {
            builder.add(name, {
                type: ["test", {
                    type: ["simple string", {
                        actual: actual,
                        expected: expected
                    }]
                }]
            })
        }

        return pl.asyncValue({
            elements: builder.getDictionary()
        })
    }
}