"use strict";
//Через рекурсию
function sumTo(num) {
    if (num === 1) {
        return 1;
    } else {
        return num + sumTo(num - 1);
    }
}

console.log( sumTo(1) )// = 1
console.log( sumTo(2) )// = 2 + 1 = 3
console.log( sumTo(3) )// = 3 + 2 + 1 = 6
console.log( sumTo(4) )// = 4 + 3 + 2 + 1 = 10
console.log( sumTo(100) )// = 100 + 99 + ... + 2 + 1 = 5050

let num = 100;
let sum = 0;
//С использованием цикла
for (let i = 1; i <= num; i++) {
    sum += i;
}
console.log(sum);
//через формулы арифметической прогрессии
sum = (num + 1) * num / 2;
console.log(sum);

//очевидно, что быстрее всего - посчитать через прогрессию. Через цикл - O(n), что быстрее,
//так как рекурсия требует дополнительных затрат на обратные вызовы

//Можно ли при помощи рекурсии посчитать sumTo(100000)?
console.log(sumTo(100000)); //стэк переполнен