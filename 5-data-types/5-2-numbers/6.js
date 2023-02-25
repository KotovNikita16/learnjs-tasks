"use strict";

function randomInteger(start, end) {
    return Math.floor((end - start + 1) * Math.random() + start);
}

console.log( randomInteger(1, 5) ); // 1
console.log( randomInteger(1, 5) ); // 3
console.log( randomInteger(1, 5) ); // 5