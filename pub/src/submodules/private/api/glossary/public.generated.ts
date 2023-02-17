import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mdefinition from "../../../definition"
import * as mfp from "lib-fountain-pen"
import * as mresolved from "../../../resolved"

export type FGenerateImplementationFile = ($: T.GenerateImplementationFileData, $i: mfp.IBlock,) => void

export type FGenerateInterfaceFile = ($: T.GenerateInterfaceFileData, $i: mfp.IBlock,) => void