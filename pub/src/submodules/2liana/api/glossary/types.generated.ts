import * as pt from 'pareto-core-types'

import * as gdef from "../../../definitionNew"
import * as gliana from "lib-liana/dist/submodules/liana"

export namespace T {
    
    export type Annotation<GPAnnotation> = GPAnnotation
    
    export namespace AnnotationOrString {
        
        export type annotation<GPAnnotation> = GPAnnotation
        
        export type _lstring<GPAnnotation> = string
    }
    
    export type AnnotationOrString<GPAnnotation> = 
        | ['annotation', GPAnnotation]
        | ['string', string]
}