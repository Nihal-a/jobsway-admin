import { ALLTRANSACTIONS} from "../constants/actionTypes"

export default (state = [] , action) => {
    switch (action.type) {
        case ALLTRANSACTIONS:
            return action.payload;
        default:
            return state
    }
}