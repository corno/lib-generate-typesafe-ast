import * as pt from "pareto-core-types"
import * as pr from "pareto-core-raw"
import * as pl from "pareto-core-lib"

import { test as main_generateImplementation } from "../modules/main/generateImplementation.p"
import { test as main_generateInterface } from "../modules/main/generateInterface.p"
import { test as private_generateCreateDefaultVisitor } from "../modules/private/generateCreateDefaultVisitor.p"
import { test as private_generateFunctions } from "../modules/private/generateFunctions.p"
import { test as private_generateImplementationIndex } from "../modules/private/generateImplementationIndex.p"
import { test as private_generateInterfaceIndex } from "../modules/private/generateInterfaceIndex.p"
import { test as private_generateParser } from "../modules/private/generateParser.p"
import { test as private_generateTypes } from "../modules/private/generateTypes.p"
import { test as private_generateVisit } from "../modules/private/generateVisit.p"
import { test as private_generateVisitorInterface } from "../modules/private/generateVisitorInterface.p"

const x = pr.wrapRawDictionary({
    "main": pr.wrapRawDictionary({
        "generateImplementation": main_generateImplementation,
        "generateInterface": main_generateInterface,
    }),
    "private": pr.wrapRawDictionary({
        "generateCreateDefaultVisitor": private_generateCreateDefaultVisitor,
        "generateFunctions": private_generateFunctions,
        "generateImplementationIndex": private_generateImplementationIndex,
        "generateInterfaceIndex": private_generateInterfaceIndex,
        "generateParser": private_generateParser,
        "generateTypes": private_generateTypes,
        "generateVisit": private_generateVisit,
        "generateVisitorInterface": private_generateVisitorInterface,
    }),
}).asyncMap(($, key) => $.asyncMap(($, key) => $()))