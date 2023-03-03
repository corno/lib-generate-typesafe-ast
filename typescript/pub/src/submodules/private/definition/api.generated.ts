import * as pt from 'pareto-core-types'

import * as gbuild from "res-pareto-build"
import * as gforeach from "res-pareto-foreach"
import * as gthis from "./glossary"
import * as gtostring from "res-pareto-tostring"

export type CgenerateCreateDefaultVisitor = ($d: {
    readonly 'sortedForEach': gforeach.FDictionaryForEach
}) => gthis.FGenerateImplementationFile

export type CgenerateFunctions = ($d: {}) => gthis.FGenerateInterfaceFile

export type CgenerateImplementationIndex = gthis.FGenerateImplementationFile

export type CgenerateInterfaceIndex = gthis.FGenerateInterfaceFile

export type CgenerateParser = ($d: {
    readonly 'buildDictionary': gbuild.FBuildDictionary
    readonly 'getKeysAsString': gtostring.FGetKeysAsString
    readonly 'sortedForEach': gforeach.FDictionaryForEach
}) => gthis.FGenerateImplementationFile

export type CgenerateTypes = ($d: {
    readonly 'joinNestedStrings': gtostring.FJoinNestedStrings
    readonly 'sortedForEach': gforeach.FDictionaryForEach
}) => gthis.FGenerateInterfaceFile

export type CgenerateVisit = ($d: {
    readonly 'sortedForEach': gforeach.FDictionaryForEach
}) => gthis.FGenerateImplementationFile

export type CgenerateVisitorInterface = ($d: {
    readonly 'sortedForEach': gforeach.FDictionaryForEach
}) => gthis.FGenerateInterfaceFile

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