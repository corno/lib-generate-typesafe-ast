import * as pt from "pareto-core-types"

import * as glo from "./types.generated"


export type CgenerateImplementation = ($d: {}) => pt.Procedure<glo.TGenerateImplementationData>

export type CgenerateInterface = ($d: {}) => pt.Procedure<glo.TGenerateInterfaceData>

export type API = {
    generateImplementation: CgenerateImplementation
    generateInterface: CgenerateInterface
}