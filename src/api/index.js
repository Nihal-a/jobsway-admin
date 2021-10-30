import axios from 'axios'

const API = axios.create({ baseURL:'http://localhost:4001/api/v1/admin/'})

export const getUnVerifiedCompanies = () => API.get('/') 
export const signin = (formData) => API.post('/signin',formData) 

