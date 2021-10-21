import {  } from '../constants/actionTypes'
import * as api from '../api/index'

export const signin = (formdata,history) => async (dispatch) => {

    try {
        const res = await api.signin(formdata)
        console.log(res);
        if(res.data.email){
            history.push('/')
        }else{
            history.push('/login',{Err: "Invalid Credentials"})
        }
    } catch (error) {
        console.log("Signin err" +error);
    }
}