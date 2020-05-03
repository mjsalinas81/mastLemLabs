import { 
    addCarRows, 
    retrieveCarId, 
    populateEditCarForm,
    retrieveCarForm,
    retrieveLoginForm,
    cleanTable,
} from './uiHelpers';

import { 
   loginUser,
   setUpRequest,
   getAllCars,
   getCarById,
   addCar 
} //from  './API/carsApi.axios'; 
  from './API/carsApi.fetch'; 


document.addEventListener('DOMContentLoaded', () => {

    const buttonLogin = document.getElementById('login');
    buttonLogin.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        const loginData = retrieveLoginForm();
        loginUser(loginData).then((result) => {
            console.log(result);
            if(result.access_token) {
                setUpRequest(result.access_token);
            }else {
                console.log("Unauthorize user");
            }
        });
    });

    const buttonLoadCars = document.getElementById('loadcars');
    buttonLoadCars.addEventListener('click', (event) => {
        event.stopPropagation();
        cleanTable('cars-table');
        getAllCars().then((result) => {
            addCarRows(result, 'cars-table');
        });
    });

    const buttonLoadCar = document.getElementById('loadcar');
    buttonLoadCar.addEventListener('click', (event) => {
        event.stopPropagation();
        const carId = retrieveCarId();
        getCarById(carId)
            .then((r) => populateEditCarForm(r));
    });

    const buttonAddCar = document.getElementById('add');
    buttonAddCar.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        const car = retrieveCarForm();
        addCar(car)
            .then((_) => {
                cleanTable('cars-table');
                return getAllCars();
            })
            .then((result) => {
                addCarRows(result, 'cars-table');
            });
    });
});