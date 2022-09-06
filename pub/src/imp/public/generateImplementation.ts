import * as pl from "pareto-core-lib"

import * as fp from "lib-fountain-pen"
import * as main from "api-pareto-main"
import * as collation from "api-pareto-collation"
import * as fs from "api-pareto-filesystem"

import * as api from "../../interface"

import { generateParse } from "../private/generateParser"
import { generateVisit } from "../private/generateVisit"
import { generateCreateDefaultVisitor } from "../private/generateCreateDefaultVisitor"
import { generateImplementationIndex } from "../private/generateImplementationIndex"
import { XGenerateImplementationFile } from "../private/GenerateFile"

export type DImplementationDependencies = {
    readonly isYinBeforeYang: collation.IsYinBeforeYang
    readonly createWriteStream: fs.CreateWriteStream
    readonly startAsync: main.StartAsync
}

export function generateImplementation(
    $: {
        grammar: api.TGrammar,
        rootPath: api.TPath,
        pathToInterface: string,
    },
    $d: DImplementationDependencies
): void {
    const conf = $
    const deps = $d


    const generateImplementationX: api.XGenerateImplementation = ($, $d) => {
        const grammar = $.generation.grammar

        function generateFile(
            filePath: api.TPath,
            func: XGenerateImplementationFile,
        ) {

            $d.createWriteStream(
                {
                    path: filePath
                },
                ($c) => {
                    fp.createContext(
                        $.fpSettings,
                        ($c) => {
                            func(
                                $.generation,
                                {
                                    block: $c,
                                },
                                {
                                    isYinBeforeYang: $d.isYinBeforeYang,
                                }
                            )

                        },
                        {
                            consumer: $c
                        }

                    )
                }
            )
        }
        generateFile(
            'public/parse.generated.ts',
            generateParse,
        )
        generateFile(
            'public/visit.generated.ts',
            generateVisit,
        )
        generateFile(
            'public/createDefaultVisitor.generated.ts',
            generateCreateDefaultVisitor,
        )
        generateFile(
            'index.ts',
            generateImplementationIndex,
        )
    }
    generateImplementationX(
        {
            fpSettings: {
                newline: "\n",
                indentation: "    ",
            },
            generation: {
                grammar: conf.grammar,
                pathToInterface: conf.pathToInterface,
            }
        },
        {
            isYinBeforeYang: deps.isYinBeforeYang,
            createWriteStream: (
                $,
                $c,
            ) => {
                $d.startAsync(
                    deps.createWriteStream(
                        {
                            path: [conf.rootPath, $.path],
                            createContainingDirectories: true,
                        },
                        {
                            onError: () => {
                                pl.implementMe("ERROR HANDLER")
                            }
                        },
                        ($c2) => {
                            $c($c2)
                        }
                    )
                )
            }
        }
    )
    // const argStack = pm.createStack($.arguments)

    // argStack.pop(
    //     (first) => {

    //         argStack.pop(
    //             (second) => {
    //                 const rootPath = first

    //             },
    //             () => {
    //                 pl.panic("args")
    //             }
    //         )
    //     },
    //     () => {
    //         pl.panic("args")
    //     }
    // )
}
