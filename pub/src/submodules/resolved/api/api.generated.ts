import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as mforeach from "res-pareto-foreach"

export type Cresolve = ($d: {}) => glo.FResolve

export type API = {
    resolve: Cresolve
}