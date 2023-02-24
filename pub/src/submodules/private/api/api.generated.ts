import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as mbuild from "res-pareto-build"
import * as mforeach from "res-pareto-foreach"
import * as mtostring from "res-pareto-tostring"

export type CgenerateCreateDefaultVisitor = ($d: {
    readonly 'sortedForEach': mforeach.FDictionaryForEach
}) => glo.FGenerateImplementationFile

export type CgenerateFunctions = ($d: {}) => glo.FGenerateInterfaceFile

export type CgenerateImplementationIndex = glo.FGenerateImplementationFile

export type CgenerateInterfaceIndex = glo.FGenerateInterfaceFile

export type CgenerateParser = ($d: {
    readonly 'buildDictionary': mbuild.FBuildDictionary
    readonly 'getKeysAsString': mtostring.FGetKeysAsString
    readonly 'sortedForEach': mforeach.FDictionaryForEach
}) => glo.FGenerateImplementationFile

export type CgenerateTypes = ($d: {
    readonly 'joinNestedStrings': mtostring.FJoinNestedStrings
    readonly 'sortedForEach': mforeach.FDictionaryForEach
}) => glo.FGenerateInterfaceFile

export type CgenerateVisit = ($d: {
    readonly 'sortedForEach': mforeach.FDictionaryForEach
}) => glo.FGenerateImplementationFile

export type CgenerateVisitorInterface = ($d: {
    readonly 'sortedForEach': mforeach.FDictionaryForEach
}) => glo.FGenerateInterfaceFile

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