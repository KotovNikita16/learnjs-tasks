"use strict";

function f() {
    console.log( this ); // ?
}

let login = {};

let user = {
    //g: f.bind(null)
    g: f.bind(null)
};

user.g(); //null, так как привязка не работает.
