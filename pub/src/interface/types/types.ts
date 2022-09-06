import * as pt from "pareto-core-types"

export type TOptions = pt.Dictionary<TValue>


export type TCardinality =
    | ["one", {}]
    | ["optional", {}]
    | ["array", {}]

export type TSequenceElement = {
    readonly "name": string,
    readonly "value": TValue,
}

export type TValueType =
    | ["reference", {
        readonly "name": string
    }]
    | ["choice", {
        readonly "options": TOptions
    }]
    | ["node", TNode2]
    | ["sequence", {
        readonly "elements": pt.Array<TSequenceElement>
    }]

export type TValue = {
    readonly "cardinality"?: TCardinality
    readonly "type": TValueType
}

export type TGrammar = {
    readonly "globalValueTypes": pt.Dictionary<TValueType>
    readonly "root": TNode2
}

export type TNode2 = {
    readonly "name": string
    readonly "type":
    | ["composite", TComposite]
    | ["leaf", TLeaf]

}

export type TLeaf = {
    readonly "hasTextContent": boolean,
}

export type TComposite = TValue
