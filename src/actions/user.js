import {  VERIFIEDCOMPANIES } from '../constants/actionTypes'
import * as api from '../api/index'

export const getUsers = (history) => async (dispatch) => {
    try {
        const {data} = await api.getUsers()
        dispatch({type:VERIFIEDCOMPANIES ,payload :data})
    } catch (error) {
        console.log(error);
    }
}
