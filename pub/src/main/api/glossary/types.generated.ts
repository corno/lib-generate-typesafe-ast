import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"
import * as mdefinition from "../../../submodules/definition"
import * as mfp from "lib-fountain-pen"

export namespace T {
    
    export namespace GenerateImplementationData {
        
        export namespace generation {
            
            export type grammar = mdefinition.T.Grammar
            
            export type pathToInterface = string
        }
        
        export type generation = {
            readonly 'grammar': mdefinition.T.Grammar
            readonly 'pathToInterface': string
        }
        
        export type rootPath = mcommon.T.Path
    }
    
    export type GenerateImplementationData = {
        readonly 'generation': {
            readonly 'grammar': mdefinition.T.Grammar
            readonly 'pathToInterface': string
        }
        readonly 'rootPath': mcommon.T.Path
    }
    
    export namespace GenerateInterfaceData {
        
        export namespace generation {
            
            export type grammar = mdefinition.T.Grammar
        }
        
        export type generation = {
            readonly 'grammar': mdefinition.T.Grammar
        }
        
        export type rootPath = mcommon.T.Path
    }
    
    export type GenerateInterfaceData = {
        readonly 'generation': {
            readonly 'grammar': mdefinition.T.Grammar
        }
        readonly 'rootPath': mcommon.T.Path
    }
    
    export namespace SerializeData {
        
        export type grammar = mdefinition.T.Grammar
        
        export type rootPath = mcommon.T.Path
    }
    
    export type SerializeData = {
        readonly 'grammar': mdefinition.T.Grammar
        readonly 'rootPath': mcommon.T.Path
    }
}