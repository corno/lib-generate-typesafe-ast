
import * as pt from "pareto-core-types"

import * as fp from "lib-fountain-pen"
import * as collation from "api-pareto-collation"


import { TGrammar } from "./types/types"

export type TPath = pt.Nested<string>


export type TGenerateImplementationFile_Data = {
    readonly "grammar": TGrammar
    readonly "pathToInterface": string
}

export type XGenerateImplementation = (
    $: {
        fpSettings: fp.TConfiguration,
        generation: TGenerateImplementationFile_Data
    },
    $d: {
        createWriteStream: (
            $: {
                path: TPath,
            },
            callback: ($: fp.IStreamConsumer) => void
        ) => void
        isYinBeforeYang: collation.IsYinBeforeYang
    }
) => void


export type TGenerateInterfaceFile_Data = {
    readonly "grammar": TGrammar
}


export type XGenerateInterface = (
    $: {
        fpSettings: fp.TConfiguration,
        generation: TGenerateInterfaceFile_Data
    },
    $d: {
        createWriteStream: (
            $: {
                path: TPath,
            },
            callback: ($: fp.IStreamConsumer) => void
        ) => void
        isYinBeforeYang: collation.IsYinBeforeYang
    }
) => void