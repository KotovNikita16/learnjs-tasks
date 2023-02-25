"use strict";

let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.eat();

console.log(animal, rabbit); //rabbit, так как this == rabbit
