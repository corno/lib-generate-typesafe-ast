import { API } from "./api.generated"
import { $$ as igenerateCreateDefaultVisitor } from "./implementations/generateCreateDefaultVisitor.s.p"
import { $$ as igenerateFunctions } from "./implementations/generateFunctions.s.p"
import { $$ as igenerateImplementationIndex } from "./implementations/generateImplementationIndex.s.p"
import { $$ as igenerateInterfaceIndex } from "./implementations/generateInterfaceIndex.s.p"
import { $$ as igenerateParser } from "./implementations/generateParser.s.p"
import { $$ as igenerateTypes } from "./implementations/generateTypes.s.p"
import { $$ as igenerateVisit } from "./implementations/generateVisit.s.p"
import { $$ as igenerateVisitorInterface } from "./implementations/generateVisitorInterface.s.p"

export const $api: API = {
    'generateCreateDefaultVisitor': igenerateCreateDefaultVisitor,
    'generateFunctions': igenerateFunctions,
    'generateImplementationIndex': igenerateImplementationIndex,
    'generateInterfaceIndex': igenerateInterfaceIndex,
    'generateParser': igenerateParser,
    'generateTypes': igenerateTypes,
    'generateVisit': igenerateVisit,
    'generateVisitorInterface': igenerateVisitorInterface,
}