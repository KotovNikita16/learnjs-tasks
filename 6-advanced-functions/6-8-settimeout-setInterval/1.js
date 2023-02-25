"use strict";

function printNumbers1(from, to) {
    let value = from;
    let interval = setInterval( function () {
        console.log(value);
        value++;
        if (value > to) clearInterval(interval);
        }, 1000
    );
}

printNumbers1(1, 5);

function printNumbers2(from, to) {
    let value = from;
    let interval = setTimeout( function action() {
            console.log(value);
            value++;
            if (value <= to) setTimeout(action, 1000);
        }, 1000
    );
}

printNumbers2(1, 5);


