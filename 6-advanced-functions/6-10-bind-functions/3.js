"use strict";
function sayHi() {
    console.log( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася"
});

alert( bound.test ); // что выведет? почему?
//ошибка, так как функция привязана к объекту {name: "Вася"}, и у него нет свойства test