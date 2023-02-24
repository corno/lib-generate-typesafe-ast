import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gfp from "lib-fountain-pen"

export type FSerialize = <GPAnnotation>($: T.Grammar<GPAnnotation>, $i: gfp.IBlock,) => void