
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"

import * as test from "lib-pareto-test"

import * as api from "../../interface"

import * as pub from "../../../../pub"

export const createGetTestset: api.FCreateGetTestset = ($, $a) => {
    const config = $
    const cws = $d.createWriteStream
    const yinBeforeYang = $d.isYinBeforeYang
    return ($, $d) => {

        pub.p_generateInterface(
            {
                rootPath: [$.testDirectory, "out", "src", "interface"],
                grammar: config.typescriptGrammar,
            },
            // {
            //     onError: ($) => {
            //         pl.panic(`write file stream error: ${$.error[0]}, ${$.error[1]}, ${$.path}`)
            //     }
            // },
            {
                startAsync: $d.startAsync,
                createWriteStream: cws,
                isYinBeforeYang: yinBeforeYang
            },
            $a,
        )
        pub.generateImplementation(
            {
                rootPath: [$.testDirectory, "out", "src", "imp"],
                grammar: config.typescriptGrammar,
                pathToInterface: "../interface",
            },
            // {
            //     onError: ($) => {
            //         pl.panic(`write file stream error: ${$.error[0]}, ${$.error[1]}, ${$.path}`)
            //     }
            // },
            {
                startAsync: $d.startAsync,
                createWriteStream: cws,
                isYinBeforeYang: yinBeforeYang,
            }
        )

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

        return pa.value({
            elements: builder.getDictionary()
        })
    }
}