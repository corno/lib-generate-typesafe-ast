import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mdefinition from "../../../definition"
import * as mfp from "lib-fountain-pen"

export type IOnResolveError = ($: T.ResolveError, ) => void

export type FResolve = ($: mdefinition.T.Grammar, $i: IOnResolveError,) => T.OptionalGrammar