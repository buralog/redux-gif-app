import { GIFS, TRENDINGS } from "../constants";

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case TRENDINGS.LOAD:
        case GIFS.SEARCH: {
            return true;
        }
        case TRENDINGS.LOAD_SUCCESS:
        case GIFS.LOAD: {
            return false;
        }
        case TRENDINGS.LOAD_FAIL: {
            return false;
        }
        default: {
            return state;
        }
    }
};

export default loadingReducer;
