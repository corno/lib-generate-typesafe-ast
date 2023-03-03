import * as pt from 'pareto-core-types'

import * as gdef from "../../../grammar"
import * as gliana from "lib-liana/dist/submodules/liana"

export namespace T {
    
    export type Annotation<GPAnnotation> = GPAnnotation
    
    export namespace OutAnnotation {
        
        export type internal<GPAnnotation> = string
        
        export type source<GPAnnotation> = GPAnnotation
    }
    
    export type OutAnnotation<GPAnnotation> = 
        | ['internal', string]
        | ['source', GPAnnotation]
}