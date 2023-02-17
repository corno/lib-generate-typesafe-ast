import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"
import * as mdefinition from "../../../submodules/definition"
import * as mfp from "lib-fountain-pen"

export type FGenerateImplementation = ($: T.GenerateImplementationData,) => void

export type FGenerateInterface = ($: T.GenerateInterfaceData,) => void

export type FGenerateInterface2 = ($: T.GenerateInterfaceData, $i: mfp.IWriter,) => void

export type FGenerateUnboundImplementation = ($: T.GenerateImplementationData, $i: mfp.IWriter,) => void

export type FSerialize = ($: T.SerializeData,) => void