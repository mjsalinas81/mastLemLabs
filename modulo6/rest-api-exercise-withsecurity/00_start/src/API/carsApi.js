export const baseUrl = 'http://localhost:3050';
export const getAuthLoginUri = 'http://localhost:3070/login';
export const getAllCarsUri = baseUrl+'/api/cars';
export const getCarByIdUri = (id) => getAllCarsUri+`/${id}`;
export const getAddCarUri = baseUrl+'/api/cars'; 