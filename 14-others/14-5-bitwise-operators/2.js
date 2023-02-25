"use strict";

function isInteger(num) {
    console.log(~~num);
    return ~~num === num;
}

console.log( isInteger(1) ); // true
console.log( isInteger(1.5) ); // false
console.log( isInteger(-0.5) ); // false
console.log( isInteger(6) ); // true
console.log( isInteger(6.1) ); // false