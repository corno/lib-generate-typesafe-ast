import * as pt from 'pareto-core-types'

import * as gfp from "lib-fountain-pen"

export namespace T {
    
    export type Annotation<GPAnnotation> = GPAnnotation
    
    export namespace Grammar {
        
        export type root<GPAnnotation> = string
        
        export namespace types {
            
            export type D<GPAnnotation> = T.Value<GPAnnotation>
        }
        
        export type types<GPAnnotation> = pt.Dictionary<T.Value<GPAnnotation>>
    }
    
    export type Grammar<GPAnnotation> = {
        readonly 'root': string
        readonly 'types': pt.Dictionary<T.Value<GPAnnotation>>
    }
    
    export namespace Value {
        
        export type array<GPAnnotation> = T.Value<GPAnnotation>
        
        export namespace choice {
            
            export namespace options {
                
                export type D<GPAnnotation> = T.Value<GPAnnotation>
            }
            
            export type options<GPAnnotation> = pt.Dictionary<T.Value<GPAnnotation>>
        }
        
        export type choice<GPAnnotation> = {
            readonly 'options': pt.Dictionary<T.Value<GPAnnotation>>
        }
        
        export namespace component {
            
            export type annotation<GPAnnotation> = T.Annotation<GPAnnotation>
            
            export type name<GPAnnotation> = string
        }
        
        export type component<GPAnnotation> = {
            readonly 'annotation': T.Annotation<GPAnnotation>
            readonly 'name': string
        }
        
        export namespace group {
            
            export namespace members {
                
                export namespace D {
                    
                    export type value<GPAnnotation> = T.Value<GPAnnotation>
                }
                
                export type D<GPAnnotation> = {
                    readonly 'value': T.Value<GPAnnotation>
                }
            }
            
            export type members<GPAnnotation> = pt.Dictionary<{
                readonly 'value': T.Value<GPAnnotation>
            }>
        }
        
        export type group<GPAnnotation> = {
            readonly 'members': pt.Dictionary<{
                readonly 'value': T.Value<GPAnnotation>
            }>
        }
        
        export namespace node {
            
            export type name<GPAnnotation> = string
            
            export namespace _ltype {
                
                export type composite<GPAnnotation> = T.Value<GPAnnotation>
                
                export namespace leaf {
                    
                    export type hasTextContent<GPAnnotation> = boolean
                }
                
                export type leaf<GPAnnotation> = {
                    readonly 'hasTextContent': boolean
                }
            }
            
            export type _ltype<GPAnnotation> = 
                | ['composite', T.Value<GPAnnotation>]
                | ['leaf', {
                    readonly 'hasTextContent': boolean
                }]
        }
        
        export type node<GPAnnotation> = {
            readonly 'name': string
            readonly 'type': 
                | ['composite', T.Value<GPAnnotation>]
                | ['leaf', {
                    readonly 'hasTextContent': boolean
                }]
        }
        
        export type optional<GPAnnotation> = T.Value<GPAnnotation>
    }
    
    export type Value<GPAnnotation> = 
        | ['array', T.Value<GPAnnotation>]
        | ['choice', {
            readonly 'options': pt.Dictionary<T.Value<GPAnnotation>>
        }]
        | ['component', {
            readonly 'annotation': T.Annotation<GPAnnotation>
            readonly 'name': string
        }]
        | ['group', {
            readonly 'members': pt.Dictionary<{
                readonly 'value': T.Value<GPAnnotation>
            }>
        }]
        | ['node', {
            readonly 'name': string
            readonly 'type': 
                | ['composite', T.Value<GPAnnotation>]
                | ['leaf', {
                    readonly 'hasTextContent': boolean
                }]
        }]
        | ['optional', T.Value<GPAnnotation>]
}