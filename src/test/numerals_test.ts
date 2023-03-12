import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import { Eq } from "../lib/arithmetic.ts";
import {
  FromJSNumber,
  N0,
  N1,
  N2,
  N3,
  N4,
  N5,
  ToJSNumber,
} from "../lib/numerals.ts";
import { assertBoolean } from "./asserts.ts";

Deno.test(function fromJSNumberTest() {
  assertBoolean(Eq(FromJSNumber(0))(N0), true);
  assertBoolean(Eq(FromJSNumber(1))(N1), true);
  assertBoolean(Eq(FromJSNumber(2))(N2), true);
  assertBoolean(Eq(FromJSNumber(3))(N3), true);
  assertBoolean(Eq(FromJSNumber(4))(N4), true);
  assertBoolean(Eq(FromJSNumber(5))(N5), true);
});

Deno.test(function toJsNumberTest() {
  assertEquals(ToJSNumber(N0), 0);
  assertEquals(ToJSNumber(N1), 1);
  assertEquals(ToJSNumber(N2), 2);
  assertEquals(ToJSNumber(N3), 3);
  assertEquals(ToJSNumber(N4), 4);
  assertEquals(ToJSNumber(N5), 5);
});
