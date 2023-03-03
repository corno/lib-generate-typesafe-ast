import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'algorithms': d({
        "createImplementationSerializer": algorithm(functionReference("this", {}, "SerializeImplementation"), constructor(null, {
            "arrayForEach": functionReference("foreach", {}, "ArrayForEach"),
            "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
            "enrichedArrayForEach": functionReference("foreach", {}, "EnrichedArrayForEach"),
            "enrichedDictionaryForEach": functionReference("foreach", {}, "EnrichedDictionaryForEach"),
            "createIdentifier": functionReference("ts", {}, "CreateIdentifier"),
            "createApostrophedString": functionReference("ts", {}, "CreateApostrophedString"),
            "createQuotedString": functionReference("ts", {}, "CreateQuotedString"),
            "createBacktickedString": functionReference("ts", {}, "CreateBacktickedString"),
        })),
        "createStatesSerializer": algorithm(functionReference("this", {}, "SerializeStates"), constructor(null, {
            "arrayForEach": functionReference("foreach", {}, "ArrayForEach"),
            "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
            "enrichedArrayForEach": functionReference("foreach", {}, "EnrichedArrayForEach"),
            "enrichedDictionaryForEach": functionReference("foreach", {}, "EnrichedDictionaryForEach"),
            "createApostrophedString": functionReference("ts", {}, "CreateApostrophedString"),
            "createIdentifier": functionReference("ts", {}, "CreateIdentifier"),
        })),
    })
}