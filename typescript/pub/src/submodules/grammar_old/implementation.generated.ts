import { API } from "./api.generated"
import { $$ as iserialize } from "./implementations/serialize.s.p"
import { $$ as iserializeToNew } from "./implementations/serializeToNew.s.p"

export const $api: API = {
    'serialize': iserialize,
    'serializeToNew': iserializeToNew,
}