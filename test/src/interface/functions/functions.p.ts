import * as test from "lib-pareto-test"
import { DDependencies } from "../dependencies/dependencies.p"

import * as pub from "../../../../pub"
import * as api from "../../interface"

export type FCreateGetTestset = (
    $: api.TConfig,
    $d: DDependencies
) => test.FGetTestSet