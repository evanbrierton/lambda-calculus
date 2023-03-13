import { assert as booleanAssert, assertEquals, assertFalse as booleanAssertFalse } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import { ToJSBool } from "../lib/booleans.ts";
import { ToJSNumber } from "../lib/numerals.ts";
import { Func } from "../lib/types.ts";

export const assert = (actual_lambda: Func) => {
  booleanAssert(ToJSBool(actual_lambda));
};

export const assertFalse = (actual_lambda: Func) => {
  booleanAssertFalse(ToJSBool(actual_lambda));
};

export const assertNumberEqual = (actual: Func, expected: Func) => {
  assertEquals(ToJSNumber(actual), ToJSNumber(expected));
};
