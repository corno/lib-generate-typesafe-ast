import * as pd from 'pareto-core-data'
import * as pt from 'pareto-core-types'
import * as pv from 'pareto-core-dev'

import * as gliana2pareto from "lib-liana/dist/submodules/liana2pareto"

import { $ as grammar } from "./models/grammar.data"

pv.logDebugMessage("REENABLE")

export const $: pt.Array<gliana2pareto.T.GenerateModuleData<pd.SourceLocation>> = pd.a([
    // {
    //     'path': `../../pareto/src/data/submodules/grammar`,
    //     'data': {
    //         'configuration': {
    //             'datamodel': [true, {
    //                 'annotations': true,
    //                 'properties optional': false,
    //                 'reference mapping': ['string', null],
    //             }],
    //             'visitor interface': [false],
    //             'algorithms': {
    //                 'serialize': [false],
    //             },
    //         },
    //         'mappedModel': {
    //             'model': grammar,

    //             'stringmapping': pd.d({
    //                 "identifier": ['string', null]
    //             }),
    //         },
    //     }
    // },

    // {
    //     'path': `../../pareto/src/data/submodules/grammar_resolved`,
    //     'data': {
    //         'configuration': {
    //             'datamodel': [true, {
    //                 'annotations': true,
    //                 'properties optional': false,
    //                 'reference mapping': ['reference and string', null],
    //             }],
    //             'visitor interface': [false],
    //             'algorithms': {
    //                 'serialize': [false],
    //             },
    //         },
    //         'mappedModel': {
    //             'model': grammar,

    //             'stringmapping': pd.d({
    //                 "identifier": ['string', null]
    //             }),
    //         },
    //     }
    // }
])