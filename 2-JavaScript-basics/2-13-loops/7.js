"use strict";

let n = 10;

for (let i = 2; i <= n; i++) {
    let j = 2;
    for (; j < i; j++) {
        if (i % j === 0) {
            break;
        }
    }
    if (j === i || i === 2) {
        console.log(i);
    }
}
