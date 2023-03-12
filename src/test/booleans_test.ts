import { assert, assertFalse } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import { And, Beq, F, FromJSBool, Not, Or, T, ToJSBool } from "../lib/booleans.ts";
import { I, M } from "../lib/combinators.ts";
import { assertBoolean } from "./asserts.ts";

Deno.test(function trueTest() {
    assert(T(I)(M) === I);
});

Deno.test(function falseTest() {
    assert(F(I)(M) === M);
});

Deno.test(function toJSBoolTest() {
    assert(ToJSBool(T));
    assertFalse(ToJSBool(F));
});

Deno.test(function fromJSBoolTest() {
    assertBoolean(FromJSBool(true), true);
    assertBoolean(FromJSBool(false), false);
});

Deno.test(function andTest() {
    assertBoolean(And(F)(F), false);
    assertBoolean(And(F)(T), false);
    assertBoolean(And(T)(F), false);
    assertBoolean(And(T)(T), true);
});

Deno.test(function notTest() {
    assertBoolean(Not(F), true);
    assertBoolean(Not(T), false);
});

Deno.test(function orTest() {
    assertBoolean(Or(F)(F), false);
    assertBoolean(Or(F)(T), true);
    assertBoolean(Or(T)(F), true);
    assertBoolean(Or(T)(T), true);
});

Deno.test(function beqTest() {
    assertBoolean(Beq(F)(F), true);
    assertBoolean(Beq(F)(T), false);
    assertBoolean(Beq(T)(F), false);
    assertBoolean(Beq(T)(T), true);
});
