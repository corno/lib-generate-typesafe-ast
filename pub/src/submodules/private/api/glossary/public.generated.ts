import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as mfp from "lib-fountain-pen"
import * as mmain from "../../../../main"

export type TGenerateImplementationFileData = t.UGenerateImplementationFileData

export type TGenerateInterfaceFileData = t.UGenerateInterfaceFileData

export type FGenerateImplementationFile = ($: TGenerateImplementationFileData, $i: mfp.IBlock,) => void

export type FGenerateInterfaceFile = ($: TGenerateInterfaceFileData, $i: mfp.IBlock,) => void