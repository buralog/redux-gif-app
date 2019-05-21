import { GIFS, TRENDINGS } from '../constants';

const pageReducer = (state = 0, action) => {
    switch (action.type) {
        case TRENDINGS.LOAD_SUCCESS:
        case GIFS.LOAD:
            return state + 3;
        default: {
            return state;
        }
    }
};

export default pageReducer;
