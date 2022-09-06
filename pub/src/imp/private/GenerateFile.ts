import * as api from "../../interface"

import * as collation from "api-pareto-collation"

import * as fp from "lib-fountain-pen"



export type XGenerateInterfaceFile = (
    $: {
        grammar: api.TGrammar
    },
    $i: {
        block: fp.IBlock,
    },
    $d: {
        isYinBeforeYang: collation.IsYinBeforeYang
    },
)  => void


export type XGenerateImplementationFile = (
    $: {
        pathToInterface: string
        grammar: api.TGrammar
    },
    $i: {
        block: fp.IBlock,
    },
    $d: {
        sortedForEach: collation.XSortedForEach
    },
)  => void