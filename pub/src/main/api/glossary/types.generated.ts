import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"
import * as gdefinition from "../../../submodules/grammar_old"
import * as gfp from "lib-fountain-pen"

export namespace T {
    
    export namespace GenerateImplementationData {
        
        export namespace generation {
            
            export type grammar = gdefinition.T.Grammar
            
            export type pathToInterface = string
        }
        
        export type generation = {
            readonly 'grammar': gdefinition.T.Grammar
            readonly 'pathToInterface': string
        }
        
        export type rootPath = gcommon.T.Path
    }
    
    export type GenerateImplementationData = {
        readonly 'generation': {
            readonly 'grammar': gdefinition.T.Grammar
            readonly 'pathToInterface': string
        }
        readonly 'rootPath': gcommon.T.Path
    }
    
    export namespace GenerateInterfaceData {
        
        export namespace generation {
            
            export type grammar = gdefinition.T.Grammar
        }
        
        export type generation = {
            readonly 'grammar': gdefinition.T.Grammar
        }
        
        export type rootPath = gcommon.T.Path
    }
    
    export type GenerateInterfaceData = {
        readonly 'generation': {
            readonly 'grammar': gdefinition.T.Grammar
        }
        readonly 'rootPath': gcommon.T.Path
    }
    
    export namespace SerializeData {
        
        export type grammar = gdefinition.T.Grammar
        
        export type rootPath = gcommon.T.Path
    }
    
    export type SerializeData = {
        readonly 'grammar': gdefinition.T.Grammar
        readonly 'rootPath': gcommon.T.Path
    }
}