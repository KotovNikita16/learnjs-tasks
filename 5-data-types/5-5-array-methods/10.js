"use strict";

function shuffle(arr) {
    arr.forEach( (value, index, array) => {
        let swapIndex = Math.floor((index + 1) * Math.random());
        [ array[index], array[swapIndex] ] = [ array[swapIndex], array[index] ];
    } )

    return arr;
}

let arr = [1, 2, 3];

let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};

for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
}

// показать количество всех возможных вариантов
for (let key in count) {
    console.log(`${key}: ${count[key]}`);
}