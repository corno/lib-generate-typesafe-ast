import * as pt from 'pareto-core-types'

import * as g_collation from "res-pareto-collation"
import * as g_foreach from "res-pareto-foreach"
import * as g_this from "./glossary"
import * as g_ts from "res-typescript"

export type createImplementationSerializer = ($d: {
    readonly 'arrayForEach': g_foreach.F.ArrayForEach
    readonly 'createApostrophedString': g_ts.F.CreateApostrophedString
    readonly 'createBacktickedString': g_ts.F.CreateBacktickedString
    readonly 'createIdentifier': g_ts.F.CreateIdentifier
    readonly 'createQuotedString': g_ts.F.CreateQuotedString
    readonly 'dictionaryForEach': g_foreach.F.DictionaryForEach
    readonly 'enrichedArrayForEach': g_foreach.F.EnrichedArrayForEach
    readonly 'enrichedDictionaryForEach': g_foreach.F.EnrichedDictionaryForEach
}) => g_this.F.SerializeImplementation

export type createStatesSerializer = ($d: {
    readonly 'arrayForEach': g_foreach.F.ArrayForEach
    readonly 'createApostrophedString': g_ts.F.CreateApostrophedString
    readonly 'createIdentifier': g_ts.F.CreateIdentifier
    readonly 'dictionaryForEach': g_foreach.F.DictionaryForEach
    readonly 'enrichedArrayForEach': g_foreach.F.EnrichedArrayForEach
    readonly 'enrichedDictionaryForEach': g_foreach.F.EnrichedDictionaryForEach
}) => g_this.F.SerializeStates

export type API = {
    createImplementationSerializer: createImplementationSerializer
    createStatesSerializer: createStatesSerializer
}