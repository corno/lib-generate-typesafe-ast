import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_definition from "../../grammar_old"
import * as g_fp from "lib-fountain-pen"
import * as g_resolved from "../../grammar_resolved_old"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace P {
            export type GenerateImplementationFile = ($: T.GenerateImplementationFileData, $i: g_fp.SYNC.I.Block) => void
        }
        
        
        export namespace P {
            export type GenerateInterfaceFile = ($: T.GenerateInterfaceFileData, $i: g_fp.SYNC.I.Block) => void
        }
    }
}