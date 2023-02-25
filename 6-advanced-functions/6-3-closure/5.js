"use strict";
function inBetween(a, b) {
    return function (elem) {
        return elem >= a && elem <= b;
    }
}

function inArray(values) {
    return function (elem) {
        return values.includes(elem);
    }
}

/* .. ваш код для inBetween и inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2