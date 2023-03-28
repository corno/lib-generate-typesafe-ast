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
                "def": sibling("grammar"),
                "liana": external("lib-liana/dist/submodules/liana"),
            }),
        },
        'api': {
            'root': api,
            'imports': d({
                "this": this_(),
            }),
        }
    },
    'implementation': ['typescript', null],
}