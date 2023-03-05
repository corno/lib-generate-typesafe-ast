import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_def from "../../../grammar"
import * as g_liana from "lib-liana/dist/submodules/liana"

export namespace I {}

export namespace B {}

export namespace F {
    
    export type Map2Liana = <GAnnotation>($: g_def.T.Grammar<T.Annotation<GAnnotation>>,) => g_liana.T.Model<T.OutAnnotation<GAnnotation>>
}