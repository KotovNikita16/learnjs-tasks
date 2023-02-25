"use strict";

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

//лучше использовать WeakMap
let readTime = new WeakMap();

readTime.set(messages[0], new Date().toLocaleString());
readTime.set(messages[1], new Date().toLocaleString());

console.log(readTime.get(messages[0]));
