import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as mforeach from "res-pareto-foreach"

export type Cserialize = ($d: {
    readonly 'dictionaryForEach': mforeach.FDictionaryForEach
}) => glo.FSerialize

export type CserializeToNew = ($d: {
    readonly 'dictionaryForEach': mforeach.FDictionaryForEach
}) => glo.FSerialize

export type API = {
    serialize: Cserialize
    serializeToNew: CserializeToNew
}