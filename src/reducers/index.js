import { combineReducers } from "redux";

import loadingReducer from "./loadingReducer";
import trendingsReducer from "./trendingsReducer";
import errorReducer from "./errorReducer";
import pageReducer from "./pageReducer";
import searchReducer from "./searchReducer";
import gifsReducer from "./gifsReducer";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  trendingGifs: trendingsReducer,
  error: errorReducer,
  nextPage: pageReducer,
  searchTerm: searchReducer,
  gifs: gifsReducer
});

export default rootReducer;
