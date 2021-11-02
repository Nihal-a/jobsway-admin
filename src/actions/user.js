import {  VERIFIEDCOMPANIES,ALLUSERS,BANNEDUSER } from '../constants/actionTypes'
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
    } catch (error) {
        console.log(error);
    }
}

// export const getBannedUsers = () => async (dispatch) => {
//     try {
//         const {data} = await api.getVerifiedCompanies()
//         dispatch({type:VERIFIEDCOMPANIES ,payload :data})
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const getBannedCompanies = () => async (dispatch) => {
//     try {
//         const {data} = await api.getVerifiedCompanies()
//         dispatch({type:VERIFIEDCOMPANIES ,payload :data})
//     } catch (error) {
//         console.log(error);
//     }
// }

