import * as pd from 'pareto-core-data'

import { external, sibling, submodule, tempSubmodule, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"

const d = pd.d

export const $: gproject.T.Project._ltype.library.main<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({
                "fp": external("lib-fountain-pen"),
                "common": external("glo-pareto-common"),
                "definition": tempSubmodule("grammar_old"),
            }),
        },
        'api': {
            'root': api,
            'imports': d({
                "definition": submodule("grammar_old"),
                "resolved": submodule("grammar_resolved_old"),
                "fp": submodule("lib-fountain-pen"),
                "private": submodule("private"),
                "this": submodule("glossary"),
            }),
        }
    },
    'implementation': ['typescript', null],
}