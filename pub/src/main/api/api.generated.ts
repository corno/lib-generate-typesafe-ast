import * as pt from 'pareto-core-types'

import * as glo from "./glossary"


export type CgenerateImplementation = ($d: {}) => glo.FGenerateImplementation

export type CgenerateInterface = ($d: {}) => glo.FGenerateInterface

export type API = {
    generateImplementation: CgenerateImplementation
    generateInterface: CgenerateInterface
}