import * as collation from "api-pareto-collation"
import * as fs from "api-pareto-filesystem"
import * as tostring from "api-pareto-tostring"

export type DDependencies = {
    readonly "sortedForEach": collation.FSortedForEach
    readonly "createWriteStream": fs.FCreateWriteStream
    readonly "getKeysAsString": tostring.FGetKeysAsString
    readonly "joinNestedStrings": tostring.FJoinNestedString
}
