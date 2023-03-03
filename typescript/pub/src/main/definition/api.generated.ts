import * as pt from 'pareto-core-types'

import * as gdefinition from "../../submodules/grammar_old"
import * as gfp from "../../submodules/lib-fountain-pen"
import * as gprivate from "../../submodules/private"
import * as gresolved from "../../submodules/grammar_resolved_old"
import * as gthis from "../../submodules/glossary"

export type CgenerateImplementation = gthis.FGenerateImplementation

export type CgenerateInterface = gthis.FGenerateInterface

export type Cserialize = ($d: {}) => gthis.FSerialize

export type CserializeToNew = ($d: {}) => gthis.FSerialize

export type CunboundGenerateImplementation = ($d: {
    readonly 'generateCreateDefaultVisitor': gprivate.FGenerateImplementationFile
    readonly 'generateImplementationIndex': gprivate.FGenerateImplementationFile
    readonly 'generateParser': gprivate.FGenerateImplementationFile
    readonly 'generateVisit': gprivate.FGenerateImplementationFile
    readonly 'resolve': gresolved.FResolve
}) => gthis.FGenerateUnboundImplementation

export type CunboundGenerateInterface = ($d: {
    readonly 'generateFunctions': gprivate.FGenerateInterfaceFile
    readonly 'generateInterfaceIndex': gprivate.FGenerateInterfaceFile
    readonly 'generateTypes': gprivate.FGenerateInterfaceFile
    readonly 'generateVisitorInterface': gprivate.FGenerateInterfaceFile
}) => gthis.FGenerateInterface2

export type API = {
    generateImplementation: CgenerateImplementation
    generateInterface: CgenerateInterface
    serialize: Cserialize
    serializeToNew: CserializeToNew
    unboundGenerateImplementation: CunboundGenerateImplementation
    unboundGenerateInterface: CunboundGenerateInterface
}