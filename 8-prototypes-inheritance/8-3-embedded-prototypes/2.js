"use strict";

Function.prototype.defer = function (delay) {
    let func = this;

    return function () {
        setTimeout(() => func.apply(this, arguments), delay);
    }
}

function f(a, b) {
    console.log( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
