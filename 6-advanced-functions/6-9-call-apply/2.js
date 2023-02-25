"use strict";

function delay(func, interval) {
    function run() {
        setTimeout(() => func.apply(this, arguments), interval);
    }

    return run;
}

function f(x) {
    console.log(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс