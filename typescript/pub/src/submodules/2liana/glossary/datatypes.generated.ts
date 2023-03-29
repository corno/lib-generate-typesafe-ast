import * as pt from 'pareto-core-types'

import * as g_def from "../../grammar"
import * as g_liana from "lib-liana/dist/submodules/liana"

export namespace N {}

export namespace T {
    
    export namespace OutAnnotation {
        
        export type internal<GAnnotation> = string
        
        export type source<GAnnotation> = GAnnotation
    }
    
    export type OutAnnotation<GAnnotation> = 
        | ['internal', string]
        | ['source', GAnnotation]
}