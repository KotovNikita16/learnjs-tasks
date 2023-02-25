"use strict";

function filterRangeInPlace(arr, start, end) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < start || arr[i] > end) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let arr = [1, 5, 3, 8, 1, 2];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log( arr ); // [3, 1]
