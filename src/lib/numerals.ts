import { Eq, Pred, Succ } from "./arithmetic.ts";
import { F, ToJSBool } from "./booleans.ts";
import { Func } from "./types.ts";

export const N0 = F;
export const N1 = Succ(N0);
export const N2 = Succ(N1);
export const N3 = Succ(N2);
export const N4 = Succ(N3);
export const N5 = Succ(N4);

export const ToJSNumber = (n: Func) => {
    let i = 0;

    while (!ToJSBool(Eq(n)(N0))) {
        n = Pred(n);
        i++;
    }

    return i;
};

export const FromJSNumber = (n: number) => {
    let f = N0;

    for (let i = 0; i < n; i++) {
        f = Succ(f);
    }

    return f;
};
