import { assert } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import { I, K, KI, M } from "../lib/combinators.ts";
import { FromJSNumber, N0, N1, N2, N3, N4, N5 } from "../lib/numerals.ts";
import { Fst, Pair, Phi, Set1st, Set2nd, Snd } from "../lib/pairs.ts";
import { Func } from "../lib/types.ts";
import { assertNumberEqual } from "./asserts.ts";

function assertNumericalPairEquals(a: Func, b: Func) {
    assertNumberEqual(Fst(a), Fst(b));
    assertNumberEqual(Snd(a), Snd(b));
}

Deno.test(function testPair() {
    const pair = Pair(M)(I);
    assert(pair(K) === M);
    assert(pair(KI) === I);
});

Deno.test(function testFst() {
    assertNumberEqual(Fst(Pair(N1)(N2)), N1);
    assertNumberEqual(Fst(Pair(N0)(N1)), N0);
    assert(Fst(Pair(M)(I)) == M);
});

Deno.test(function testSnd() {
    assertNumberEqual(Snd(Pair(N1)(N2)), N2);
    assertNumberEqual(Snd(Pair(N0)(N1)), N1);
    assert(Snd(Pair(M)(I)) == I);
});

Deno.test(function phiTest() {
    assertNumericalPairEquals(Phi(Pair(N0)(N0)), Pair(N0)(N1));
    assertNumericalPairEquals(Phi(Pair(N5)(N0)), Pair(N0)(N1));
    assertNumericalPairEquals(Phi(Pair(N1)(N1)), Pair(N1)(N2));
    assertNumericalPairEquals(Phi(Pair(N0)(N4)), Pair(N4)(N5));
    assertNumericalPairEquals(Phi(Pair(FromJSNumber(10))(FromJSNumber(2))), Pair(N2)(N3));
});

Deno.test(function set1stTest() {
    assertNumericalPairEquals(Set1st(N1)(Pair(N0)(N0)), Pair(N1)(N0));
    assertNumericalPairEquals(Set1st(N0)(Pair(N4)(N4)), Pair(N0)(N4));
    assertNumericalPairEquals(Set1st(N0)(Pair(N4)(N2)), Pair(N0)(N2));
});


Deno.test(function set2nd() {
    assertNumericalPairEquals(Set2nd(N1)(Pair(N0)(N0)), Pair(N0)(N1));
    assertNumericalPairEquals(Set2nd(N0)(Pair(N4)(N4)), Pair(N4)(N0));
    assertNumericalPairEquals(Set2nd(N0)(Pair(N2)(N4)), Pair(N2)(N0));
});
