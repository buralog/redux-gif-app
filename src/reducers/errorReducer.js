import { GIFS } from "../constants";

const errorReducer = (state = null, action) => {
    switch (action.type) {
        case GIFS.LOAD_FAIL:
            return action.error;
        case GIFS.LOAD:
        case GIFS.LOAD_SUCCESS:
            return null;
        default:
            return state;
    }
};

export default errorReducer;