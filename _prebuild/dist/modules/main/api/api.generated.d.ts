import * as g_main from "res-pareto-main";
export type main = ($: g_main.T.MainData) => void;
export type API = {
    main: main;
};
