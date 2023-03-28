import * as pt from 'pareto-core-types'

import * as g_build from "res-pareto-build"
import * as g_foreach from "res-pareto-foreach"
import * as g_this from "./glossary"
import * as g_tostring from "res-pareto-tostring"

export namespace D {
    
    export type generateCreateDefaultVisitor = {
        readonly 'sortedForEach': g_foreach.SYNC.A.P.DictionaryForEach
    }
    
    
    
    
    export type generateParser = {
        readonly 'buildDictionary': g_build.SYNC.A.F.BuildSafeDictionary
        readonly 'getKeysAsString': g_tostring.SYNC.A.F.GetKeysAsString
        readonly 'sortedForEach': g_foreach.SYNC.A.P.DictionaryForEach
    }
    
    export type generateTypes = {
        readonly 'joinNestedStrings': g_tostring.SYNC.A.F.JoinNestedStrings
        readonly 'sortedForEach': g_foreach.SYNC.A.P.DictionaryForEach
    }
    
    export type generateVisit = {
        readonly 'sortedForEach': g_foreach.SYNC.A.P.DictionaryForEach
    }
    
    export type generateVisitorInterface = {
        readonly 'sortedForEach': g_foreach.SYNC.A.P.DictionaryForEach
    }
}

export namespace A {
    
    export type generateCreateDefaultVisitor = ($d: D.generateCreateDefaultVisitor, ) => g_this.SYNC.A.P.GenerateImplementationFile
    
    export type generateFunctions = () => g_this.SYNC.A.P.GenerateInterfaceFile
    
    export type generateImplementationIndex = () => g_this.SYNC.A.P.GenerateImplementationFile
    
    export type generateInterfaceIndex = () => g_this.SYNC.A.P.GenerateInterfaceFile
    
    export type generateParser = ($d: D.generateParser, ) => g_this.SYNC.A.P.GenerateImplementationFile
    
    export type generateTypes = ($d: D.generateTypes, ) => g_this.SYNC.A.P.GenerateInterfaceFile
    
    export type generateVisit = ($d: D.generateVisit, ) => g_this.SYNC.A.P.GenerateImplementationFile
    
    export type generateVisitorInterface = ($d: D.generateVisitorInterface, ) => g_this.SYNC.A.P.GenerateInterfaceFile
}

export type API = {
    readonly 'generateCreateDefaultVisitor': A.generateCreateDefaultVisitor
    readonly 'generateFunctions': A.generateFunctions
    readonly 'generateImplementationIndex': A.generateImplementationIndex
    readonly 'generateInterfaceIndex': A.generateInterfaceIndex
    readonly 'generateParser': A.generateParser
    readonly 'generateTypes': A.generateTypes
    readonly 'generateVisit': A.generateVisit
    readonly 'generateVisitorInterface': A.generateVisitorInterface
}