"use strict";

function unique(arr) {
    let uniqueWords = [];

    for (let elem of arr) {
        if ( !uniqueWords.includes(elem) ) {
            uniqueWords.push(elem);
        }
    }

    return uniqueWords;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O
