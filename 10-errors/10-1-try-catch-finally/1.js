"use strict";

function foo() {
    try {
        throw new Error("ошибка");
    } catch (e) {
        throw e;
    } finally {
        console.log("in finally"); //лучше использовать finally, так как внутри finally действие всегда выполнится
    }
}

//foo();

function bar() {
    try {
        throw new Error("ошибка");
    } catch (e) {
        throw e;
    }
    console.log("in finally"); //не выполнится
}

bar();
