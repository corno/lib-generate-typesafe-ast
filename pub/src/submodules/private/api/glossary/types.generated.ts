import * as pt from 'pareto-core-types'

import * as mdefinition from "../../../definition"
import * as mfp from "lib-fountain-pen"

export namespace T {
    
    export namespace GenerateImplementationFileData {
        
        export type grammar = mdefinition.T.Grammar
        
        export type pathToInterface = string
    }
    
    export type GenerateImplementationFileData = {
        readonly 'grammar': mdefinition.T.Grammar
        readonly 'pathToInterface': string
    }
    
    export namespace GenerateInterfaceFileData {
        
        export type grammar = mdefinition.T.Grammar
    }
    
    export type GenerateInterfaceFileData = {
        readonly 'grammar': mdefinition.T.Grammar
    }
}