import * as pt from 'pareto-core-types'

import * as g_build from "res-pareto-build"
import * as g_foreach from "res-pareto-foreach"
import * as g_this from "./glossary"
import * as g_tostring from "res-pareto-tostring"

export type generateCreateDefaultVisitor = ($d: {
    readonly 'sortedForEach': g_foreach.F.DictionaryForEach
}) => g_this.F.GenerateImplementationFile

export type generateFunctions = ($d: {}) => g_this.F.GenerateInterfaceFile

export type generateImplementationIndex = g_this.F.GenerateImplementationFile

export type generateInterfaceIndex = g_this.F.GenerateInterfaceFile

export type generateParser = ($d: {
    readonly 'buildDictionary': g_build.F.BuildDictionary
    readonly 'getKeysAsString': g_tostring.F.GetKeysAsString
    readonly 'sortedForEach': g_foreach.F.DictionaryForEach
}) => g_this.F.GenerateImplementationFile

export type generateTypes = ($d: {
    readonly 'joinNestedStrings': g_tostring.F.JoinNestedStrings
    readonly 'sortedForEach': g_foreach.F.DictionaryForEach
}) => g_this.F.GenerateInterfaceFile

export type generateVisit = ($d: {
    readonly 'sortedForEach': g_foreach.F.DictionaryForEach
}) => g_this.F.GenerateImplementationFile

export type generateVisitorInterface = ($d: {
    readonly 'sortedForEach': g_foreach.F.DictionaryForEach
}) => g_this.F.GenerateInterfaceFile

export type API = {
    generateCreateDefaultVisitor: generateCreateDefaultVisitor
    generateFunctions: generateFunctions
    generateImplementationIndex: generateImplementationIndex
    generateInterfaceIndex: generateInterfaceIndex
    generateParser: generateParser
    generateTypes: generateTypes
    generateVisit: generateVisit
    generateVisitorInterface: generateVisitorInterface
}