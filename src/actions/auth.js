import { SIGNIN } from '../constants/actionTypes'
import * as api from '../api/index'

export const signin = (formdata,history) => async (dispatch) => {

    try {
        const {data} = await api.signin(formdata)
        dispatch({type:SIGNIN,data})
        history.push('/')
    } catch (error) {
        history.push('/login',{Err: error.response.data})
    }
}