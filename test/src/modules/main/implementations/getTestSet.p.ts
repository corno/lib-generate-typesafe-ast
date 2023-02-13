
import * as pm from 'pareto-core-state'
import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as pub from "../../../../../pub"

import * as mtest from "lib-pareto-test"

import { $ as grammar } from "../../../data/typescriptGrammar.data"

export const $$: api.CgetTestSet = ($) => {


    pub.$a.serialize({})({
        'rootPath': [$.testDirectory, "serialized"],
        'grammar': grammar
    })

    pub.$a.generateInterface(
        {
            rootPath: [$.testDirectory, "out", "src", "interface"],
            generation: {
                grammar: grammar,
            },
        },
    )
    pub.$a.generateImplementation(
        {
            rootPath: [$.testDirectory, "out", "src", "imp"],
            generation: {
                grammar: grammar,
                pathToInterface: "../interface",
            },
        },
    )

    const builder = pm.createUnsafeDictionaryBuilder<mtest.T.TestElement>()
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