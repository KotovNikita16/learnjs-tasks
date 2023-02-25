"use strict";

function sum(a) {
    return function (num) {
        return a + num;
    }
}

console.log(sum(1)(2));
console.log(sum(5)(-1));
