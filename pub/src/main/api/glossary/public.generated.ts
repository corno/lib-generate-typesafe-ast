import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"
import * as gdefinition from "../../../submodules/definition"
import * as gfp from "lib-fountain-pen"

export type FGenerateImplementation = ($: T.GenerateImplementationData,) => void

export type FGenerateInterface = ($: T.GenerateInterfaceData,) => void

export type FGenerateInterface2 = ($: T.GenerateInterfaceData, $i: gfp.IDirectory,) => void

export type FGenerateUnboundImplementation = ($: T.GenerateImplementationData, $i: gfp.IDirectory,) => void

export type FSerialize = ($: T.SerializeData,) => void