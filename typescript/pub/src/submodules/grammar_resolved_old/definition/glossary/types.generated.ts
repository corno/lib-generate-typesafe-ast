import * as pt from 'pareto-core-types'

import * as g_definition from "../../../grammar_old"
import * as g_fp from "lib-fountain-pen"

export namespace T {
    
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
    
    export namespace Node2 {
        
        export type name = string
        
        export namespace _ltype {
            
            export type composite = T.Value
            
            export namespace leaf {
                
                export type hasTextContent = boolean
            }
            
            export type leaf = {
                readonly 'hasTextContent': boolean
            }
        }
        
        export type _ltype = 
            | ['composite', T.Value]
            | ['leaf', {
                readonly 'hasTextContent': boolean
            }]
    }
    
    export type Node2 = {
        readonly 'name': string
        readonly 'type': 
            | ['composite', T.Value]
            | ['leaf', {
                readonly 'hasTextContent': boolean
            }]
    }
    
    export namespace PossibleGrammar {
        
        export type O = T.Grammar
    }
    
    export type PossibleGrammar = [ false ] | [ true, T.Grammar]
    
    export namespace ResolveError {
        
        export namespace _ltype {
            
            export type no__such__global__value__type = string
        }
        
        export type _ltype = 
            | ['no such global value type', string]
    }
    
    export type ResolveError = {
        readonly 'type': 
            | ['no such global value type', string]
    }
    
    export namespace Value {
        
        export namespace cardinality {
            
            export namespace array {}
            
            export type array = null
            
            export namespace one {}
            
            export type one = null
            
            export namespace optional {}
            
            export type optional = null
        }
        
        export type cardinality = 
            | ['array', null]
            | ['one', null]
            | ['optional', null]
        
        export type _ltype = T.ValueType
    }
    
    export type Value = {
        readonly 'cardinality': 
            | ['array', null]
            | ['one', null]
            | ['optional', null]
        readonly 'type': T.ValueType
    }
    
    export namespace ValueType {
        
        export namespace choice {
            
            export namespace options {
                
                export type D = T.Value
            }
            
            export type options = pt.Dictionary<T.Value>
        }
        
        export type choice = {
            readonly 'options': pt.Dictionary<T.Value>
        }
        
        export type node = T.Node2
        
        export namespace reference {
            
            export type name = string
            
            export namespace referencee {
                
                export type C = T.ValueType
            }
            
            export type referencee = () => T.ValueType
        }
        
        export type reference = {
            readonly 'name': string
            readonly 'referencee': () => T.ValueType
        }
        
        export namespace sequence {
            
            export namespace elements {
                
                export namespace A {
                    
                    export type name = string
                    
                    export type value = T.Value
                }
                
                export type A = {
                    readonly 'name': string
                    readonly 'value': T.Value
                }
            }
            
            export type elements = pt.Array<{
                readonly 'name': string
                readonly 'value': T.Value
            }>
        }
        
        export type sequence = {
            readonly 'elements': pt.Array<{
                readonly 'name': string
                readonly 'value': T.Value
            }>
        }
    }
    
    export type ValueType = 
        | ['choice', {
            readonly 'options': pt.Dictionary<T.Value>
        }]
        | ['node', T.Node2]
        | ['reference', {
            readonly 'name': string
            readonly 'referencee': () => T.ValueType
        }]
        | ['sequence', {
            readonly 'elements': pt.Array<{
                readonly 'name': string
                readonly 'value': T.Value
            }>
        }]
}