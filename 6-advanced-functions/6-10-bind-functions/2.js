"use strict";

function f() {
    console.log(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } ); //дважды сделать bind нельзя

f(); //Вася
