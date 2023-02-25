"use strict";

class Rabbit {
    constructor(name) {
        this.name = name;
    }
}

let rabbit = new Rabbit("Rab");

// метод hasOwnProperty от Object.prototype
console.log( rabbit.hasOwnProperty('name') ); // true
class Rabbit2 extends Object {
    constructor(name) {
        super(); //Пропущен вызов super(), this не определён.
        this.name = name;
    }
}

let rabbit2 = new Rabbit2("Кроль");

console.log( rabbit2.hasOwnProperty('name') ); // Ошибка