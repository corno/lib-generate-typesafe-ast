import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"

import * as gforeach from "res-pareto-foreach"

export type Cserialize = ($d: {
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
}) => gglo.FSerialize

export type CserializeToNew = ($d: {
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
}) => gglo.FSerialize

export type API = {
    serialize: Cserialize
    serializeToNew: CserializeToNew
}