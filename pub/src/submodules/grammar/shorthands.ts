import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-data'

import * as t from "./api"

type RawDictionary<T> = { [key: string]: T }

export function array(vt: t.T.Value<pd.SourceLocation>): t.T.Value<pd.SourceLocation> {
    return ['array', vt]
}

export function choice(options: RawDictionary<t.T.Value<pd.SourceLocation>>): t.T.Value<pd.SourceLocation> {
    const li = pd.getLocationInfo(1)
    let firstKey: null | string = null
    pd.d(options).__mapWithKey(($, key) => {
        if (firstKey === null) {
            firstKey = key
        }
    })
    if (firstKey === null) {
        firstKey = "--NO OPTIONS--"
    }
    return ['choice', {
        'options': pd.d(options),
        'default': {
            'key': firstKey,
        },
    }]
}

export function string(): t.T.Value.node.flags.D<pd.SourceLocation> {
    return ['string', {}]
}

export function enumeration(options: RawDictionary<string>): t.T.Value.node.flags.D<pd.SourceLocation> {
    return ['enumeration', pd.d(options)]
}

export function node(name: string, content: null | t.T.Value<pd.SourceLocation>, flags?: RawDictionary<t.T.Value.node.flags.D<pd.SourceLocation>>): t.T.Value<pd.SourceLocation> {
    return ['node', {
        'name': name,
        'type': pl.cc([1], ($): t.T.Value.node._ltype<pd.SourceLocation> => {
            if (content === null) {
                return ['leaf', {
                }]
            } else {
                return ['composite', content]
            }
        }),
        'flags': flags === undefined
            ? pd.d({})
            : pd.d(flags)
    }]
}

export function optional(vt: t.T.Value<pd.SourceLocation>): t.T.Value<pd.SourceLocation> {
    return ['optional', vt]
}

export function member(value: t.T.Value<pd.SourceLocation>): t.T.Value.group.members.D<pd.SourceLocation> {
    return {
        'value': value,
    }
}

export function component(name: string): t.T.Value<pd.SourceLocation> {
    return ['component', {
        'type': {
            'key': name
        }
        // 'annotation': pd.getLocationInfo(1),
        // 'name': name,
    }]
}

export function group(members: RawDictionary<t.T.Value.group.members.D<pd.SourceLocation>>): t.T.Value<pd.SourceLocation> {
    return ['group', {
        'members': pd.d(members),
    }]
}