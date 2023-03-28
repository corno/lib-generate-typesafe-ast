import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_definition from "../../grammar_old"
import * as g_fp from "lib-fountain-pen"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {
        
        export type OnError = ($: g_common.T.String, ) => void
    }
    
    export namespace A {
        
        
        export namespace F {
            export type Resolve = ($: T.Grammar) => g_x.T.Grammar
        }
    }
}