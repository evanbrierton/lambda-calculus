import { C, K, KI } from "./combinators.ts";
import type { Func } from "./types.ts";

// True λab.a (true ? a : b)
export const True = K;
export const T = True;

// False λab.b (false ? a : b)
export const False = KI;
export const F = False;

// Not λp.p(T)(F) (negation)
export const Not = C;

// And λpq.pqF (conjunction)
export const And = (p: Func) => (q: Func) => p(q)(p);

// Or λpq.pTq (disjunction)
export const Or = (p: Func) => (q: Func) => p(p)(q);

// Beq λpq.pq(¬q) (equality)
export const Beq = (p: Func) => (q: Func) => p(q)(Not(q));

export const FromJSBool = (b: boolean) => (b ? T : F);
export const ToJSBool = (b: Func) => b(T)(F) === T;
