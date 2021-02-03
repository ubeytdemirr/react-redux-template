import { DECREASE_NUMBER, INCREASE_NUMBER, SET_NUMBER } from "./constants";

const counterReducer = (state={number:1},action) => {
    const {type,payload} = action;
    switch (type) {
        case INCREASE_NUMBER:
            return {number:state.number+state.number}
        case DECREASE_NUMBER:
            return {number:state.number/2}
        case SET_NUMBER:
            return {number:payload.number}
        default:
            return state
    }
}


export default counterReducer