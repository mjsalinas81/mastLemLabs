//Ejercicio 4
const last = (array) => {
    const [first] = [...array].reverse();
    return first;
};
let arrayEj4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(last(arrayEj4));
