import { API } from "./definition/api.generated"
import { $$ as icreateImplementationSerializer } from "./implementations/createImplementationSerializer.p"
import { $$ as icreateStatesSerializer } from "./implementations/createStatesSerializer.p"

export const $a: API = {
    'createImplementationSerializer': icreateImplementationSerializer,
    'createStatesSerializer': icreateStatesSerializer,
}