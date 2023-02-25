"use strict";

let result, a = 2, b = 1;

if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Много';
}

console.log(result);

//Перепишите конструкцию if с использованием условного оператора '?'
result = a + b < 4 ? 'Мало' : 'Много';

console.log(result);
