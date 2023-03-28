import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_def from "../../grammar"
import * as g_liana from "lib-liana/dist/submodules/liana"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace F {
            export type Map2Liana<GAnnotation> = ($: g_def.T.Grammar<GAnnotation>) => g_liana.T.Model<GAnnotation>
        }
    }
}