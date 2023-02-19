import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mfp from "lib-fountain-pen"

export type FSerialize = <GPAnnotation>($: T.Grammar<GPAnnotation>, $i: mfp.IBlock,) => void