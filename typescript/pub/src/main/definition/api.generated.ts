import * as pt from 'pareto-core-types'

import * as g_definition from "../../submodules/grammar_old"
import * as g_fp from "../../submodules/lib-fountain-pen"
import * as g_private from "../../submodules/private"
import * as g_resolved from "../../submodules/grammar_resolved_old"
import * as g_this from "../../submodules/glossary"

export type generateImplementation = g_this.F.GenerateImplementation

export type generateInterface = g_this.F.GenerateInterface

export type serialize = ($d: {}) => g_this.F.Serialize

export type serializeToNew = ($d: {}) => g_this.F.Serialize

export type unboundGenerateImplementation = ($d: {
    readonly 'generateCreateDefaultVisitor': g_private.F.GenerateImplementationFile
    readonly 'generateImplementationIndex': g_private.F.GenerateImplementationFile
    readonly 'generateParser': g_private.F.GenerateImplementationFile
    readonly 'generateVisit': g_private.F.GenerateImplementationFile
    readonly 'resolve': g_resolved.F.Resolve
}) => g_this.F.GenerateUnboundImplementation

export type unboundGenerateInterface = ($d: {
    readonly 'generateFunctions': g_private.F.GenerateInterfaceFile
    readonly 'generateInterfaceIndex': g_private.F.GenerateInterfaceFile
    readonly 'generateTypes': g_private.F.GenerateInterfaceFile
    readonly 'generateVisitorInterface': g_private.F.GenerateInterfaceFile
}) => g_this.F.GenerateInterface2

export type API = {
    generateImplementation: generateImplementation
    generateInterface: generateInterface
    serialize: serialize
    serializeToNew: serializeToNew
    unboundGenerateImplementation: unboundGenerateImplementation
    unboundGenerateInterface: unboundGenerateInterface
}