// Ejercicio 7
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
const merge = (source, target) => {
    return Object.assign(clone(target), source);
};
console.log(merge(a, b));
