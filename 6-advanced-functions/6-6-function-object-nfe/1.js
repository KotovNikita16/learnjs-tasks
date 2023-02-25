"use strict";

function makeCounter() {
    function counter() {
        return counter.count++;
    }
    counter.set = function set(value) {
        counter.count = value;
    }
    counter.decrease = function decrease() {
        return counter.count--;
    }

    counter.count = 0;

    return counter;
}

let counter = makeCounter();
console.log( counter() ); // 0
console.log( counter() ); // 1

counter.set(8);
console.log( counter.decrease() ); // 0
