"use strict";

function checkAge1(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}

function checkAge2(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}

function checkAge3(age) {
    return age > 18 || confirm('Родители разрешили?');
}

let age = +prompt("Сколько Вам лет?", '0');

checkAge1(age);
checkAge2(age)
checkAge3(age)
