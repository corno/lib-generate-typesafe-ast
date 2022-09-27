import * as collation from "api-pareto-collation"
import * as fs from "api-pareto-filesystem"
import * as tostring from "api-pareto-tostring"
import * as fountainPen from "lib-fountain-pen"

export type DDependencies = {
    readonly "fp": fountainPen.DDependencies
    readonly "generateImp": {
        readonly "sortedForEach": collation.FSortedForEach
        readonly "getKeysAsString": tostring.FGetKeysAsString

    }
    readonly "generateInf": {
        readonly "sortedForEach": collation.FSortedForEach
        readonly "joinNestedStrings": tostring.FJoinNestedString
    }
    readonly "createWriteStream": fs.FCreateWriteStream

}
