import * as pt from 'pareto-core-types'

import * as g_foreach from "res-pareto-foreach"
import * as g_this from "./glossary"

export type serialize = ($d: {
    readonly 'dictionaryForEach': g_foreach.F.DictionaryForEach
}) => g_this.F.Serialize

export type serializeToNew = ($d: {
    readonly 'dictionaryForEach': g_foreach.F.DictionaryForEach
}) => g_this.F.Serialize

export type API = {
    serialize: serialize
    serializeToNew: serializeToNew
}