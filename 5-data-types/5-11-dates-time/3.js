"use strict";

function getLocalDay(date) {
    let europeanDay = [7, 1, 2, 3, 4, 5, 6];
    return europeanDay[date.getDay()];
}

let date = new Date(2011, 11, 30);  // 3 января 2012 года
console.log( getLocalDay(date) );       // вторник, нужно показать 2
