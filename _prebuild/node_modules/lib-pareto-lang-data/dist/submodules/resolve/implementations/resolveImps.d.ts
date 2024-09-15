import * as Resolve from "./Resolve";
import * as g_resolve from "res-pareto-resolve";
import * as g_this from "../glossary";
export declare function resolve<Annotation>($d: {
    readonly resolveDictionary: g_resolve.SYNC.A.F.SafeResolveDictionary;
}, $se: {
    readonly 'onError': g_this.SYNC.I.OnError<Annotation>;
}): Resolve.Resolve<Annotation>;
