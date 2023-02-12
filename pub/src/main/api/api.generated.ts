import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as mdefinition from "../../submodules/definition"
import * as mfp from "lib-fountain-pen"
import * as mprivate from "../../submodules/private"

export type CgenerateImplementation = glo.FGenerateImplementation

export type CgenerateInterface = glo.FGenerateInterface

export type Cserialize = ($d: {}) => glo.FSerialize

export type CunboundGenerateImplementation = ($d: {
    readonly 'generateCreateDefaultVisitor': mprivate.FGenerateImplementationFile
    readonly 'generateImplementationIndex': mprivate.FGenerateImplementationFile
    readonly 'generateParser': mprivate.FGenerateImplementationFile
    readonly 'generateVisit': mprivate.FGenerateImplementationFile
}) => glo.FGenerateImplementation2

export type CunboundGenerateInterface = ($d: {
    readonly 'generateFunctions': mprivate.FGenerateInterfaceFile
    readonly 'generateInterfaceIndex': mprivate.FGenerateInterfaceFile
    readonly 'generateTypes': mprivate.FGenerateInterfaceFile
    readonly 'generateVisitorInterface': mprivate.FGenerateInterfaceFile
}) => glo.FGenerateInterface2

export type API = {
    generateImplementation: CgenerateImplementation
    generateInterface: CgenerateInterface
    serialize: Cserialize
    unboundGenerateImplementation: CunboundGenerateImplementation
    unboundGenerateInterface: CunboundGenerateInterface
}