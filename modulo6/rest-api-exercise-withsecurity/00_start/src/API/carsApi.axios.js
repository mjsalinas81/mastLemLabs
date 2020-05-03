import axios from 'axios';
import {getAllCarsUri, getCarByIdUri, getAddCarUri,getAuthLoginUri } from "./carsApi";

export const getAllCars = () => ( axios.get(getAllCarsUri)
.then(result => result.data.map((i) => i))
.catch(err => console.log(err)));


export const getCarById = (id) => ( axios.get(getCarByIdUri(id))
.then(result => result.data)
.catch(err => console.log(err)));


export const addCar = (car) => ( axios.post(getAddCarUri, car)
.then(() => getAllCars())
.catch(err => console.log(err)));


export const loginUser = async (loginData) => {
        try{
            let result;
            result = await axios.post(getAuthLoginUri, loginData);
            return result.data;
        }catch(e)
        {
            console.log(e);
        }    
  };

  export const setUpRequest = (token) => {
    axios.interceptors.request.use((config) => {
      config.headers['Authorization'] = `Bearer ${token}`;
      return config;
    }, (err) => {
      return Promise.reject(err);
    });
  };
  
