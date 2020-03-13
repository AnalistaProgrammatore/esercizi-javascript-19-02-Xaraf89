/**
* Scrivere qui il codice dell'esercizio 1 del capitolo 4 di eloquentJS
**/
const range = function (start, end, step = 1) {
    let result = [];
    for (let i = start; (step > 0) ? (i <= end) : (i >= end); i += step) {
        result = [...result, i]
    }
    return result
}
console.log(range(2, -20, -2))

const sum = function (arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result
}
console.log(sum(range(2, -20, -2)))