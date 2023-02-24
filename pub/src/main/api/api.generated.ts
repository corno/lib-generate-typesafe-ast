import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"

import * as gdefinition from "../../submodules/definition"
import * as gfp from "lib-fountain-pen"
import * as gprivate from "../../submodules/private"
import * as gresolved from "../../submodules/resolved"

export type CgenerateImplementation = gglo.FGenerateImplementation

export type CgenerateInterface = gglo.FGenerateInterface

export type Cserialize = ($d: {}) => gglo.FSerialize

export type CserializeToNew = ($d: {}) => gglo.FSerialize

export type CunboundGenerateImplementation = ($d: {
    readonly 'generateCreateDefaultVisitor': gprivate.FGenerateImplementationFile
    readonly 'generateImplementationIndex': gprivate.FGenerateImplementationFile
    readonly 'generateParser': gprivate.FGenerateImplementationFile
    readonly 'generateVisit': gprivate.FGenerateImplementationFile
    readonly 'resolve': gresolved.FResolve
}) => gglo.FGenerateUnboundImplementation

export type CunboundGenerateInterface = ($d: {
    readonly 'generateFunctions': gprivate.FGenerateInterfaceFile
    readonly 'generateInterfaceIndex': gprivate.FGenerateInterfaceFile
    readonly 'generateTypes': gprivate.FGenerateInterfaceFile
    readonly 'generateVisitorInterface': gprivate.FGenerateInterfaceFile
}) => gglo.FGenerateInterface2

export type API = {
    generateImplementation: CgenerateImplementation
    generateInterface: CgenerateInterface
    serialize: Cserialize
    serializeToNew: CserializeToNew
    unboundGenerateImplementation: CunboundGenerateImplementation
    unboundGenerateInterface: CunboundGenerateInterface
}