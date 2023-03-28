import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"
import * as g_definition from "../../submodules/grammar_old"
import * as g_fp from "lib-fountain-pen"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {
        
        export type Nothing = () => void
    }
    
    export namespace A {
        
        
        export namespace P {
            export type GenerateImplementation = ($: T.GenerateImplementationData, $i: SYNC.I.Nothing) => void
        }
        
        
        export namespace P {
            export type GenerateInterface = ($: T.GenerateInterfaceData, $i: SYNC.I.Nothing) => void
        }
    }
}