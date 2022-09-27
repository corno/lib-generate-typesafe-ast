import * as fs from "api-pareto-filesystem"
import * as collation from "api-pareto-collation"

export type DDependencies = {
    readonly createWriteStream: fs.FCreateWriteStream
}