import * as pd from 'pareto-core-data'

import { algorithm, dependent, procedure, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createImplementationSerializer": algorithm(procedure("this", {}, "SerializeImplementation"), { "Annotation": "Annotation" }, dependent(null, {
            "arrayForEach": procedure("foreach", {}, "ArrayForEach"),
            "dictionaryForEach": procedure("foreach", {}, "DictionaryForEach"),
            "enrichedArrayForEach": procedure("foreach", {}, "EnrichedArrayForEach"),
            "enrichedDictionaryForEach": procedure("foreach", {}, "EnrichedDictionaryForEach"),
            "createIdentifier": sfunction("ts", {}, "CreateIdentifier"),
            "createApostrophedString": sfunction("ts", {}, "CreateApostrophedString"),
            "createQuotedString": sfunction("ts", {}, "CreateQuotedString"),
            "createBacktickedString": sfunction("ts", {}, "CreateBacktickedString"),
        }, {})),
        "createStatesSerializer": algorithm(procedure("this", {}, "SerializeStates"), { "Annotation": "Annotation" }, dependent(null, {
            "arrayForEach": procedure("foreach", {}, "ArrayForEach"),
            "dictionaryForEach": procedure("foreach", {}, "DictionaryForEach"),
            "enrichedArrayForEach": procedure("foreach", {}, "EnrichedArrayForEach"),
            "enrichedDictionaryForEach": procedure("foreach", {}, "EnrichedDictionaryForEach"),
            "createApostrophedString": sfunction("ts", {}, "CreateApostrophedString"),
            "createIdentifier": sfunction("ts", {}, "CreateIdentifier"),
        }, {})),
    }),
}