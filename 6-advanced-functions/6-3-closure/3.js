"use strict";

let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        alert(`${phrase}, ${user}`);
    }
}

sayHi(); //ошибка, так как функция осталась в лексическом окружении if (true) {}
