# Ejercicio Módulo 6 Rest API

## Parte Obligatoria
Se han implementado los métodos getAllCars(), getCarById(id), y addCar(car)

## Parte Opcional
Se han implementado de más de una manera : con axios y con fetch.
Para elegir entre una u otra implementación basta con comentar o descomentar la línea en app.js:

```js
import { 
   loginUser,
   setUpRequest,
   getAllCars,
   getCarById,
   addCar 
} //from  './API/carsApi.axios'; 
  from './API/carsApi.fetch'; 
```

Se ha añadido capa de seguridad para las peticiones contra la API implementando el servidor de autenticacion.

Los usuarios válidos configurados son:
```js
const users = [
    { id: 1, username: 'admin', password: 'admin' },
    { id: 1, username: 'manuel', password: 'salinas' },
];
```
