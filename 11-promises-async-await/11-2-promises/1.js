"use strict";

let promise = new Promise(function(resolve, reject) {
    resolve(1);

    setTimeout(() => resolve(2), 1000);
});

promise.then(console.log); //выведет 1, так как после resolve выполнение промиса завершается
