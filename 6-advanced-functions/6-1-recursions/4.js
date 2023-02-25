"use strict";

function printListLoop(list) {
    let current = list.next;
    console.log(list.value);
    while (current) {
        console.log(current.value);
        current = current.next;
    }
}

function printListRec(list) {
    console.log(list.value);
    if (list.next) printListRec(list.next);
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printListLoop(list);
printListRec(list);
