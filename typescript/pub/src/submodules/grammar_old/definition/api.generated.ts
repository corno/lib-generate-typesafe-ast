import * as pt from 'pareto-core-types'

import * as gforeach from "res-pareto-foreach"
import * as gthis from "./glossary"

export type Cserialize = ($d: {
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
}) => gthis.FSerialize

export type CserializeToNew = ($d: {
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
}) => gthis.FSerialize

export type API = {
    serialize: Cserialize
    serializeToNew: CserializeToNew
}