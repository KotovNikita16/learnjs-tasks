"use strict";

let age = 14;

//без !
if (age < 14 || age > 90) {
    console.log("yes");
} else {
    console.log("no");
}

//с !
if (!(age >= 14 && age <= 90)) {
    console.log("yes");
} else {
    console.log("no");
}

