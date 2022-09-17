
import * as pt from "pareto-core-types"

import * as fp from "lib-fountain-pen"

import { TGrammar } from "../types/types.p"
import { DDependencies } from "../dependencies/dependencies.p"

export type FGenerateImplementation = (
    $: {
        readonly "rootPath": string,
        readonly "fpSettings": fp.TConfiguration,
        readonly "generation": {
            readonly "grammar": TGrammar
            readonly "pathToInterface": string
        }

    },
    $d: DDependencies,
    $a: pt.ProcessAsyncValue,
) => void

export type FGenerateInterface = (
    $: {
        readonly "rootPath": string,
        readonly "fpSettings": fp.TConfiguration,
        readonly "generation": {
            readonly "grammar": TGrammar
        }

    },
    $d: DDependencies,
    $a: pt.ProcessAsyncValue
) => void