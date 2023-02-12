import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as mdefinition from "../../submodules/definition"
import * as mprivate from "../../submodules/private"

export type CgenerateImplementation = ($d: {
    readonly 'generateCreateDefaultVisitor': mprivate.FGenerateImplementationFile
    readonly 'generateImplementationIndex': mprivate.FGenerateImplementationFile
    readonly 'generateParser': mprivate.FGenerateImplementationFile
    readonly 'generateVisit': mprivate.FGenerateImplementationFile
}) => glo.FGenerateImplementation

export type CgenerateInterface = ($d: {
    readonly 'generateFunctions': mprivate.FGenerateInterfaceFile
    readonly 'generateInterfaceIndex': mprivate.FGenerateInterfaceFile
    readonly 'generateTypes': mprivate.FGenerateInterfaceFile
    readonly 'generateVisitorInterface': mprivate.FGenerateInterfaceFile
}) => glo.FGenerateInterface

export type API = {
    generateImplementation: CgenerateImplementation
    generateInterface: CgenerateInterface
}