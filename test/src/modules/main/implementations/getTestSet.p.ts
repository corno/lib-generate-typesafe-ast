
import * as pm from 'pareto-core-state'
import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as pub from "../../../../../pub"

import * as mtest from "lib-pareto-test"

export const $$: api.CgetTestSet = ($) => {

    pub.$a.generateInterface(
        {
            rootPath: [$.testDirectory, "out", "src", "interface"],
            fpSettings: config.config.fp,
            generation: {
                grammar: config.grammar,
            },
        },
        // {
        //     onError: ($) => {
        //         pl.panic(`write file stream error: ${$.error[0]}, ${$.error[1]}, ${$.path}`)
        //     }
        // },
        $d,
        $a,
    )
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

    const builder = pm.createUnsafeDictionaryBuilder<mtest.TTestElement>()
    function createTest(name: string, actual: string, expected: string) {
        builder.add(name, {
            type: ["test", {
                type: ["short string", {
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