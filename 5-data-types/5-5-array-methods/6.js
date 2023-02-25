"use strict";

function Calculator() {
    this.methods = [ "+" ];
    this["+"] = (a, b) => a + b;

    this.calculate = function (str) {
        let operands = str.split(" ");

        let operation = this.methods.find(item => item === operands[1]);

        if (operation && operands[0] && operands[2]) {
            return this[operation](+operands[0], +operands[2]);
        }
        return null;
    }

    this.addMethod = function (str, func) {
        this[str] = func;
        this.methods.push(str);
    }
}

let powerCalc  = new Calculator;

console.log( powerCalc.calculate("3 + 7") ); // 10

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8
