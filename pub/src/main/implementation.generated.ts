import { API } from "./api"
import { $$ as igenerateImplementation } from "./implementations/generateImplementation.p"
import { $$ as igenerateInterface } from "./implementations/generateInterface.p"
import { $$ as iserialize } from "./implementations/serialize.p"
import { $$ as iserializeToNew } from "./implementations/serializeToNew.p"
import { $$ as iunboundGenerateImplementation } from "./implementations/unboundGenerateImplementation.p"
import { $$ as iunboundGenerateInterface } from "./implementations/unboundGenerateInterface.p"

export const $a: API = {
    'generateImplementation': igenerateImplementation,
    'generateInterface': igenerateInterface,
    'serialize': iserialize,
    'serializeToNew': iserializeToNew,
    'unboundGenerateImplementation': iunboundGenerateImplementation,
    'unboundGenerateInterface': iunboundGenerateInterface,
}