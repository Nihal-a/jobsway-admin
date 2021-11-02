import {  ALLUSERS } from "../constants/actionTypes"

export default (state = [] , action) => {

    switch (action.type) {
        case ALLUSERS:
            return action.payload;
        default:
            return state
    }
}