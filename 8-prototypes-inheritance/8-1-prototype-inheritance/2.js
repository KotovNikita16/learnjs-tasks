"use strict";

let head = {
    glasses: 1
};

let table = {
    __proto__: head,
    pen: 3
};

let bed = {
    __proto__: table,
    sheet: 1,
    pillow: 2
};

let pockets = {
    __proto__: bed,
    money: 2000
};

console.log(pockets.pen);
console.log(bed.glasses);

//одинаково по времени доступа получается свойство glasses как из pockets, так из head,
// так как glasses копируетстя в pockets после исполнения
