import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"

export namespace T {
    
    export namespace Grammar {
        
        export namespace root {
            
            export type key<GPAnnotation> = string
        }
        
        export type root<GPAnnotation> = {
            readonly 'key': string
        }
        
        export namespace types {
            
            export type D<GPAnnotation> = T.Value<GPAnnotation>
        }
        
        export type types<GPAnnotation> = pt.Dictionary<T.Value<GPAnnotation>>
    }
    
    export type Grammar<GPAnnotation> = {
        readonly 'root': {
            readonly 'key': string
        }
        readonly 'types': pt.Dictionary<T.Value<GPAnnotation>>
    }
    
    export namespace Value {
        
        export type array<GPAnnotation> = T.Value<GPAnnotation>
        
        export namespace choice {
            
            export namespace _ldefault {
                
                export type key<GPAnnotation> = string
            }
            
            export type _ldefault<GPAnnotation> = {
                readonly 'key': string
            }
            
            export namespace options {
                
                export type D<GPAnnotation> = T.Value<GPAnnotation>
            }
            
            export type options<GPAnnotation> = pt.Dictionary<T.Value<GPAnnotation>>
        }
        
        export type choice<GPAnnotation> = {
            readonly 'default': {
                readonly 'key': string
            }
            readonly 'options': pt.Dictionary<T.Value<GPAnnotation>>
        }
        
        export namespace component {
            
            export namespace _ltype {
                
                export type key<GPAnnotation> = string
            }
            
            export type _ltype<GPAnnotation> = {
                readonly 'key': string
            }
        }
        
        export type component<GPAnnotation> = {
            readonly 'type': {
                readonly 'key': string
            }
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
            
            export namespace flags {
                
                export namespace D {
                    
                    export namespace enumeration {
                        
                        export type D<GPAnnotation> = string
                    }
                    
                    export type enumeration<GPAnnotation> = pt.Dictionary<string>
                    
                    export namespace _lstring {}
                    
                    export type _lstring<GPAnnotation> = {}
                }
                
                export type D<GPAnnotation> = 
                    | ['enumeration', pt.Dictionary<string>]
                    | ['string', {}]
            }
            
            export type flags<GPAnnotation> = pt.Dictionary<
                | ['enumeration', pt.Dictionary<string>]
                | ['string', {}]
            >
            
            export type name<GPAnnotation> = string
            
            export namespace _ltype {
                
                export type composite<GPAnnotation> = T.Value<GPAnnotation>
                
                export namespace leaf {}
                
                export type leaf<GPAnnotation> = {}
            }
            
            export type _ltype<GPAnnotation> = 
                | ['composite', T.Value<GPAnnotation>]
                | ['leaf', {}]
        }
        
        export type node<GPAnnotation> = {
            readonly 'flags': pt.Dictionary<
                | ['enumeration', pt.Dictionary<string>]
                | ['string', {}]
            >
            readonly 'name': string
            readonly 'type': 
                | ['composite', T.Value<GPAnnotation>]
                | ['leaf', {}]
        }
        
        export type optional<GPAnnotation> = T.Value<GPAnnotation>
    }
    
    export type Value<GPAnnotation> = 
        | ['array', T.Value<GPAnnotation>]
        | ['choice', {
            readonly 'default': {
                readonly 'key': string
            }
            readonly 'options': pt.Dictionary<T.Value<GPAnnotation>>
        }]
        | ['component', {
            readonly 'type': {
                readonly 'key': string
            }
        }]
        | ['group', {
            readonly 'members': pt.Dictionary<{
                readonly 'value': T.Value<GPAnnotation>
            }>
        }]
        | ['node', {
            readonly 'flags': pt.Dictionary<
                | ['enumeration', pt.Dictionary<string>]
                | ['string', {}]
            >
            readonly 'name': string
            readonly 'type': 
                | ['composite', T.Value<GPAnnotation>]
                | ['leaf', {}]
        }]
        | ['optional', T.Value<GPAnnotation>]
}