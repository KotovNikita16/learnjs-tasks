"use strict";

console.log( 1.35.toFixed(1) ); // 1.4

console.log( 6.35.toFixed(1) ); // 6.3

//Это происходит из за того, что представление 6.35 в JS меньше, чем 6.35
console.log(6.35.toFixed(20)); // 6.34999999999999964473

//лучше округлить так:

console.log(Math.round(6.35 * 10) / 10);
