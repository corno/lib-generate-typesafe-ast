
import * as ps from 'pareto-core-state'
import * as pa from 'pareto-core-async'

import * as gpub from "../../../../../pub"
import * as gtest from "lib-pareto-test"

import { $ as grammar } from "../../../data/typescriptGrammar_old.data"

import { CgetTestSet } from "../api"

export const $$:CgetTestSet = ($) => {
    gpub.$a.serialize({})({
        'rootPath': [$.testDirectory, "serialized"],
        'grammar': grammar
    })

    gpub.$a.serializeToNew({})({
        'rootPath': [$.testDirectory, "serialized"],
        'grammar': grammar
    })

    gpub.$a.generateInterface(
        {
            rootPath: [$.testDirectory, "out", "src", "interface"],
            generation: {
                grammar: grammar,
            },
        },
    )
    gpub.$a.generateImplementation(
        {
            rootPath: [$.testDirectory, "out", "src", "imp"],
            generation: {
                grammar: grammar,
                pathToInterface: "../interface",
            },
        },
    )

    const builder = ps.createUnsafeDictionaryBuilder<gtest.T.TestElement>()
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