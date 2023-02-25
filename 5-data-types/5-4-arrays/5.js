"use strict"

function getMaxSubSum(array) {
    let currentSum = 0;
    let resultSum = -Infinity;

    for (let el of array) {
        currentSum += el;
        resultSum = Math.max(resultSum, currentSum);
        currentSum = (currentSum < 0) ? 0 : currentSum;
    }

    return resultSum === -Infinity ? 0 : resultSum;
}

console.log( getMaxSubSum([-1, 2, 3, -9]) );
console.log( getMaxSubSum([2, -1, 2, 3, -9]) );
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) );
console.log( getMaxSubSum([-2, -1, 1, 2]) );
console.log( getMaxSubSum([100, -9, 2, -3, 5]) );
console.log( getMaxSubSum([1, 2, 3]) );
console.log( getMaxSubSum([-6, -1, -3]) );
console.log( getMaxSubSum([]) );