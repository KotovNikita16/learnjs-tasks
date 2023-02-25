"use strict";

function formatDate(date) {
    let now = new Date();
    if (now - date < 1000) {
        return "прямо сейчас";
    }
    if (now - date < 60 * 1000) {
        return (now - date) / 1000 + " сек. назад";
    }
    if (now - date < 60 * 60 * 1000) {
        return (now - date) / (60 * 1000) + " минут назад";
    }
    return date.toLocaleString();
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );
