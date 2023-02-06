import * as pt from "pareto-core-types"
import * as mfp from "lib-fountain-pen"
import * as mmain from "../../main"

export type TGenerateImplementationFileData = {
    readonly "grammar": mmain.TGrammar
    readonly "pathToInterface": string
}

export type TGenerateInterfaceFileData = {
    readonly "grammar": mmain.TGrammar
}

export type XGenerateImplementationFile = ($: TGenerateImplementationFileData, $i: mfp.IBlock) => void

export type XGenerateInterfaceFile = ($: TGenerateInterfaceFileData, $i: mfp.IBlock) => void