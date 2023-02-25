"use strict";

function throttle(func, delay) {
    let isCooldown = false;
    let lastValue = null;
    let lastThis = null;

    return function () {
        if (isCooldown) {
            lastValue = arguments;
            lastThis = this;
        } else {
            func.apply(this, arguments);
            isCooldown = true;

            setTimeout(() => {
                if (lastValue) {
                    func.apply(lastThis, lastValue);
                    lastThis = lastValue = null;
                }
                isCooldown = false;
            }, delay);
        }
    }
}

function f(a) {
    console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано
