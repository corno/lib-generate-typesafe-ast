import { API } from "./api.generated"
import { $$ as icreateImplementationSerializer } from "./implementations/createImplementationSerializer.s.p"
import { $$ as icreateStatesSerializer } from "./implementations/createStatesSerializer.s.p"

export const $api: API = {
    'createImplementationSerializer': icreateImplementationSerializer,
    'createStatesSerializer': icreateStatesSerializer,
}