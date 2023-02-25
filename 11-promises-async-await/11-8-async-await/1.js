"use strict";
/*
function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status.toString());
            }
        })
}

loadJson('no-such-user.json') // (3)
    .catch(console.log); // Error: 404
*/
async function loadJson(url) {
    let response = await fetch(url); // (2)

    if (response.status == 200) {
        return await response.json();
    }

    throw new Error(response.status);
}

loadJson('no-such-user.json') // (3)
    .catch(console.log); // Error: 404
