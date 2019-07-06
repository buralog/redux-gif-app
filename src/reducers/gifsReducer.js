import { GIFS } from '../constants';

const gifsReducer = (state = {}, action) => {
    switch (action.type) {
        case GIFS.LOAD: {
            return state.hasOwnProperty(action.searchTerm)
            // when user searches one of the previous searchTerms again,
            // load cached gifs from state
                ? {
                      ...state,
                      [action.searchTerm]: [
                          ...state[action.searchTerm],
                          ...action.gifs,
                      ],
                  }
            // when user searches a new term for the first time,
            // load new results
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
