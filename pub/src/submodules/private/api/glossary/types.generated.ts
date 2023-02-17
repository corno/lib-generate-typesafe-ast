import * as pt from 'pareto-core-types'

import * as mdefinition from "../../../definition"
import * as mfp from "lib-fountain-pen"
import * as mresolved from "../../../resolved"

export namespace T {
    
    export namespace GenerateImplementationFileData {
        
        export type grammar = mresolved.T.Grammar
        
        export type pathToInterface = string
    }
    
    export type GenerateImplementationFileData = {
        readonly 'grammar': mresolved.T.Grammar
        readonly 'pathToInterface': string
    }
    
    export namespace GenerateInterfaceFileData {
        
        export type grammar = mdefinition.T.Grammar
    }
    
    export type GenerateInterfaceFileData = {
        readonly 'grammar': mdefinition.T.Grammar
    }
}