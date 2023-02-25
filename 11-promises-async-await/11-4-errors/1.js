"use strict";

new Promise(function(resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(console.log);

//не выполнится, так как Promise имеет свой скрытый try-catch внутри
