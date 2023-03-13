import {
  assert as rawAssert,
  assertFalse as rawAssertFalse,
} from "https://deno.land/std@0.178.0/testing/asserts.ts";
import {
  And,
  Beq,
  F,
  FromJSBool,
  Not,
  Or,
  T,
  ToJSBool,
} from "../lib/booleans.ts";
import { I, M } from "../lib/combinators.ts";
import { assert, assertFalse } from "./asserts.ts";

Deno.test(function trueTest() {
  rawAssert(T(I)(M) === I);
});

Deno.test(function falseTest() {
  rawAssert(F(I)(M) === M);
});

Deno.test(function toJSBoolTest() {
  rawAssert(ToJSBool(T));
  rawAssertFalse(ToJSBool(F));
});

Deno.test(function fromJSBoolTest() {
  assert(FromJSBool(true));
  assertFalse(FromJSBool(false));
});

Deno.test(function andTest() {
  assertFalse(And(F)(F));
  assertFalse(And(F)(T));
  assertFalse(And(T)(F));
  assert(And(T)(T));
});

Deno.test(function notTest() {
  assert(Not(F));
  assertFalse(Not(T));
});

Deno.test(function orTest() {
  assertFalse(Or(F)(F));
  assert(Or(F)(T));
  assert(Or(T)(F));
  assert(Or(T)(T));
});

Deno.test(function beqTest() {
  assert(Beq(F)(F));
  assertFalse(Beq(F)(T));
  assertFalse(Beq(T)(F));
  assert(Beq(T)(T));
});
