import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace N {
    
    export namespace Grammar {
        
        export namespace N {
            
            export namespace G {
                
                export namespace N {
                    
                    export namespace root {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                    
                    export namespace types {
                        
                        export namespace N {
                            
                            export namespace D {
                                
                                export namespace N {}
                                
                                export namespace T {}
                            }
                        }
                        
                        export namespace T {}
                    }
                }
                
                export namespace T {}
            }
        }
        
        export namespace T {}
    }
    
    export namespace Value {
        
        export namespace N {
            
            export namespace TU {
                
                export namespace N {
                    
                    export namespace array {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                    
                    export namespace choice {
                        
                        export namespace N {
                            
                            export namespace G {
                                
                                export namespace N {
                                    
                                    export namespace _$ldefault {
                                        
                                        export namespace N {}
                                        
                                        export namespace T {}
                                    }
                                    
                                    export namespace options {
                                        
                                        export namespace N {
                                            
                                            export namespace D {
                                                
                                                export namespace N {}
                                                
                                                export namespace T {}
                                            }
                                        }
                                        
                                        export namespace T {}
                                    }
                                }
                                
                                export namespace T {}
                            }
                        }
                        
                        export namespace T {}
                    }
                    
                    export namespace component {
                        
                        export namespace N {
                            
                            export namespace G {
                                
                                export namespace N {
                                    
                                    export namespace _$ltype {
                                        
                                        export namespace N {}
                                        
                                        export namespace T {}
                                    }
                                }
                                
                                export namespace T {}
                            }
                        }
                        
                        export namespace T {}
                    }
                    
                    export namespace group {
                        
                        export namespace N {
                            
                            export namespace G {
                                
                                export namespace N {
                                    
                                    export namespace members {
                                        
                                        export namespace N {
                                            
                                            export namespace D {
                                                
                                                export namespace N {
                                                    
                                                    export namespace G {
                                                        
                                                        export namespace N {
                                                            
                                                            export namespace value {
                                                                
                                                                export namespace N {}
                                                                
                                                                export namespace T {}
                                                            }
                                                        }
                                                        
                                                        export namespace T {}
                                                    }
                                                }
                                                
                                                export namespace T {}
                                            }
                                        }
                                        
                                        export namespace T {}
                                    }
                                }
                                
                                export namespace T {}
                            }
                        }
                        
                        export namespace T {}
                    }
                    
                    export namespace node {
                        
                        export namespace N {
                            
                            export namespace G {
                                
                                export namespace N {
                                    
                                    export namespace flags {
                                        
                                        export namespace N {
                                            
                                            export namespace D {
                                                
                                                export namespace N {
                                                    
                                                    export namespace TU {
                                                        
                                                        export namespace N {
                                                            
                                                            export namespace enumeration {
                                                                
                                                                export namespace N {
                                                                    
                                                                    export namespace D {
                                                                        
                                                                        export namespace N {}
                                                                        
                                                                        export namespace T {}
                                                                    }
                                                                }
                                                                
                                                                export namespace T {}
                                                            }
                                                            
                                                            export namespace _$lstring {
                                                                
                                                                export namespace N {
                                                                    
                                                                    export namespace G {
                                                                        
                                                                        export namespace N {}
                                                                        
                                                                        export namespace T {}
                                                                    }
                                                                }
                                                                
                                                                export namespace T {}
                                                            }
                                                        }
                                                        
                                                        export namespace T {}
                                                    }
                                                }
                                                
                                                export namespace T {}
                                            }
                                        }
                                        
                                        export namespace T {}
                                    }
                                    
                                    export namespace name {
                                        
                                        export namespace N {}
                                        
                                        export namespace T {}
                                    }
                                    
                                    export namespace _$ltype {
                                        
                                        export namespace N {
                                            
                                            export namespace TU {
                                                
                                                export namespace N {
                                                    
                                                    export namespace composite {
                                                        
                                                        export namespace N {}
                                                        
                                                        export namespace T {}
                                                    }
                                                    
                                                    export namespace leaf {
                                                        
                                                        export namespace N {
                                                            
                                                            export namespace G {
                                                                
                                                                export namespace N {}
                                                                
                                                                export namespace T {}
                                                            }
                                                        }
                                                        
                                                        export namespace T {}
                                                    }
                                                }
                                                
                                                export namespace T {}
                                            }
                                        }
                                        
                                        export namespace T {}
                                    }
                                }
                                
                                export namespace T {}
                            }
                        }
                        
                        export namespace T {}
                    }
                    
                    export namespace optional {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                }
                
                export namespace T {}
            }
        }
        
        export namespace T {}
    }
}

export namespace T {
    
    export namespace Grammar {
        
        export namespace root {
            
            export type annotation<GAnnotation> = GAnnotation
            
            export type key<GAnnotation> = string
        }
        
        export type root<GAnnotation> = {
            readonly 'annotation': GAnnotation
            readonly 'key': string
        }
        
        export namespace types {
            
            export type D<GAnnotation> = T.Value<GAnnotation>
        }
        
        export type types<GAnnotation> = pt.Dictionary<T.Value<GAnnotation>>
    }
    
    export type Grammar<GAnnotation> = {
        readonly 'root': {
            readonly 'annotation': GAnnotation
            readonly 'key': string
        }
        readonly 'types': pt.Dictionary<T.Value<GAnnotation>>
    }
    
    export namespace Value {
        
        export type array<GAnnotation> = T.Value<GAnnotation>
        
        export namespace choice {
            
            export namespace _ldefault {
                
                export type annotation<GAnnotation> = GAnnotation
                
                export type key<GAnnotation> = string
            }
            
            export type _ldefault<GAnnotation> = {
                readonly 'annotation': GAnnotation
                readonly 'key': string
            }
            
            export namespace options {
                
                export type D<GAnnotation> = T.Value<GAnnotation>
            }
            
            export type options<GAnnotation> = pt.Dictionary<T.Value<GAnnotation>>
        }
        
        export type choice<GAnnotation> = {
            readonly 'default': {
                readonly 'annotation': GAnnotation
                readonly 'key': string
            }
            readonly 'options': pt.Dictionary<T.Value<GAnnotation>>
        }
        
        export namespace component {
            
            export namespace _ltype {
                
                export type annotation<GAnnotation> = GAnnotation
                
                export type key<GAnnotation> = string
            }
            
            export type _ltype<GAnnotation> = {
                readonly 'annotation': GAnnotation
                readonly 'key': string
            }
        }
        
        export type component<GAnnotation> = {
            readonly 'type': {
                readonly 'annotation': GAnnotation
                readonly 'key': string
            }
        }
        
        export namespace group {
            
            export namespace members {
                
                export namespace D {
                    
                    export type value<GAnnotation> = T.Value<GAnnotation>
                }
                
                export type D<GAnnotation> = {
                    readonly 'value': T.Value<GAnnotation>
                }
            }
            
            export type members<GAnnotation> = pt.Dictionary<{
                readonly 'value': T.Value<GAnnotation>
            }>
        }
        
        export type group<GAnnotation> = {
            readonly 'members': pt.Dictionary<{
                readonly 'value': T.Value<GAnnotation>
            }>
        }
        
        export namespace node {
            
            export namespace flags {
                
                export namespace D {
                    
                    export namespace enumeration {
                        
                        export type D<GAnnotation> = string
                    }
                    
                    export type enumeration<GAnnotation> = pt.Dictionary<string>
                    
                    export namespace _lstring {}
                    
                    export type _lstring<GAnnotation> = null
                }
                
                export type D<GAnnotation> = 
                    | ['enumeration', pt.Dictionary<string>]
                    | ['string', null]
            }
            
            export type flags<GAnnotation> = pt.Dictionary<
                | ['enumeration', pt.Dictionary<string>]
                | ['string', null]
            >
            
            export type name<GAnnotation> = string
            
            export namespace _ltype {
                
                export type composite<GAnnotation> = T.Value<GAnnotation>
                
                export namespace leaf {}
                
                export type leaf<GAnnotation> = null
            }
            
            export type _ltype<GAnnotation> = 
                | ['composite', T.Value<GAnnotation>]
                | ['leaf', null]
        }
        
        export type node<GAnnotation> = {
            readonly 'flags': pt.Dictionary<
                | ['enumeration', pt.Dictionary<string>]
                | ['string', null]
            >
            readonly 'name': string
            readonly 'type': 
                | ['composite', T.Value<GAnnotation>]
                | ['leaf', null]
        }
        
        export type optional<GAnnotation> = T.Value<GAnnotation>
    }
    
    export type Value<GAnnotation> = 
        | ['array', T.Value<GAnnotation>]
        | ['choice', {
            readonly 'default': {
                readonly 'annotation': GAnnotation
                readonly 'key': string
            }
            readonly 'options': pt.Dictionary<T.Value<GAnnotation>>
        }]
        | ['component', {
            readonly 'type': {
                readonly 'annotation': GAnnotation
                readonly 'key': string
            }
        }]
        | ['group', {
            readonly 'members': pt.Dictionary<{
                readonly 'value': T.Value<GAnnotation>
            }>
        }]
        | ['node', {
            readonly 'flags': pt.Dictionary<
                | ['enumeration', pt.Dictionary<string>]
                | ['string', null]
            >
            readonly 'name': string
            readonly 'type': 
                | ['composite', T.Value<GAnnotation>]
                | ['leaf', null]
        }]
        | ['optional', T.Value<GAnnotation>]
}