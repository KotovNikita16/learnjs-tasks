"use strict";

function fSum() {
    function count(a) {
        count.sum += a;
        return count;
    }

    count.toString = function () {
        let ret = count.sum;
        //count.sum = 0;
        return `${ret}`;
    };

    count.sum = 0;
    return count;
}

let sum = fSum();

console.log(sum(1)(2).toString()); // 1 + 2
console.log(sum(1)(2)(3).toString());// == 6; // 1 + 2 + 3
console.log(sum(5)(-1)(2).toString());// == 6
console.log(sum(6)(-1)(-2)(-3).toString());// == 0
console.log(sum(0)(1)(2)(3)(4)(5).toString());// == 15
