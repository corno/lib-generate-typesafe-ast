import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"

import * as gbuild from "res-pareto-build"
import * as gforeach from "res-pareto-foreach"
import * as gtostring from "res-pareto-tostring"

export type CgenerateCreateDefaultVisitor = ($d: {
    readonly 'sortedForEach': gforeach.FDictionaryForEach
}) => gglo.FGenerateImplementationFile

export type CgenerateFunctions = ($d: {}) => gglo.FGenerateInterfaceFile

export type CgenerateImplementationIndex = gglo.FGenerateImplementationFile

export type CgenerateInterfaceIndex = gglo.FGenerateInterfaceFile

export type CgenerateParser = ($d: {
    readonly 'buildDictionary': gbuild.FBuildDictionary
    readonly 'getKeysAsString': gtostring.FGetKeysAsString
    readonly 'sortedForEach': gforeach.FDictionaryForEach
}) => gglo.FGenerateImplementationFile

export type CgenerateTypes = ($d: {
    readonly 'joinNestedStrings': gtostring.FJoinNestedStrings
    readonly 'sortedForEach': gforeach.FDictionaryForEach
}) => gglo.FGenerateInterfaceFile

export type CgenerateVisit = ($d: {
    readonly 'sortedForEach': gforeach.FDictionaryForEach
}) => gglo.FGenerateImplementationFile

export type CgenerateVisitorInterface = ($d: {
    readonly 'sortedForEach': gforeach.FDictionaryForEach
}) => gglo.FGenerateInterfaceFile

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