import type { Func } from "./types.ts";

// Idiot λa.a (identity)
export const I = (a: Func) => a;

// Mockingbird λf.ff (self-application)
export const M = (f: Func) => f(f);

// Kestrel λab.a (first)
export const K = (a: Func) => (_: Func) => a;

// Kite λab.b (second)
export const KI = K(I);

// Cardinal λfab.fba (reverse application)
export const C = (f: Func) => (a: Func) => (b: Func) => f(b)(a);

// Bluebird λfga.f(ga) (1 <- 1 composition)
export const B = (f: Func) => (g: Func) => (a: Func) => f(g(a));

// Starling λabc.ac(bc) (composition)
export const S = (a: Func) => (b: Func) => (c: Func) => a(c)(b(c));

// Thrush λaf.fa (hold an argument)
export const Th = C(I);

// Vireo λabf.fab (hold a pair of arguments)
export const V = B(C)(Th);

// Blackbird λfgab.f(gab) (1 <- 2 composition)
export const B1 = B(B)(B);
