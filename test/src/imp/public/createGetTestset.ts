
import * as pa from "pareto-core-async"
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"

import * as fs from "api-pareto-filesystem"
import * as test from "lib-pareto-test"

import * as collation from "api-pareto-collation"

import * as api from "../../interface"


import * as pub from "../../../../pub"

export const createGetTestset: api.FCreateGetTestset = ($, $d) => {
    const config = $
    const cws = $d.createWriteStream
    const yinBeforeYang = $d.isYinBeforeYang
    return ($, $d) => {

        pub.generateInterface(
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
            }
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

        const builder = pm.createDictionaryBuilder<test.TTestElement>(
            ["ignore", {}],
            () => {
                pl.panic("duplicate key")
            }
        )
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