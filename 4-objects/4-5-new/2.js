"use strict";

function Calculator() {
    this.read = function () {
        this.a = +prompt("Введите первое число", '0');
        this.b = +prompt("Введите второе число", '0');
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a - this.b;
    };
}

calculator = new Calculator();
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
