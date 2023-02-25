"use strict";

function spy(work) {
    function callWork(a, b) {
        callWork.calls.push([a, b]);
        return work.apply(this, [a, b]);
    }
    callWork.calls = [];

    return callWork;
}

function work(a, b) {
    console.log( a + b ); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
