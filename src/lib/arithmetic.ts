import { And, F, Not, T } from "./booleans.ts";
import { B, B1, K, Th } from "./combinators.ts";
import { Fst, Pair, Phi } from "./pairs.ts";
import { Func } from "./types.ts";

export const Succ = (n: Func) => (f: Func) => B(f)(n(f));

export const Add = (n: Func) => (k: Func) => n(Succ)(k);

export const Mult = B;

export const Pow = Th;

export const Pred = (n: Func) => Fst(n(Phi)(Pair(F)(F)));

export const Sub = (n: Func) => (k: Func) => k(Pred)(n);

// Is0 λn.n(K F) T (test if n = 0)
export const Is0 = (n: Func) => n(K(F))(T);

// Leq λnk.Is0 (Sub n k) (test if n ≤ k)
export const Leq = (n: Func) => (k: Func) => Is0(Sub(n)(k));

// Eq λnk.And (Leq n k)(Leq k n) (test if n = k)
export const Eq = (n: Func) => (k: Func) => And(Leq(n)(k))(Leq(k)(n));

// Gt λnk.B1 Not Leq (test if n > k)
export const Gt = B1(Not)(Leq);
