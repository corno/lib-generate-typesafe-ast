import { API } from "./definition/api.generated"
import { $$ as iresolve } from "./implementations/resolve.p"

export const $a: API = {
    'resolve': iresolve,
}