import * as collation from "res-pareto-collation"
import * as fs from "res-pareto-filesystem"
import { DDependencies } from "../interface"

export const dependencies: DDependencies = {
    createWriteStream: fs.f_createWriteStream,
    isYinBeforeYang: collation.localeIsYinBeforeYang,
}