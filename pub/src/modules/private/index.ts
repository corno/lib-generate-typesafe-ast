import { API } from "./api"
import { igenerateCreateDefaultVisitor } from "./implementations/generateCreateDefaultVisitor.p"
import { igenerateFunctions } from "./implementations/generateFunctions.p"
import { igenerateImplementationIndex } from "./implementations/generateImplementationIndex.p"
import { igenerateInterfaceIndex } from "./implementations/generateInterfaceIndex.p"
import { igenerateParser } from "./implementations/generateParser.p"
import { igenerateTypes } from "./implementations/generateTypes.p"
import { igenerateVisit } from "./implementations/generateVisit.p"
import { igenerateVisitorInterface } from "./implementations/generateVisitorInterface.p"

export * from "./api"

export const $a: API = {
    "generateCreateDefaultVisitor": igenerateCreateDefaultVisitor,
    "generateFunctions": igenerateFunctions,
    "generateImplementationIndex": igenerateImplementationIndex,
    "generateInterfaceIndex": igenerateInterfaceIndex,
    "generateParser": igenerateParser,
    "generateTypes": igenerateTypes,
    "generateVisit": igenerateVisit,
    "generateVisitorInterface": igenerateVisitorInterface,
}