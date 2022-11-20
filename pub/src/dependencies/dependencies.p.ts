import fp from "lib-fountain-pen"
import fs from "res-pareto-filesystem"
import collation from "res-pareto-collation"
import tostring from "res-pareto-tostring"

import * as api from "../interface"


// export const ddeps: api.DDependencies = {
//     createWriteStream: fs.f_createWriteStream,
//     fp: fp.dependencies,
//     generateImp: {
//         sortedForEach: collation.fCreateSortedForEach({
//             isYinBeforeYang: collation.fLocaleIsYinBeforeYang
//         }),
//         getKeysAsString: tostring.getKeysAsString,
//     },
//     generateInf: {
//         sortedForEach: collation.fCreateSortedForEach({
//             isYinBeforeYang: collation.fLocaleIsYinBeforeYang
//         }),
//         joinNestedStrings: tostring.joinNestedStrings

//     }
// }

export const ddeps = null