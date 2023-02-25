"use strict";

let animals;

// тоже работает
animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];
animals.sort(
    (a, b) => a.localeCompare(b)
);

console.log( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК

animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let collator = new Intl.Collator();
animals.sort(
    (a, b) => collator.compare(a, b)
);

console.log( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК