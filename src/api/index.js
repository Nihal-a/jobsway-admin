import axios from 'axios'

const API = axios.create({ baseURL:'http://localhost:4001/api/v1/admin/'})


//company 
export const getUnVerifiedCompanies = () => API.get('/') 
export const getVerifiedCompanies = () => API.get('/companies') 
export const verifyCompany = (id) => API.patch(`/?id=${id}`)


//Auth 
export const signin = (formData) => API.post('/signin',formData) 

