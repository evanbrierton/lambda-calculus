import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import { Not, T } from "../lib/booleans.ts";
import { B, C, I, K, KI, M } from "../lib/combinators.ts";
import { assert } from "./asserts.ts";

Deno.test(function identityTest() {
  assertEquals(I(I), I);
});

Deno.test(function mockingbirdTest() {
  assertEquals(M(I), I);
});

Deno.test(function kestrelTest() {
  assertEquals(K(M)(I), M);
  assertEquals(K(I)(M), I);
});

Deno.test(function kiteTest() {
  assertEquals(KI(M)(K), K);
  assertEquals(KI(K)(M), M);
});

Deno.test(function cardinalTest() {
  assertEquals(C(K)(I)(M), M);
});

Deno.test(function bluebirdTest() {
  assert(B(Not)(Not)(T));
});
