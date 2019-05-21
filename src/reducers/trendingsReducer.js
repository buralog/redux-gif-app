import { TRENDINGS } from "../constants";

const trendingReducer = (state = [], action) => {
  switch (action.type) {
    case TRENDINGS.LOAD_SUCCESS: {
      return [...state, ...action.gifs];
    }
    default: {
      return state;
    }
  }
};

export default trendingReducer;
