import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as galgorithm from "../../../algorithm"
import * as gcommon from "glo-pareto-common"
import * as gfp from "lib-fountain-pen"

export type FSerializeImplementation = <GPAnnotation>($: galgorithm.T.Implementation<T.Annotation<GPAnnotation>>, $i: gfp.IDirectory,) => void

export type FSerializeStates = <GPAnnotation>($: galgorithm.T.States<T.Annotation<GPAnnotation>>, $i: gfp.IBlock,) => void