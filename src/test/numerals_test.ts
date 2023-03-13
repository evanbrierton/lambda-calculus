import { assertEquals as rawAssertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";
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
import { assert } from "./asserts.ts";

Deno.test(function fromJSNumberTest() {
  assert(Eq(FromJSNumber(0))(N0));
  assert(Eq(FromJSNumber(1))(N1));
  assert(Eq(FromJSNumber(2))(N2));
  assert(Eq(FromJSNumber(3))(N3));
  assert(Eq(FromJSNumber(4))(N4));
  assert(Eq(FromJSNumber(5))(N5));
});

Deno.test(function toJsNumberTest() {
  rawAssertEquals(ToJSNumber(N0), 0);
  rawAssertEquals(ToJSNumber(N1), 1);
  rawAssertEquals(ToJSNumber(N2), 2);
  rawAssertEquals(ToJSNumber(N3), 3);
  rawAssertEquals(ToJSNumber(N4), 4);
  rawAssertEquals(ToJSNumber(N5), 5);
});
