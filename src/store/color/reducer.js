import { SET_COLOR } from "./constants";

const colorReducer = (state={color:"#f7f7f7"},action) => {
    const {type,payload} = action;
    switch (type) {
        case SET_COLOR:
            return {color:payload.color}
        default:
            return state
    }
}



export default colorReducer