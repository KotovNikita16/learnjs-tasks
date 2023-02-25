"use strict";

let user = {
    name: "John",
    go: function() { console.log(this.name) }
}; //пропущена ;

(user.go)() //работает, так как () лишь определяет порядок действия
