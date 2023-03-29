import * as pt from 'pareto-core-types'

import * as g_definition from "../../grammar_old"
import * as g_fp from "lib-fountain-pen"
import * as g_resolved from "../../grammar_resolved_old"

export namespace N {}

export namespace T {
    
    export namespace GenerateImplementationFileData {
        
        export type grammar = g_resolved.T.Grammar
        
        export type pathToInterface = string
    }
    
    export type GenerateImplementationFileData = {
        readonly 'grammar': g_resolved.T.Grammar
        readonly 'pathToInterface': string
    }
    
    export namespace GenerateInterfaceFileData {
        
        export type grammar = g_definition.T.Grammar
    }
    
    export type GenerateInterfaceFileData = {
        readonly 'grammar': g_definition.T.Grammar
    }
}