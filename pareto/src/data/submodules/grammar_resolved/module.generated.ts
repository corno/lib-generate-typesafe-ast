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
                "Root": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({})]
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