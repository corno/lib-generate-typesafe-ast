import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"
import * as mfp from "lib-fountain-pen"

export namespace GCardinality {
    
    export namespace Oarray {}
    export type Oarray = {}
    
    export namespace Oone {}
    export type Oone = {}
    
    export namespace Ooptional {}
    export type Ooptional = {}
}
export type GCardinality = 
    | ['array', GCardinality.Oarray]
    | ['one', GCardinality.Oone]
    | ['optional', GCardinality.Ooptional]
export type UCardinality = GCardinality
export type UComposite = UValue

export namespace GConfig {}
export type GConfig = {
    readonly 'fountainPen': mfp.TConfiguration
}
export type UConfig = GConfig

export namespace GGenerateImplementationData {
    
    export namespace Pgeneration {}
    export type Pgeneration = {
        readonly 'grammar': UGrammar
        readonly 'pathToInterface': string
    }
}
export type GGenerateImplementationData = {
    readonly 'fpSettings': mfp.TConfiguration
    readonly 'generation': GGenerateImplementationData.Pgeneration
    readonly 'rootPath': mcommon.TPath
}
export type UGenerateImplementationData = GGenerateImplementationData

export namespace GGenerateInterfaceData {
    
    export namespace Pgeneration {}
    export type Pgeneration = {
        readonly 'grammar': UGrammar
    }
}
export type GGenerateInterfaceData = {
    readonly 'fpSettings': mfp.TConfiguration
    readonly 'generation': GGenerateInterfaceData.Pgeneration
    readonly 'rootPath': mcommon.TPath
}
export type UGenerateInterfaceData = GGenerateInterfaceData

export namespace GGrammar {
    
    export namespace PglobalValueTypes {}
    export type PglobalValueTypes = pt.Dictionary<UValueType>
}
export type GGrammar = {
    readonly 'globalValueTypes': GGrammar.PglobalValueTypes
    readonly 'root': UNode2
}
export type UGrammar = GGrammar

export namespace GLeaf {}
export type GLeaf = {
    readonly 'hasTextContent': boolean
}
export type ULeaf = GLeaf

export namespace GNode2 {
    
    export namespace Ptype {}
    export type Ptype = 
        | ['composite', UComposite]
        | ['leaf', ULeaf]
}
export type GNode2 = {
    readonly 'name': string
    readonly 'type': GNode2.Ptype
}
export type UNode2 = GNode2

export namespace GOptions {}
export type GOptions = pt.Dictionary<UValue>
export type UOptions = GOptions

export namespace GSequenceElement {}
export type GSequenceElement = {
    readonly 'name': string
    readonly 'value': UValue
}
export type USequenceElement = GSequenceElement

export namespace GValue {}
export type GValue = {
    readonly 'cardinality'?: UCardinality
    readonly 'type': UValueType
}
export type UValue = GValue

export namespace GValueType {
    
    export namespace Ochoice {}
    export type Ochoice = {
        readonly 'options': UOptions
    }
    
    export namespace Oreference {}
    export type Oreference = {
        readonly 'name': string
    }
    
    export namespace Osequence {
        
        export namespace Pelements {}
        export type Pelements = pt.Array<USequenceElement>
    }
    export type Osequence = {
        readonly 'elements': Osequence.Pelements
    }
}
export type GValueType = 
    | ['choice', GValueType.Ochoice]
    | ['node', UNode2]
    | ['reference', GValueType.Oreference]
    | ['sequence', GValueType.Osequence]
export type UValueType = GValueType