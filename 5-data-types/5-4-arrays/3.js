"use strict"

let arr = ["a", "b"];

arr.push(function() {
    console.log( this );
});

arr[2](); // выведет сам массив, так как this функции привязывается к массиву.