"use strict";

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries = {}) {
    let topEmployer = null;
    let topSalary = 0;

    for (let [key, value] of Object.entries(salaries)) {
        if (value > topSalary) {
            topEmployer = key;
            topSalary = value;
        }
    }

    return topEmployer;
}

console.log(topSalary(salaries));
