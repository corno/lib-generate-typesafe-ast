import * as test from "lib-pareto-test"
import { DDependencies } from "../dependencies/x"

import * as pa from "lib-pareto-analyse-path"

export type FCreateGetTestset = (
    $: {
        readonly "typescriptGrammar": pa.TDirectory
    },
    $d: DDependencies
) => test.GetTestSet