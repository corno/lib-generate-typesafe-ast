import * as pt from 'pareto-core-types'

import * as mfp from "lib-fountain-pen"
import * as mmain from "../../../../main"

export namespace GGenerateImplementationFileData {}
export type GGenerateImplementationFileData = {
    readonly 'grammar': mmain.TGrammar
    readonly 'pathToInterface': string
}
export type UGenerateImplementationFileData = GGenerateImplementationFileData

export namespace GGenerateInterfaceFileData {}
export type GGenerateInterfaceFileData = {
    readonly 'grammar': mmain.TGrammar
}
export type UGenerateInterfaceFileData = GGenerateInterfaceFileData