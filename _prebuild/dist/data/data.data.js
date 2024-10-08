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
const grammar_data_1 = require("./models/grammar.data");
exports.$ = {
    'outputs': pd.a([
        {
            'path': `../../pareto/src/data/submodules/grammar/glossary.generated.ts`,
            'data': {
                'settings': {
                    'datamodel': [true, {
                            'annotations': true,
                            'reference mapping': ['string', null],
                        }],
                    'visitor interface': [false],
                    'algorithms': {
                        'serialize': [false],
                    },
                },
                'mapped library': {
                    'library': grammar_data_1.$,
                    'terminal mapping': pd.d({
                        "identifier": ['string', null],
                    }),
                },
            }
        },
        {
            'path': `../../pareto/src/data/submodules/grammar_resolved/glossary.generated.ts`,
            'data': {
                'settings': {
                    'datamodel': [true, {
                            'annotations': true,
                            'reference mapping': ['reference and string', null],
                        }],
                    'visitor interface': [false],
                    'algorithms': {
                        'serialize': [false],
                    },
                },
                'mapped library': {
                    'library': grammar_data_1.$,
                    'terminal mapping': pd.d({
                        "identifier": ['string', null],
                    }),
                },
            }
        },
    ])
};
