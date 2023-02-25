"use strict";

let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, index, receiver) {
        if (index < 0) {
            index = target.length + (+index);
        }
        return Reflect.get(target, index, receiver);
    }
});

console.log(array[-1]); // 3, последний элемент
console.log(array[-2]); // 2, предпоследний элемент
console.log(array[-3]); // 1, за два элемента до последнего