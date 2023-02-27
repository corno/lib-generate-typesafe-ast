import * as pt from 'pareto-core-types'

import * as gdefinition from "../../../grammar_old"
import * as gfp from "lib-fountain-pen"
import * as gresolved from "../../../grammar_resolved_old"

export namespace T {
    
    export namespace GenerateImplementationFileData {
        
        export type grammar = gresolved.T.Grammar
        
        export type pathToInterface = string
    }
    
    export type GenerateImplementationFileData = {
        readonly 'grammar': gresolved.T.Grammar
        readonly 'pathToInterface': string
    }
    
    export namespace GenerateInterfaceFileData {
        
        export type grammar = gdefinition.T.Grammar
    }
    
    export type GenerateInterfaceFileData = {
        readonly 'grammar': gdefinition.T.Grammar
    }
}