import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-data'

import * as t from "./api"

type RawDictionary<T> = { [key: string]: T }

export function array(vt: t.T.ValueType): t.T.Value {
    return {
        'cardinality': ['array', {}],
        'type': vt,
    }

}

export function choice(options: RawDictionary<t.T.Value>): t.T.ValueType {
    return ['choice', { 'options': pd.d(options) }]
}

export function node(node: t.T.Node2): t.T.ValueType {
    return ['node', node]
}

export function composite(name: string, value: t.T.Value): t.T.Node2 {
    return {
        'name': name,
        'type': ['composite', value]
    }

}

export function e(name: string, value: t.T.Value): t.T.ValueType.sequence.elements.A {
    return {
        'name': name,
        'value': value,
    }

}

export function leaf(name: string, hasTextContent: boolean): t.T.Node2 {
    return {
        'name': name,
        'type': ['leaf', {
            'hasTextContent': hasTextContent,
        }]
    }
}

export function one(type: t.T.ValueType): t.T.Value {
    return {
        'cardinality': ['one', {}],
        'type': type,
    }

}

export function optional(type: t.T.ValueType): t.T.Value {
    return {
        'cardinality': ['optional', {}],
        'type': type,
    }

}

export function reference(name: string): t.T.ValueType {
    return ['reference', {
        'name': name,
    }]

}

export function sequence(elements: t.T.ValueType.sequence.elements.A[]): t.T.ValueType {
    return ['sequence', {
        'elements': pd.a(elements),
    }]
}