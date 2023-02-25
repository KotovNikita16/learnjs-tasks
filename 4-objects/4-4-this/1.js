"use strict";

function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

console.log( user.ref.name ); // Каким будет результат? Ошибка, т.к. this не является фиксированным
