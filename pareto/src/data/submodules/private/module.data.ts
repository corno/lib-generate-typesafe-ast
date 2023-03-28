import * as pd from 'pareto-core-data'

import { external, sibling, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"

const d = pd.d

export const $: g_project.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({
                "fp": external("lib-fountain-pen"),
                "definition": sibling("grammar_old"),
                "resolved": sibling("grammar_resolved_old"),
            }),
        },
        'api': {
            'root': api,
            'imports': d({
                "foreach": external("res-pareto-foreach"),
                //"fp": "lib-fountain-pen",
                "tostring": external("res-pareto-tostring"),
                "build": external("res-pareto-build"),
                "this": this_(),
            }),
        }
    },
    'implementation': ['typescript', null],
}