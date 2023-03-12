import { assert } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import { ToJSBool } from "../lib/booleans.ts";
import { Func } from "../lib/types.ts";

export const assertBoolean = (lambda_boolean: Func, expected: boolean) => {
    const actual = ToJSBool(lambda_boolean);
    assert(actual === expected);
};
