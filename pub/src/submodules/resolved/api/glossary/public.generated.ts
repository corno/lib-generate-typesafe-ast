import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gdefinition from "../../../definition"
import * as gfp from "lib-fountain-pen"

export type IOnResolveError = ($: T.ResolveError, ) => void

export type FResolve = ($: gdefinition.T.Grammar, $i: IOnResolveError,) => T.PossibleGrammar