
import * as pt from "pareto-core-types"

import * as collation from "api-pareto-collation"
import * as tostring from "api-pareto-tostring"

import * as fp from "lib-fountain-pen"

import * as api from "../../interface"


export type FGenerateInterfaceFile = (
    $: {
        readonly "grammar": api.TGrammar
    },
    $i: {
        readonly "block": fp.IBlock,
    },
    $d: {
        readonly "sortedForEach": collation.FSortedForEach
        readonly "joinNestedStrings": tostring.FJoinNestedString
    },
) => void


export type FGenerateImplementationFile = (
    $: {
        readonly "pathToInterface": string
        readonly "grammar": api.TGrammar
    },
    $i: {
        readonly "block": fp.IBlock,
    },
    $d: {
        readonly "sortedForEach": collation.FSortedForEach
        readonly "getKeysAsString": tostring.FGetKeysAsString
    },
) => void