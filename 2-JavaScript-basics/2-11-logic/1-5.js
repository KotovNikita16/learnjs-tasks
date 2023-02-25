"use strict";

console.log( null || 2 || undefined ); // 2

console.log( console.log(1) || 2 || console.log(3) ); // сначала 1, затем 2

console.log( 1 && null && 2 ); // null

// сначала 1, затем undefined (первое ложное значение, которому соответствует возвращаемое значение console.log())
console.log( console.log(1) && console.log(2) );

console.log( null || 2 && 3 || 4 ); // 3 (выполнение оперции 2 && 3 сначала, затем первое истинное значение 3)
