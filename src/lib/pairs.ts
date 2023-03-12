import { Succ } from "./arithmetic.ts";
import { K, KI, V } from "./combinators.ts";
import type { Func } from "./types.ts";

export const Pair = V;

export const Fst = (p: Func) => p(K);

export const Snd = (p: Func) => p(KI);

export const Phi = (p: Func) => Pair(Snd(p))(Succ(Snd(p)));

export const Set1st = (c: Func) => (p: Func) => Pair(c)(Snd(p));

export const Set2nd = (c: Func) => (p: Func) => Pair(Fst(p))(c);
