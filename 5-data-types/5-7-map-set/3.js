"use strict";

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys()); //нужно преобразование к массиву

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

