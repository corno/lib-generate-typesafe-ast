import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gdef from "../../../definitionNew"
import * as gliana from "lib-liana/dist/submodules/liana"

export type FMap2Liana = <GPAnnotation>($: gdef.T.Grammar<T.Annotation<GPAnnotation>>,) => gliana.T.Model<T.OutAnnotation<GPAnnotation>>