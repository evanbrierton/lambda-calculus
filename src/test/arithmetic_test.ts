import { assertEquals as rawAssertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import { Add, Eq, Gt, Is0, Leq, Mult, Pow, Pred, Sub, Succ } from "../lib/arithmetic.ts";
import { FromJSNumber, N0, N1, N2, N3, N4, N5, ToJSNumber } from "../lib/numerals.ts";
import { assert, assertFalse, assertNumberEqual } from "./asserts.ts";

Deno.test(function succTest() {
  assertNumberEqual(Succ(N0), N1);
  assertNumberEqual(Succ(N1), N2);
  assertNumberEqual(Succ(N2), N3);
  assertNumberEqual(Succ(N3), N4);
  assertNumberEqual(Succ(N4), N5);
  assertNumberEqual(Succ(FromJSNumber(100)), FromJSNumber(101));
});

Deno.test(function addTest() {
  assertNumberEqual(Add(N0)(N0), N0);
  assertNumberEqual(Add(N0)(N1), N1);
  assertNumberEqual(Add(N1)(N0), N1);
  assertNumberEqual(Add(N3)(N2), N5);
  assertNumberEqual(Add(N2)(N2), N4);

  assertNumberEqual(Add(FromJSNumber(100))(FromJSNumber(42)), FromJSNumber(142));
  assertNumberEqual(Add(FromJSNumber(42))(FromJSNumber(100)), FromJSNumber(142));
});

Deno.test(function multTest() {
  assertNumberEqual(Mult(N0)(N0), N0);
  assertNumberEqual(Mult(N0)(N1), N0);
  assertNumberEqual(Mult(N1)(N0), N0);
  assertNumberEqual(Mult(N3)(N2), FromJSNumber(6));
  assertNumberEqual(Mult(N2)(N2), N4);

  assertNumberEqual(Mult(N5)(FromJSNumber(10)), FromJSNumber(50));
  assertNumberEqual(Mult(FromJSNumber(10))(N5), FromJSNumber(50));
});

Deno.test(function powTest() {
  assertNumberEqual(Pow(N1)(N1), N1);
  assertNumberEqual(Pow(N2)(N1), N2);
  assertNumberEqual(Pow(N2)(N2), N4);
  assertNumberEqual(Pow(N3)(N3), FromJSNumber(27));
  assertNumberEqual(Pow(N5)(N2), FromJSNumber(25));
});

Deno.test(function predTest() {
  assertNumberEqual(Pred(N1), N0);
  assertNumberEqual(Pred(N2), N1);
  assertNumberEqual(Pred(N3), N2);
  assertNumberEqual(Pred(N4), N3);
  assertNumberEqual(Pred(N5), N4);
  assertNumberEqual(Pred(FromJSNumber(100)), FromJSNumber(99));
});

Deno.test(function subTest() {
  assertNumberEqual(Sub(N5)(N0), N5);
  assertNumberEqual(Sub(N5)(N1), N4);
  assertNumberEqual(Sub(N5)(N2), N3);
  assertNumberEqual(Sub(N4)(N4), N0);
  assertNumberEqual(Sub(FromJSNumber(100))(FromJSNumber(50)), FromJSNumber(50));
});

Deno.test(function is0Test() {
  assert(Is0(N0));
  assertFalse(Is0(N1));
  assertFalse(Is0(N2));
  assertFalse(Is0(N3));
  assertFalse(Is0(N4));
  assertFalse(Is0(N5));
});

Deno.test(function leqTest() {
  assert(Leq(N0)(N0));
  assert(Leq(N0)(N5));
  assert(Leq(N3)(N5));
  assert(Leq(FromJSNumber(99))(FromJSNumber(100)));

  assertFalse(Leq(N5)(N3));
  assertFalse(Leq(N5)(N0));
  assertFalse(Leq(N5)(N0));
  assertFalse(Leq(FromJSNumber(100))(FromJSNumber(99)));
});

Deno.test(function eqTest() {
  assert(Eq(N0)(N0));
  assert(Eq(N1)(N1));
  assert(Eq(N2)(N2));
  assert(Eq(FromJSNumber(100))(FromJSNumber(100)));

  assertFalse(Eq(N0)(N1));
  assertFalse(Eq(N1)(N0));
  assertFalse(Eq(N3)(N5));

  assertFalse(Eq(FromJSNumber(99))(FromJSNumber(100)));
});

Deno.test(function gtTest() {
  assertFalse(Gt(N0)(N0));
  assertFalse(Gt(N0)(N5));
  assertFalse(Gt(N3)(N5));
  assertFalse(Gt(FromJSNumber(99))(FromJSNumber(100)));

  assert(Gt(N5)(N3));
  assert(Gt(N5)(N0));
  assert(Gt(N5)(N0));
  assert(Gt(FromJSNumber(100))(FromJSNumber(99)));
});
