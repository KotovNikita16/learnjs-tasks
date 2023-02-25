"use strict";

function aclean(arr) {
    let map = new Map();

    for (let inWord of arr) {
        let sortedWord = inWord.toLowerCase()
            .split("")
            .sort()
            .join();

        map.set(sortedWord, inWord);
    }

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
