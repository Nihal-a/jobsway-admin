import { UNVERIFIEDCOMPANIES, VERIFIEDCOMPANY,VERIFIEDCOMPANIES} from '../constants/actionTypes'
import * as api from '../api/index'

export const getUnVerifiedCompanies = (history) => async (dispatch) => {

    try {
        const {data} = await api.getUnVerifiedCompanies()
        dispatch({type:UNVERIFIEDCOMPANIES ,payload :data})
    } catch (error) {
        console.log(error);
    }
}

export const verifyCompany = (id,history) => async (dispatch) => {
    try {
        const res = await api.verifyCompany(id)
        dispatch({type:VERIFIEDCOMPANY ,payload :res.data})
        history.push('/')
    } catch (error) {
        console.log(error);
    }
}

export const getVerifiedCompanies = (history) => async (dispatch) => {
    try {
        const {data} = await api.getVerifiedCompanies()
        dispatch({type:VERIFIEDCOMPANIES ,payload :data})
    } catch (error) {
        console.log(error);
    }
}
