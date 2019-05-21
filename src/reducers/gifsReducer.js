import { GIFS } from '../constants';

const gifsReducer = (state = {}, action) => {
    switch (action.type) {
        case GIFS.LOAD: {
            console.log('gifsReducer state : ', state);
            return state.hasOwnProperty(action.searchTerm)
                ? {
                      ...state,
                      [action.searchTerm]: [
                          ...state[action.searchTerm],
                          ...action.gifs,
                      ],
                  }
                : {
                      ...state,
                      [action.searchTerm]: [...action.gifs],
                  };
        }
        default: {
            return state;
        }
    }
};

export default gifsReducer;
