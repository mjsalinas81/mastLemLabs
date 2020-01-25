// Ejercicio 5

const concat = (a, b) =>{
    return [...a, ...b];
}

let arrayA=['a1','a2','a3','a4'];
let arrayB=['b1','b2','b3','b4'];

console.log(concat(arrayA, arrayB));