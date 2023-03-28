import * as pt from 'pareto-core-types'

import * as g_collation from "res-pareto-collation"
import * as g_foreach from "res-pareto-foreach"
import * as g_this from "./glossary"
import * as g_ts from "res-typescript"

export namespace D {
    
    export type createImplementationSerializer<GAnnotation> = {
        readonly 'arrayForEach': g_foreach.SYNC.A.P.ArrayForEach
        readonly 'createApostrophedString': g_ts.SYNC.A.F.CreateApostrophedString
        readonly 'createBacktickedString': g_ts.SYNC.A.F.CreateBacktickedString
        readonly 'createIdentifier': g_ts.SYNC.A.F.CreateIdentifier
        readonly 'createQuotedString': g_ts.SYNC.A.F.CreateQuotedString
        readonly 'dictionaryForEach': g_foreach.SYNC.A.P.DictionaryForEach
        readonly 'enrichedArrayForEach': g_foreach.SYNC.A.P.EnrichedArrayForEach
        readonly 'enrichedDictionaryForEach': g_foreach.SYNC.A.P.EnrichedDictionaryForEach
    }
    
    export type createStatesSerializer<GAnnotation> = {
        readonly 'arrayForEach': g_foreach.SYNC.A.P.ArrayForEach
        readonly 'createApostrophedString': g_ts.SYNC.A.F.CreateApostrophedString
        readonly 'createIdentifier': g_ts.SYNC.A.F.CreateIdentifier
        readonly 'dictionaryForEach': g_foreach.SYNC.A.P.DictionaryForEach
        readonly 'enrichedArrayForEach': g_foreach.SYNC.A.P.EnrichedArrayForEach
        readonly 'enrichedDictionaryForEach': g_foreach.SYNC.A.P.EnrichedDictionaryForEach
    }
}

export namespace A {
    
    export type createImplementationSerializer = <GAnnotation>($d: D.createImplementationSerializer<GAnnotation>, ) => g_this.SYNC.A.P.SerializeImplementation<GAnnotation>
    
    export type createStatesSerializer = <GAnnotation>($d: D.createStatesSerializer<GAnnotation>, ) => g_this.SYNC.A.P.SerializeStates<GAnnotation>
}

export type API = {
    readonly 'createImplementationSerializer': A.createImplementationSerializer
    readonly 'createStatesSerializer': A.createStatesSerializer
}