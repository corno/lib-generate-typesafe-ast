import * as pt from 'pareto-core-types'

import * as g_foreach from "res-pareto-foreach"
import * as g_this from "./glossary"

export namespace D {
    
    export type serialize = {
        readonly 'dictionaryForEach': g_foreach.SYNC.A.P.DictionaryForEach
    }
    
    export type serializeToNew = {
        readonly 'dictionaryForEach': g_foreach.SYNC.A.P.DictionaryForEach
    }
}

export namespace A {
    
    export type serialize = ($d: D.serialize, ) => g_this.SYNC.A.P.Serialize
    
    export type serializeToNew = ($d: D.serializeToNew, ) => g_this.SYNC.A.P.Serialize
}

export type API = {
    readonly 'serialize': A.serialize
    readonly 'serializeToNew': A.serializeToNew
}