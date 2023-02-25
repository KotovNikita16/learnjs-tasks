"use strict";

function makeObservable(target) {
    let handlers = [];

    target.observe = function (handler) {
        handlers.push(handler);
    }

    return new Proxy(target, {
        set(target, prop, receiver) {
            let success = Reflect.set(target, prop, receiver);

            if (success) {
                for (let handler of handlers) {
                    handler(prop, target[prop]);
                }
            }
            return success;
        }
    });
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
});

user.name = "John"; // выводит: SET name=John
