import { SIGNIN } from "../constants/actionTypes"

export default (state = {authData : null},action) => {
    switch (action.type) {
        case SIGNIN:
            localStorage.setItem('admin',JSON.stringify({...action?.data}))
            return {...state,authData:action?.data}
        default:
            return state
    }
}