import * as pt from 'pareto-core-types'


export namespace T {
    
    export namespace Cardinality {
        
        export namespace array {}
        
        export type array = {}
        
        export namespace one {}
        
        export type one = {}
        
        export namespace optional {}
        
        export type optional = {}
    }
    
    export type Cardinality = 
        | ['array', {}]
        | ['one', {}]
        | ['optional', {}]
    
    export type Composite = T.Value
    
    export namespace Grammar {
        
        export namespace globalValueTypes {
            
            export type D = T.ValueType
        }
        
        export type globalValueTypes = pt.Dictionary<T.ValueType>
        
        export type root = T.Node2
    }
    
    export type Grammar = {
        readonly 'globalValueTypes': pt.Dictionary<T.ValueType>
        readonly 'root': T.Node2
    }
    
    export namespace Leaf {
        
        export type hasTextContent = boolean
    }
    
    export type Leaf = {
        readonly 'hasTextContent': boolean
    }
    
    export namespace Node2 {
        
        export type name = string
        
        export namespace _ltype {
            
            export type composite = T.Composite
            
            export type leaf = T.Leaf
        }
        
        export type _ltype = 
            | ['composite', T.Composite]
            | ['leaf', T.Leaf]
    }
    
    export type Node2 = {
        readonly 'name': string
        readonly 'type': 
            | ['composite', T.Composite]
            | ['leaf', T.Leaf]
    }
    
    export namespace Options {
        
        export type D = T.Value
    }
    
    export type Options = pt.Dictionary<T.Value>
    
    export namespace SequenceElement {
        
        export type name = string
        
        export type value = T.Value
    }
    
    export type SequenceElement = {
        readonly 'name': string
        readonly 'value': T.Value
    }
    
    export namespace Value {
        
        export type cardinality = T.Cardinality
        
        export type _ltype = T.ValueType
    }
    
    export type Value = {
        readonly 'cardinality'?: T.Cardinality
        readonly 'type': T.ValueType
    }
    
    export namespace ValueType {
        
        export namespace choice {
            
            export type options = T.Options
        }
        
        export type choice = {
            readonly 'options': T.Options
        }
        
        export type node = T.Node2
        
        export namespace reference {
            
            export type name = string
        }
        
        export type reference = {
            readonly 'name': string
        }
        
        export namespace sequence {
            
            export namespace elements {
                
                export type A = T.SequenceElement
            }
            
            export type elements = pt.Array<T.SequenceElement>
        }
        
        export type sequence = {
            readonly 'elements': pt.Array<T.SequenceElement>
        }
    }
    
    export type ValueType = 
        | ['choice', {
            readonly 'options': T.Options
        }]
        | ['node', T.Node2]
        | ['reference', {
            readonly 'name': string
        }]
        | ['sequence', {
            readonly 'elements': pt.Array<T.SequenceElement>
        }]
}