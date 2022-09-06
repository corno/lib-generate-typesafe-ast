import * as collation from "res-pareto-collation"
import * as fs from "res-pareto-filesystem"
import { DDependencies } from "../imp"

export const dependencies: DDependencies = {
    createWriteStream: fs.createWriteStream,
    isYinBeforeYang: collation.localeIsYinBeforeYang,
}