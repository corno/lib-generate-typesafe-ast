import { _typescriptGrammar } from "./typescriptGrammar.p"

import * as api from "../interface"

import * as pub from "../../../pub"

export const data: api.TConfig = {
    config: pub.data,
    grammar: _typescriptGrammar,
}