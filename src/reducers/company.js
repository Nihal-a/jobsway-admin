import {  UNVERIFIEDCOMPANIES, VERIFIEDCOMPANY,VERIFIEDCOMPANIES,REJECTEDCOMPANY,BANNEDCOMPANY ,BANNEDCOMPANIES,UNBANNEDCOMPANY} from "../constants/actionTypes"

export default (state = [] , action) => {

    switch (action.type) {
        case UNVERIFIEDCOMPANIES:
            return action.payload;
        case VERIFIEDCOMPANIES:
            return action.payload;
        case VERIFIEDCOMPANY:
            return state.map((company) => company._id == action.payload._id ? action.payload : state);
        case REJECTEDCOMPANY:
            return state.map((company) => company._id == action.payload._id ? action.payload : state);
        case BANNEDCOMPANY:
            return state.map((company) => company._id == action.payload._id ? action.payload : state);
        case UNBANNEDCOMPANY:
            return state.map((company) => company._id == action.payload._id ? action.payload : state);
        case BANNEDCOMPANIES:
            return action.payload;
        default:
            return state
    }
}