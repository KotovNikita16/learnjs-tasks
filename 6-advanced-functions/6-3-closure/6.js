"use strict";

function byField(field) {
    return function(elemA, elemB) {
        return (typeof elemA[field] === "string") ?
            elemA[field].localeCompare(elemB[field]) :
            elemA[field] - elemB[field];
    }
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byField('name'));
console.log(users);

users.sort(byField('age'));
console.log(users);
