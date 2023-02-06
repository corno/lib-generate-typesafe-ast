import * as pt from "pareto-core-types"
import * as mcommon from "glo-pareto-common"
import * as mfp from "lib-fountain-pen"

export type TCardinality = 
    | ["array", null]
    | ["one", null]
    | ["optional", null]

export type TComposite = TValue

export type TConfig = {
    readonly "fountainPen": mfp.TConfiguration
}

export type TGenerateImplementationData = {
    readonly "fpSettings": mfp.TConfiguration
    readonly "generation": {
        readonly "grammar": TGrammar
        readonly "pathToInterface": string
    }
    readonly "rootPath": mcommon.TPath
}

export type TGenerateInterfaceData = {
    readonly "fpSettings": mfp.TConfiguration
    readonly "generation": {
        readonly "grammar": TGrammar
    }
    readonly "rootPath": mcommon.TPath
}

export type TGrammar = {
    readonly "globalValueTypes": pt.Dictionary<TValueType>
    readonly "root": TNode2
}

export type TLeaf = {
    readonly "hasTextContent": boolean
}

export type TNode2 = {
    readonly "name": string
    readonly "type": 
        | ["composite", TComposite]
        | ["leaf", TLeaf]
}

export type TOptions = pt.Dictionary<TValue>

export type TSequenceElement = {
    readonly "name": string
    readonly "value": TValue
}

export type TValue = {
    readonly "cardinality"?: TCardinality
    readonly "type": TValueType
}

export type TValueType = 
    | ["choice", {
        readonly "options": TOptions
    }]
    | ["node", TNode2]
    | ["reference", {
        readonly "name": string
    }]
    | ["sequence", {
        readonly "elements": pt.Array<TSequenceElement>
    }]