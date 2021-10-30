import {  UNVERIFIEDCOMPANIES, VERIFIEDCOMPANY} from "../constants/actionTypes"

export default (state = [] , action) => {

    switch (action.type) {
        case UNVERIFIEDCOMPANIES:
            return action.payload;
        case VERIFIEDCOMPANY:
            return state.map((company) => company._id == action.payload._id ? action.payload : state);
        default:
            return state
    }
}