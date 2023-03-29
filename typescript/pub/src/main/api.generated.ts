import * as pt from 'pareto-core-types'

import * as g_definition from "../submodules/grammar_old"
import * as g_fp from "lib-fountain-pen"
import * as g_private from "../submodules/private"
import * as g_resolved from "../submodules/grammar_resolved_old"
import * as g_this from "./glossary"

export namespace D {
    
    
    
    
    
    export type unboundGenerateImplementation = {
        readonly 'generateCreateDefaultVisitor': g_private.SYNC.A.P.GenerateImplementationFile
        readonly 'generateImplementationIndex': g_private.SYNC.A.P.GenerateImplementationFile
        readonly 'generateParser': g_private.SYNC.A.P.GenerateImplementationFile
        readonly 'generateVisit': g_private.SYNC.A.P.GenerateImplementationFile
        readonly 'resolve': g_resolved.SYNC.A.F.Resolve
    }
    
    export type unboundGenerateInterface = {
        readonly 'generateFunctions': g_private.SYNC.A.P.GenerateInterfaceFile
        readonly 'generateInterfaceIndex': g_private.SYNC.A.P.GenerateInterfaceFile
        readonly 'generateTypes': g_private.SYNC.A.P.GenerateInterfaceFile
        readonly 'generateVisitorInterface': g_private.SYNC.A.P.GenerateInterfaceFile
    }
}

export namespace A {
    
    export type generateImplementation = () => g_this.SYNC.A.P.GenerateImplementation
    
    export type generateInterface = () => g_this.SYNC.A.P.GenerateInterface
    
    export type serialize = () => g_this.SYNC.A.P.Serialize
    
    export type serializeToNew = () => g_this.SYNC.A.P.Serialize
    
    export type unboundGenerateImplementation = ($d: D.unboundGenerateImplementation, ) => g_this.SYNC.A.P.GenerateUnboundImplementation
    
    export type unboundGenerateInterface = ($d: D.unboundGenerateInterface, ) => g_this.SYNC.A.P.GenerateInterface2
}

export type API = {
    readonly 'generateImplementation': A.generateImplementation
    readonly 'generateInterface': A.generateInterface
    readonly 'serialize': A.serialize
    readonly 'serializeToNew': A.serializeToNew
    readonly 'unboundGenerateImplementation': A.unboundGenerateImplementation
    readonly 'unboundGenerateInterface': A.unboundGenerateInterface
}