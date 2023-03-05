import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"
import * as g_definition from "../../../submodules/grammar_old"
import * as g_fp from "lib-fountain-pen"

export namespace I {}

export namespace B {}

export namespace F {
    
    export type GenerateImplementation = ($: T.GenerateImplementationData,) => void
    
    export type GenerateInterface = ($: T.GenerateInterfaceData,) => void
}