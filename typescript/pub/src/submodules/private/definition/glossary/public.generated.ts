import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gdefinition from "../../../grammar_old"
import * as gfp from "lib-fountain-pen"
import * as gresolved from "../../../grammar_resolved_old"

export type FGenerateImplementationFile = ($: T.GenerateImplementationFileData, $i: gfp.IBlock,) => void

export type FGenerateInterfaceFile = ($: T.GenerateInterfaceFileData, $i: gfp.IBlock,) => void