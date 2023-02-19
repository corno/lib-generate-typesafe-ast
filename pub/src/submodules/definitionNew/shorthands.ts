import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-data'

import * as t from "./api"

type RawDictionary<T> = { [key: string]: T }

export function array(vt: t.T.Value<pd.SourceLocation>): t.T.Value<pd.SourceLocation> {
    return ['array', vt]
}

export function choice(options: RawDictionary<t.T.Value<pd.SourceLocation>>): t.T.Value<pd.SourceLocation> {
    return ['choice', { 'options': pd.wrapRawDictionary(options) }]
}

export function node(name: string, content: boolean | t.T.Value<pd.SourceLocation>): t.T.Value<pd.SourceLocation> {
    return ['node', {
        'name': name,
        'type': pl.cc([1], ($): t.T.Value.node._ltype<pd.SourceLocation> => {
            if (typeof content === "boolean") {
              return ['leaf', {
                  'hasTextContent': content
              }]
            } else {
              return ['composite', content]
            }
        }),
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
        'annotation': pd.getLocationInfo(1),
        'name': name,
    }]
}

export function group(members: RawDictionary< t.T.Value.group.members.D<pd.SourceLocation>>): t.T.Value<pd.SourceLocation> {
    return ['group', {
        'members': pd.wrapRawDictionary(members),
    }]
}