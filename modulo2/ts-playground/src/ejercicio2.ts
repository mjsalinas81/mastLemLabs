// Ejercicio 2

const tail = (array) => {
    const [, ...rest] = array;
    return rest;
}

let arrayEj2= [1,2,3,4,5,6,7,8,9,10];

console.log(tail(arrayEj2));