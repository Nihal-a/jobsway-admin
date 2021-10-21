import { SIGNIN ,LOGOUT} from "../constants/actionTypes"

export default (state = {authData : null},action) => {

    switch (action.type) {
        case SIGNIN:
            localStorage.setItem('admin',JSON.stringify({...action?.data}))
            return {...state,authData:action?.data}
        case LOGOUT:
            localStorage.clear()
            return { ...state, authData: null, loading: false, errors: null };
        default:
            return state
    }
}