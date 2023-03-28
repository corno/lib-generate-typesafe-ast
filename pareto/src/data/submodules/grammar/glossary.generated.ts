import * as pd from 'pareto-core-data'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({}),
    'root': {
        'namespaces': d({}),
        'types': d({
            "Grammar": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "root": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "annotation": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameter', "Annotation"]],
                            },
                            "key": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                            },
                        })],
                    },
                    "types": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Value",
                            'arguments': d({}),
                        }]]],
                    },
                })]
            },
            "Value": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                    "array": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Value",
                        'arguments': d({}),
                    }]],
                    "choice": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "default": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "annotation": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameter', "Annotation"]],
                                },
                                "key": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                },
                            })],
                        },
                        "options": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Value",
                                'arguments': d({}),
                            }]]],
                        },
                    })],
                    "component": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "type": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "annotation": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameter', "Annotation"]],
                                },
                                "key": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                },
                            })],
                        },
                    })],
                    "group": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "members": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "value": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "Value",
                                        'arguments': d({}),
                                    }]],
                                },
                            })]],
                        },
                    })],
                    "node": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "flags": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                "enumeration": <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['string', null]],
                                "string": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                            })]],
                        },
                        "name": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                        "type": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                "composite": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Value",
                                    'arguments': d({}),
                                }]],
                                "leaf": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                            })],
                        },
                    })],
                    "optional": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Value",
                        'arguments': d({}),
                    }]],
                })]
            },
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
}