
import * as ps from 'pareto-core-state'
import * as pa from 'pareto-core-async'

import * as mapi from "../api"
import * as mpub from "../../../../../pub"
import * as mtest from "lib-pareto-test"

import { $ as grammar } from "../../../data/typescriptGrammar_old.data"

export const $$: mapi.CgetTestSet = ($) => {
    mpub.$a.serialize({})({
        'rootPath': [$.testDirectory, "serialized"],
        'grammar': grammar
    })

    mpub.$a.serializeToNew({})({
        'rootPath': [$.testDirectory, "serialized"],
        'grammar': grammar
    })

    mpub.$a.generateInterface(
        {
            rootPath: [$.testDirectory, "out", "src", "interface"],
            generation: {
                grammar: grammar,
            },
        },
    )
    mpub.$a.generateImplementation(
        {
            rootPath: [$.testDirectory, "out", "src", "imp"],
            generation: {
                grammar: grammar,
                pathToInterface: "../interface",
            },
        },
    )

    const builder = ps.createUnsafeDictionaryBuilder<mtest.T.TestElement>()
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