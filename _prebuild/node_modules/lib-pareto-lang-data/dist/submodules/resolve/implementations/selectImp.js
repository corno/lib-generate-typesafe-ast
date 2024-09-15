"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type__Selection__Tail = exports.Type__Selection__Tail__Step__Type = exports.Type__Selection = void 0;
const pl = __importStar(require("pareto-core-lib"));
const Type__Selection = ($) => {
    return pl.optional($.tail, ($) => (0, exports.Type__Selection__Tail)($), () => $['global type'].referent.type);
};
exports.Type__Selection = Type__Selection;
const Type__Selection__Tail__Step__Type = ($) => {
    switch ($[0]) {
        case 'array': return pl.ss($, ($) => $.array.type);
        case 'dictionary': return pl.ss($, ($) => $.dictionary.type);
        case 'group': return pl.ss($, ($) => $.property.referent.type);
        case 'optional': return pl.ss($, ($) => $.optional.type);
        case 'state group': return pl.ss($, ($) => $.state.referent.type);
        default: return pl.au($[0]);
    }
};
exports.Type__Selection__Tail__Step__Type = Type__Selection__Tail__Step__Type;
const Type__Selection__Tail = ($) => {
    return pl.optional($.tail, ($) => (0, exports.Type__Selection__Tail)($), () => pl.cc($['step type'], ($) => (0, exports.Type__Selection__Tail__Step__Type)($)));
};
exports.Type__Selection__Tail = Type__Selection__Tail;
