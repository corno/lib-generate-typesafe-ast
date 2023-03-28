import * as pt from 'pareto-core-types'

import * as g_foreach from "res-pareto-foreach"
import * as g_this from "./glossary"

export namespace D {
    
}

export namespace A {
    
    export type resolve = ($se: {
        readonly 'onError': g_this.SYNC.I.OnError
    }) => g_this.SYNC.A.F.Resolve
}

export type API = {
    readonly 'resolve': A.resolve
}