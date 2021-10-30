import { SIGNIN ,LOGOUT, UNVERIFIEDCOMPANIES} from "../constants/actionTypes"

export default (state = [] , action) => {

    switch (action.type) {
        case UNVERIFIEDCOMPANIES:
            return action.payload;
        default:
            return state
    }
}