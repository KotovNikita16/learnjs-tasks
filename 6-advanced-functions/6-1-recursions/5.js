"use strict";

function printListLoop(list) {
    let current = list.next;
    let values = [list.value];

    while (current) {
        values.push(current.value);
        current = current.next;
    }

    console.log(values.reverse());
}

function printListRec(list) {
    if (list.next) printListRec(list.next);
    console.log(list.value);
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
