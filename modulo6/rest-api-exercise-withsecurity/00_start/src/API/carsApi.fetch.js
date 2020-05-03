import { getAllCarsUri, getCarByIdUri, getAddCarUri,getAuthLoginUri } from "./carsApi";
let _token ='';

export const setUpRequest = (token) => {
  _token = token;
};

const getToken = () => _token;


export const loginUser = async (loginData) => {
  try{
    const result= await fetch(getAuthLoginUri, {
      method: 'POST',
      body: JSON.stringify(loginData),
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })

    return result.json();

  }catch(e)
  {
      console.log("Logging error");
  }  
 
};


export const getAllCars = () => {
     return fetch(getAllCarsUri, {
       method: "GET",
       mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`
        }
     })
       .then(res => res.json())
       .then(response => response.map(i => i))
       .catch((err)=> console.log(err));
  };

export const getCarById = id => {

     return fetch(getCarByIdUri(id), {
       method: "GET",
       mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`
        }
     })
       .then(res => res.json())
       .then(response => response)
       .catch((err)=> console.log(err));
  };

export const addCar = car => {
     return fetch(getAddCarUri, {
        method: 'POST',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify(car)
     });
  };