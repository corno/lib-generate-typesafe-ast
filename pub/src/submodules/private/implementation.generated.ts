import { API } from "./api"
import { $$ as igenerateCreateDefaultVisitor } from "./implementations/generateCreateDefaultVisitor.p"
import { $$ as igenerateFunctions } from "./implementations/generateFunctions.p"
import { $$ as igenerateImplementationIndex } from "./implementations/generateImplementationIndex.p"
import { $$ as igenerateInterfaceIndex } from "./implementations/generateInterfaceIndex.p"
import { $$ as igenerateParser } from "./implementations/generateParser.p"
import { $$ as igenerateTypes } from "./implementations/generateTypes.p"
import { $$ as igenerateVisit } from "./implementations/generateVisit.p"
import { $$ as igenerateVisitorInterface } from "./implementations/generateVisitorInterface.p"

export const $a: API = {
    'generateCreateDefaultVisitor': igenerateCreateDefaultVisitor,
    'generateFunctions': igenerateFunctions,
    'generateImplementationIndex': igenerateImplementationIndex,
    'generateInterfaceIndex': igenerateInterfaceIndex,
    'generateParser': igenerateParser,
    'generateTypes': igenerateTypes,
    'generateVisit': igenerateVisit,
    'generateVisitorInterface': igenerateVisitorInterface,
}