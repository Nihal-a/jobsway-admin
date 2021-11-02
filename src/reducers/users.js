import {  ALLUSERS,BANNEDUSER,BANNEDUSERS } from "../constants/actionTypes"

export default (state = [] , action) => {

    switch (action.type) {
        case ALLUSERS:
            return action.payload;
        case BANNEDUSERS:
            return action.payload;
        case BANNEDUSER:
            return state.map((user) => user._id == user.payload._id ? user.payload : state);
        default:
            return state
    }
}