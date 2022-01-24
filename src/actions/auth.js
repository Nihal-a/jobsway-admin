import { SIGNIN } from '../constants/actionTypes'
import * as api from '../api/index'

export const signin = (formdata,history,setLoading) => async (dispatch) => {

    try {
        const {data} = await api.signin(formdata)
        dispatch({type:SIGNIN,data})
        setLoading(false)
        history.push('/')
    } catch (error) {
        setLoading(false)
        history.push('/login',{Err: error.response.data})
    }
}