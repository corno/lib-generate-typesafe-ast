import { API } from "./api"
import { $$ as iserialize } from "./implementations/serialize.p"

export const $a: API = {
    'serialize': iserialize,
}