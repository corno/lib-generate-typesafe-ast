import * as pd from 'pareto-core-data'

import {
    null_,
    array,
    string,
    reference,
    boolean,
    parametrizedReference,
    typeParameter,
    computed,
    parametrizedType,
    typeReference,
    dictionary, group, member, taggedUnion, types, func, data, interfaceReference, inf, type, number, glossaryParameter
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: gglossary.T.Glossary<string> = {
    'parameters': d({
        "Annotation": null,
    }),
    'types': d({
        "Grammar": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                "root": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "annotation": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                        },
                        "key": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                    })],
                },
                "types": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Value",
                        'arguments': d({}),
                    }]],
                },
            })]
        },
        "Value": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                "array": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Value",
                    'arguments': d({}),
                }],
                "choice": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                    "default": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "annotation": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                            },
                            "key": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', null],
                            },
                        })],
                    },
                    "options": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Value",
                            'arguments': d({}),
                        }]],
                    },
                })],
                "component": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                    "type": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "annotation": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                            },
                            "key": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', null],
                            },
                        })],
                    },
                })],
                "group": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                    "members": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "value": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Value",
                                    'arguments': d({}),
                                }],
                            },
                        })]],
                    },
                })],
                "node": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                    "flags": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                            "enumeration": <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['string', null]],
                            "string": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                        })]],
                    },
                    "name": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', null],
                    },
                    "type": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                            "composite": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Value",
                                'arguments': d({}),
                            }],
                            "leaf": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                        })],
                    },
                })],
                "optional": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Value",
                    'arguments': d({}),
                }],
            })]
        },
    }),
    'builders': d({}),
    'interfaces': d({}),
    'functions': d({}),
}