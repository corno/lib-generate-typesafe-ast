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
                "algorithm": sibling("algorithm"),
                "common": external("glo-pareto-common"),
                "fp": external("lib-fountain-pen"),
            }),
        },
        'api': {
            'root': api,
            'imports': d({
                "collation": external("res-pareto-collation"),
                "foreach": external("res-pareto-foreach"),
                "ts": external("res-typescript"),
                "this": this_(),
            }),
        }
    },
    'implementation': ['typescript', null],
}