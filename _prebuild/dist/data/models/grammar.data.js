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
exports.$ = void 0;
const pd = __importStar(require("pareto-core-data"));
const shorthands_1 = require("lib-liana/dist/submodules/liana/shorthands");
const d = pd.d;
exports.$ = {
    'imports': d({}),
    'terminal types': d({
        "identifier": null,
        "text": null,
    }),
    'global types': d({
        "Value": (0, shorthands_1.globalType)({}, (0, shorthands_1.taggedUnion)({
            "component": (0, shorthands_1.option)((0, shorthands_1.group)({
                "type": (0, shorthands_1.prop)((0, shorthands_1.reference)((0, shorthands_1.typePath)("Grammar", [(0, shorthands_1.grp)("types")]), (0, shorthands_1.tbd)())),
            })),
            "choice": (0, shorthands_1.option)((0, shorthands_1.group)({
                "options": (0, shorthands_1.prop)((0, shorthands_1.dictionary)((0, shorthands_1.component)("Value", {}))),
                "default": (0, shorthands_1.prop)((0, shorthands_1.reference)((0, shorthands_1.typePath)("Value", [(0, shorthands_1.tu)("choice"), (0, shorthands_1.grp)("options")]), (0, shorthands_1.tbd)())),
            })),
            "node": (0, shorthands_1.option)((0, shorthands_1.group)({
                "name": (0, shorthands_1.prop)((0, shorthands_1.terminal)("identifier")),
                "type": (0, shorthands_1.prop)((0, shorthands_1.taggedUnion)({
                    "composite": (0, shorthands_1.option)((0, shorthands_1.component)("Value", {})),
                    "leaf": (0, shorthands_1.option)((0, shorthands_1.group)({})),
                })),
                "flags": (0, shorthands_1.prop)((0, shorthands_1.dictionary)((0, shorthands_1.taggedUnion)({
                    "string": (0, shorthands_1.option)((0, shorthands_1.group)({})),
                    "enumeration": (0, shorthands_1.option)((0, shorthands_1.dictionary)((0, shorthands_1.terminal)("identifier"))),
                }))),
            })),
            "group": (0, shorthands_1.option)((0, shorthands_1.group)({
                "members": (0, shorthands_1.prop)((0, shorthands_1.dictionary)((0, shorthands_1.group)({
                    "value": (0, shorthands_1.prop)((0, shorthands_1.component)("Value", {})),
                }))),
            })),
            "array": (0, shorthands_1.option)((0, shorthands_1.component)("Value", {})),
            "optional": (0, shorthands_1.option)((0, shorthands_1.component)("Value", {})),
        })),
        "Grammar": (0, shorthands_1.globalType)({}, (0, shorthands_1.group)({
            "types": (0, shorthands_1.prop)((0, shorthands_1.dictionary)((0, shorthands_1.component)("Value", {}))),
            "root": (0, shorthands_1.prop)((0, shorthands_1.reference)((0, shorthands_1.typePath)("Grammar", [(0, shorthands_1.grp)("types")]), (0, shorthands_1.tbd)())),
        })),
    }),
};
