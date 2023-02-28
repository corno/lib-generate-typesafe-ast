import * as pd from 'pareto-core-data'
import {
    types, typeReference, interfaceReference, func, parametrizedTypeReference, type, glossaryParameter
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { functionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: gproject.T.ModuleDefinition<pd.SourceLocation> = {
    'glossary': {
        'imports': d({
            "algorithm": "../../../algorithm",
            "common": "glo-pareto-common",
            "fp": "lib-fountain-pen",
        }),
        'parameters': d({
            "Annotation": {}
        }),
        'types': d({
            "Annotation": type(glossaryParameter("Annotation")),
        }),
        'interfaces': d({
        }),
        'functions': d({
            "SerializeImplementation": func(parametrizedTypeReference("algorithm", { "Annotation": typeReference("Annotation") }, "Implementation"), null, interfaceReference("fp", "Directory"), null),
            "SerializeStates": func(parametrizedTypeReference("algorithm", { "Annotation": typeReference("Annotation") }, "States"), null, interfaceReference("fp", "Block"), null),
        }),
    },
    'api': {
        'imports': d({
            "collation": "res-pareto-collation",
            "foreach": "res-pareto-foreach",
            "ts": "res-typescript",
            "this": "./glossary",
        }),
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
    },
}