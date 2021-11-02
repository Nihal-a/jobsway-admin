import {  VERIFIEDCOMPANIES,ALLUSERS } from '../constants/actionTypes'
import * as api from '../api/index'

export const getUsers = (history) => async (dispatch) => {
    try {
        const {data} = await api.getUsers()
        dispatch({type:ALLUSERS ,payload :data})
    } catch (error) {
        console.log(error);
    }
}
