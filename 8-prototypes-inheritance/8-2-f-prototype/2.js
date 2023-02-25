"use strict";

//пример создание из конструктора объекта, созданного с помощью new Function
function Obj(name) {
    this.name = name;
}

let obj = new Obj("obj");

let obj2 = new obj.constructor("obj1");

console.log(obj.name, obj2.name);

//пример нарушения такого создания

Obj.prototype = null;

obj = new Obj("new obj");

let obj3 = new obj.constructor("obj3"); //ссылается на конструктор из Obj.prototype

console.log(obj.name, obj3.name);
