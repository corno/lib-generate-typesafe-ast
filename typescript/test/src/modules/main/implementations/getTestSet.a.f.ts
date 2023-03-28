
import * as ps from 'pareto-core-state'
import * as pa from 'pareto-core-async'

import * as g_pub from "../../../../../pub/dist"
import * as g_test from "lib-pareto-test"

// import { $ as grammar } from "../../../data/typescriptGrammar_old.data"

import { A } from "../api.generated"

export const $$: A.getTestSet = () => {
    return ($) => {
        // g_pub.$a.serialize({})({
        //     'rootPath': [$.testDirectory, "serialized"],
        //     'grammar': grammar
        // })

        // g_pub.$a.serializeToNew({})({
        //     'rootPath': [$.testDirectory, "serialized"],
        //     'grammar': grammar
        // })

        // g_pub.$a.generateInterface(
        //     {
        //         rootPath: [$.testDirectory, "out", "src", "interface"],
        //         generation: {
        //             grammar: grammar,
        //         },
        //     },
        // )
        // g_pub.$a.generateImplementation(
        //     {
        //         rootPath: [$.testDirectory, "out", "src", "imp"],
        //         generation: {
        //             grammar: grammar,
        //             pathToInterface: "../interface",
        //         },
        //     },
        // )

        const builder = ps.createUnsafeDictionaryBuilder<g_test.T.TestElement>()
        function createTest(name: string, actual: string, expected: string) {
            builder.add(name, {
                'type': ['test', {
                    type: ['short string', {
                        actual: actual,
                        expected: expected
                    }]
                }]
            })
        }

        return pa.asyncValue({
            elements: builder.getDictionary()
        })
    }
}