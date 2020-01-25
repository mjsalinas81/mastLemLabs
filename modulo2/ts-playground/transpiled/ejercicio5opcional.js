// Ejercicio 5 Opcional
const concatOp = (...arrays) => {
    return [...arrays].reduce((a, b) => [...a, ...b]);
};
let arrayAop = ['a1', 'a2', 'a3', 'a4'];
let arrayBop = ['b1', 'b2', 'b3', 'b4'];
let arrayCop = ['c1', 'c2', 'c3', 'c4'];
console.log(concatOp(arrayAop, arrayBop, arrayCop));
