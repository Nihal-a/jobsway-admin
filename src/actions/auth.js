import { SIGNIN, UNVERIFIEDCOMPANIES } from '../constants/actionTypes'
import * as api from '../api/index'

export const getUnVerifiedCompanies = (history) => async (dispatch) => {

    try {
        const {data} = await api.getUnVerifiedCompanies()
        dispatch({type:UNVERIFIEDCOMPANIES ,payload :data})
    } catch (error) {
        console.log(error);
    }
}

export const signin = (formdata,history) => async (dispatch) => {

    try {
        const {data} = await api.signin(formdata)
        if(data.admin){
            dispatch({type:SIGNIN,data})
            history.push('/')
        }else{
            history.push('/login',{Err: "Invalid Credentials"})
        }
    } catch (error) {
        console.log("Signin err" +error);
    }
}