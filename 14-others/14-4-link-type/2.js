"use strict";

let obj, method;

obj = {
    go: function() { console.log(this); }
};

obj.go();               // (1) [object Object] обычный вызов метода

(obj.go)();             // (2) [object Object] аналогично с предыдущей задачей

(method = obj.go)();    // (3) undefined присваивание функции приводит к потере this

(obj.go || obj.stop)(); // (4) undefined результатом || является функция без this