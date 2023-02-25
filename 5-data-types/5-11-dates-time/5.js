"use strict";

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month);
    date.setMonth(date.getMonth() + 1);
    date.setDate(date.getDate() - 1);
    //date = new Date(year, month + 1, 0);
    return date.getDate()
}

console.log(getLastDayOfMonth(2012, 1));
