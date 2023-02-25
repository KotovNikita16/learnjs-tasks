"use strict";

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumSalaries(salaries) {
    let sum = 0;

    for (let employer in salaries) {
        sum += salaries[employer];
    }

    return sum;
}

let sum = sumSalaries(salaries);
console.log(sum);
