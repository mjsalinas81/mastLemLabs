// Ejercicio 3
const init = (array) => Array.prototype.filter.call(array, (x, index) => index < array.length - 1);
let arrayEj3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(init(arrayEj3));
