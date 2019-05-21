import { GIFS, SEARCHTERM } from "../constants";

const searchReducer = (state = "", action) => {
  switch (action.type) {
    case GIFS.SEARCH:
    case SEARCHTERM.UPDATE: {
      return action.searchTerm;
    }
    default: {
      return state;
    }
  }
};

export default searchReducer;
