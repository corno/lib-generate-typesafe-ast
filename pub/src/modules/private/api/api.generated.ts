import * as pt from "pareto-core-types"

import * as glo from "./types.generated"


export type CgenerateCreateDefaultVisitor = ($d: {}) => glo.XGenerateInterfaceFile

export type CgenerateFunctions = ($d: {}) => glo.XGenerateInterfaceFile

export type CgenerateImplementationIndex = ($d: {}) => glo.XGenerateImplementationFile

export type CgenerateInterfaceIndex = ($d: {}) => glo.XGenerateInterfaceFile

export type CgenerateParser = ($d: {}) => glo.XGenerateImplementationFile

export type CgenerateTypes = ($d: {}) => glo.XGenerateInterfaceFile

export type CgenerateVisit = ($d: {}) => glo.XGenerateInterfaceFile

export type CgenerateVisitorInterface = ($d: {}) => glo.XGenerateInterfaceFile

export type API = {
    generateCreateDefaultVisitor: CgenerateCreateDefaultVisitor
    generateFunctions: CgenerateFunctions
    generateImplementationIndex: CgenerateImplementationIndex
    generateInterfaceIndex: CgenerateInterfaceIndex
    generateParser: CgenerateParser
    generateTypes: CgenerateTypes
    generateVisit: CgenerateVisit
    generateVisitorInterface: CgenerateVisitorInterface
}