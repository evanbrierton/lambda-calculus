import { Add, Eq, Is0 } from "../lib/arithmetic.ts";
import { N0, N1, N2, N3, N4, N5 } from "../lib/numerals.ts";
import { assertBoolean } from "./asserts.ts";

Deno.test(function is0Test() {
  assertBoolean(Is0(N0), true);
  assertBoolean(Is0(N1), false);
  assertBoolean(Is0(N2), false);
  assertBoolean(Is0(N3), false);
  assertBoolean(Is0(N4), false);
  assertBoolean(Is0(N5), false);
});

Deno.test(function addTest() {
  assertBoolean(Eq(Add(N0)(N0))(N0), true);
});
