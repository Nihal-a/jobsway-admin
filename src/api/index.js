import axios from 'axios'

const API = axios.create({ baseURL:'http://localhost:4001/api/v1/admin/'})


//company 
export const getUnVerifiedCompanies = () => API.get('/') 
export const getVerifiedCompanies = () => API.get('/companies') 
export const verifyCompany = (id) => API.patch(`/company/approve?id=${id}`)
export const rejectCompany = (id,reason) => API.patch(`/company/reject?id=${id}`,reason)

//users
export const getUsers = () => API.get('/users') 



//Auth 
export const signin = (formData) => API.post('/signin',formData) 

