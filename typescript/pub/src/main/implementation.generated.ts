import { API } from "./api.generated"
import { $$ as igenerateImplementation } from "./implementations/generateImplementation.s.p"
import { $$ as igenerateInterface } from "./implementations/generateInterface.s.p"
import { $$ as iserialize } from "./implementations/serialize.s.p"
import { $$ as iserializeToNew } from "./implementations/serializeToNew.s.p"
import { $$ as iunboundGenerateImplementation } from "./implementations/unboundGenerateImplementation.s.p"
import { $$ as iunboundGenerateInterface } from "./implementations/unboundGenerateInterface.s.p"

export const $api: API = {
    'generateImplementation': igenerateImplementation,
    'generateInterface': igenerateInterface,
    'serialize': iserialize,
    'serializeToNew': iserializeToNew,
    'unboundGenerateImplementation': iunboundGenerateImplementation,
    'unboundGenerateInterface': iunboundGenerateInterface,
}