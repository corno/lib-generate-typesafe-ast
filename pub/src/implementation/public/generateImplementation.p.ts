import * as pl from "pareto-core-lib"

import * as fp from "lib-fountain-pen"

import * as api from "../../interface"

import { p_generateParser } from "../private/generateParser.p"
import { p_generateVisit } from "../private/generateVisit.p"
import { p_generateCreateDefaultVisitor } from "../private/generateCreateDefaultVisitor.p"
import { p_generateImplementationIndex } from "../private/generateImplementationIndex.p"
import { FGenerateImplementationFile } from "../types/functions.p"

export const p_generateImplementation: api.FGenerateImplementation = ($, $d, $a) => {
    const conf = $
    const deps = $d


    const generateImplementationX: api.FGenerateImplementation = ($, $d) => {
        const grammar = $.generation.grammar

        function generateFile(
            filePath: api.TPath,
            func: FGenerateImplementationFile,
        ) {

            $d.createWriteStream(
                {
                    path: filePath,
                    createContainingDirectories: true,
                },
                ($i) => {
                    fp.f_createContext(
                        $.fpSettings,
                        ($c) => {
                            func(
                                $.generation,
                                {
                                    block: $c,
                                },
                                {
                                    sortedForEach: $d.sortedForEach,
                                    getKeysAsString: $d.getKeysAsString,
                                }
                            )
                        },
                        $i,
                        {
                            joinNestedStrings: $d.joinNestedStrings,
                            getKeysAsString: $d.getKeysAsString,
                        }

                    )
                },
                {
                    onError: ($) => {
                        pl.implementMe("!!!!")
                    }
                },
                $a,
            )
        }
        generateFile(
            'public/parse.generated.ts',
            p_generateParser,
        )
        generateFile(
            'public/visit.generated.ts',
            p_generateVisit,
        )
        generateFile(
            'public/createDefaultVisitor.generated.ts',
            p_generateCreateDefaultVisitor,
        )
        generateFile(
            'index.ts',
            p_generateImplementationIndex,
        )
    }
    generateImplementationX(
        {
            rootPath: $.rootPath,
            fpSettings: {
                newline: "\n",
                indentation: "    ",
            },
            generation: {
                grammar: conf.generation.grammar,
                pathToInterface: conf.generation.pathToInterface,
            }
        },
        {
            sortedForEach: deps.sortedForEach,
            getKeysAsString: deps.getKeysAsString,
            joinNestedStrings: deps.joinNestedStrings,
            createWriteStream: (
                $,
                $c,
            ) => {
                deps.createWriteStream(
                    {
                        path: [conf.rootPath, $.path],
                        createContainingDirectories: true,
                    },
                    ($i) => {
                        $c($i)
                    },
                    {
                        onError: () => {
                            pl.implementMe("ERROR HANDLER")
                        },
                    },
                    $a,
                )
            },
        },
        $a,
    )
}
