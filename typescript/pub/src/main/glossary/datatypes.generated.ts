import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_definition from "../../submodules/grammar_old"
import * as g_fp from "lib-fountain-pen"

export namespace N {}

export namespace T {
    
    export namespace GenerateImplementationData {
        
        export namespace generation {
            
            export type grammar = g_definition.T.Grammar
            
            export type pathToInterface = string
        }
        
        export type generation = {
            readonly 'grammar': g_definition.T.Grammar
            readonly 'pathToInterface': string
        }
        
        export type rootPath = g_common.T.Path
    }
    
    export type GenerateImplementationData = {
        readonly 'generation': {
            readonly 'grammar': g_definition.T.Grammar
            readonly 'pathToInterface': string
        }
        readonly 'rootPath': g_common.T.Path
    }
    
    export namespace GenerateInterfaceData {
        
        export namespace generation {
            
            export type grammar = g_definition.T.Grammar
        }
        
        export type generation = {
            readonly 'grammar': g_definition.T.Grammar
        }
        
        export type rootPath = g_common.T.Path
    }
    
    export type GenerateInterfaceData = {
        readonly 'generation': {
            readonly 'grammar': g_definition.T.Grammar
        }
        readonly 'rootPath': g_common.T.Path
    }
    
    export namespace SerializeData {
        
        export type grammar = g_definition.T.Grammar
        
        export type rootPath = g_common.T.Path
    }
    
    export type SerializeData = {
        readonly 'grammar': g_definition.T.Grammar
        readonly 'rootPath': g_common.T.Path
    }
}