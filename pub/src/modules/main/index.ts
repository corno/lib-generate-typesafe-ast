import { API } from "./api"
import { igenerateImplementation } from "./implementations/generateImplementation.p"
import { igenerateInterface } from "./implementations/generateInterface.p"

export * from "./api"

export const $a: API = {
    "generateImplementation": igenerateImplementation,
    "generateInterface": igenerateInterface,
}