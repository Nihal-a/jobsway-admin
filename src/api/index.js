import axios from 'axios'

const API = axios.create({ baseURL:'http://localhost:4001/api/v1/admin/'})


//company 
export const getUnVerifiedCompanies = () => API.get('/') 
export const getVerifiedCompanies = () => API.get('/companies') 
export const verifyCompany = (id) => API.patch(`/company/approve?id=${id}`)
export const rejectCompany = (id,reason) => API.patch(`/company/reject?id=${id}`,reason)
export const banCompany = (id) => API.patch(`/company/ban?id=${id}`) 
export const bannedCompanies = (id) => API.get('/companies/banned') 
export const unBanCompany = (id) => API.patch(`/company/unban?id=${id}`) 

//users
export const getUsers = () => API.get('/users') 
export const banUser = (id) => API.patch(`/user/ban?id=${id}`) 
export const unBanUser = (id) => API.patch(`/user/unban?id=${id}`) 
export const getbannedUsers = () => API.get('/users/banned') 




//Auth 
export const signin = (formData) => API.post('/signin',formData) 

