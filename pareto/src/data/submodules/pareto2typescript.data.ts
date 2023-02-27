import * as pd from 'pareto-core-data'
import {
    types, typeReference, interfaceReference, func, parametrizedTypeReference, type, glossaryParameter
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as gmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pd.d

export const $: gmoduleDefinition.T.ModuleDefinition<pd.SourceLocation> = {
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
        }),
        'algorithms': d({
            "createImplementationSerializer": algorithm(definitionReference("SerializeImplementation"), constructor(null, {
                "arrayForEach": definitionReference("foreach", {}, "ArrayForEach"),
                "dictionaryForEach": definitionReference("foreach", {}, "DictionaryForEach"),
                "enrichedArrayForEach": definitionReference("foreach", {}, "EnrichedArrayForEach"),
                "enrichedDictionaryForEach": definitionReference("foreach", {}, "EnrichedDictionaryForEach"),
                "createIdentifier": definitionReference("ts", {}, "CreateIdentifier"),
                "createApostrophedString": definitionReference("ts", {}, "CreateApostrophedString"),
                "createQuotedString": definitionReference("ts", {}, "CreateQuotedString"),
                "createBacktickedString": definitionReference("ts", {}, "CreateBacktickedString"),
            })),
            "createStatesSerializer": algorithm(definitionReference("SerializeStates"), constructor(null, {
                "arrayForEach": definitionReference("foreach", {}, "ArrayForEach"),
                "dictionaryForEach": definitionReference("foreach", {}, "DictionaryForEach"),
                "enrichedArrayForEach": definitionReference("foreach", {}, "EnrichedArrayForEach"),
                "enrichedDictionaryForEach": definitionReference("foreach", {}, "EnrichedDictionaryForEach"),
                "createApostrophedString": definitionReference("ts", {}, "CreateApostrophedString"),
                "createIdentifier": definitionReference("ts", {}, "CreateIdentifier"),
            })),
        })
    },
}