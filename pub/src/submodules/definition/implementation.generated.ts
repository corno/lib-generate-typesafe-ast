import { API } from "./api"
import { $$ as iserialize } from "./implementations/serialize.p"
import { $$ as iserializeToNew } from "./implementations/serializeToNew.p"

export const $a: API = {
    'serialize': iserialize,
    'serializeToNew': iserializeToNew,
}