"use strict";

function pow(num1, num2) {
    if (num2 < 1) return;
    let result = 1;
    for (let i = 1; i <= num2; i++) {
        result *= num1;
    }

    return result;
}

console.log( pow(3, 2) );
console.log( pow(3, 3) );
console.log( pow(1, 100) );
