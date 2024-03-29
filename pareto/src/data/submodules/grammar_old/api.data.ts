import * as pd from 'pareto-core-data'

import { constructor, algorithm, procedure, dependent } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "serialize": algorithm(procedure("this", {}, "Serialize"), {}, dependent(null, {
            "dictionaryForEach": procedure("foreach", {}, "DictionaryForEach"),
        }, {})),
        "serializeToNew": algorithm(procedure("this", {}, "Serialize"), {}, dependent(null, {
            "dictionaryForEach": procedure("foreach", {}, "DictionaryForEach"),
        }, {})),
    }),
}