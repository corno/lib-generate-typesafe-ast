import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"
import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

export const $: gproject.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'imports': d({
                "common": "glo-pareto-common",
            }),
            'parameters': d({
                "Annotation": {},
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
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                },
                            })],
                        },
                        "types": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
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
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
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
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                    },
                                })],
                            },
                            "options": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
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
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                    },
                                })],
                            },
                        })],
                        "group": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "members": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "value": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
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
                                    "enumeration": <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['string', {}]],
                                    "string": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                })]],
                            },
                            "name": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                            },
                            "type": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                    "composite": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                        'type': "Value",
                                        'arguments': d({}),
                                    }],
                                    "leaf": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                })],
                            },
                        })],
                        "optional": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                            'type': "Value",
                            'arguments': d({}),
                        }],
                    })]
                },
            }),
            'interfaces': d({}),
            'functions': d({}),
        },
        'api': {
            'imports': d({}),
            'algorithms': d({}),
        },
    },
    'implementation': ['manual', {}],
}