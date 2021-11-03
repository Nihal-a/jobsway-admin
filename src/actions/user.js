import {  UNBANNEDUSER,ALLUSERS,BANNEDUSER,BANNEDUSERS } from '../constants/actionTypes'
import * as api from '../api/index'

export const getUsers = (history) => async (dispatch) => {
    try {
        const {data} = await api.getUsers()
        dispatch({type:ALLUSERS ,payload :data})
    } catch (error) {
        console.log(error);
    }
}

export const banUser = (id,history) => async (dispatch) => {
    try {
        const {data} = await api.banUser(id)
        dispatch({type:BANNEDUSER ,payload :data})
        history.push('/users')
    } catch (error) {
        console.log(error);
    }
}

export const getbannedUsers = () => async (dispatch) => {
    try {
        const {data} = await api.getbannedUsers()
        dispatch({type:BANNEDUSERS ,payload :data})
    } catch (error) {
        console.log(error);
    }
}

export const unBanUser = (id,history) => async (dispatch) => {
    try {
        const {data} = await api.unBanUser(id)
        dispatch({type:UNBANNEDUSER ,payload :data})
        history.push('/settings')
    } catch (error) {
        console.log(error);
    }
}
