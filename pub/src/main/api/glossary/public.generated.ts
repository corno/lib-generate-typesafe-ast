import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as mcommon from "glo-pareto-common"
import * as mfp from "lib-fountain-pen"

export type TCardinality = t.UCardinality

export type TComposite = t.UComposite

export type TGenerateImplementationData = t.UGenerateImplementationData

export type TGenerateInterfaceData = t.UGenerateInterfaceData

export type TGrammar = t.UGrammar

export type TLeaf = t.ULeaf

export type TNode2 = t.UNode2

export type TOptions = t.UOptions

export type TSequenceElement = t.USequenceElement

export type TValue = t.UValue

export type TValueType = t.UValueType

export type FGenerateImplementation = ($: TGenerateImplementationData, $i: mfp.ILine,) => void

export type FGenerateInterface = ($: TGenerateInterfaceData, $i: mfp.ILine,) => void