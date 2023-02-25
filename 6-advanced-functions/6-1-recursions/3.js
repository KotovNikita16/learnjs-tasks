"use strict";

//долгий вариант с рекурсией
function fibLong(n) {
    return (n > 2) ? fibLong(n - 1) + fibLong(n - 2) : 1;
}

function fibFast(n) {
    let a = 1, b = 1, c;

    for (let i = 1; i < n; i++) {
        c = b;
        b += a;
        a = c;
    }

    return a;
}

console.log(fibLong(3)); // 2
console.log(fibLong(7)); // 13
console.log(fibFast(77)); // 5527939700884757
