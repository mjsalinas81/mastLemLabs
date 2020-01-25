// Ejercicio 6

let objAlumno = {
    nombre: "Manuel",
    apellidos: "Martínez",
    direccion: {
        localidad:"Elche",
        calle: "Av.Libertad",
        Numero: 87
    }
}

const clone = (source) =>{
    return Object.assign({}, source);
}

console.log(clone(objAlumno));
