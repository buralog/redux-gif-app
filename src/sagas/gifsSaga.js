import { takeEvery, select, call, put } from "redux-saga/effects";
import { searchGifs } from "../API";
import { GIFS } from "../constants";
import { loadGifs, setError } from "../actions";

export const getSearchTerm = state => state.searchTerm;
export const getStateGifs = state => state.gifs;

export function* handleGifSearch() {
  try {
    const searchTerm = yield select(getSearchTerm);
    const gifs = yield select(getStateGifs);

    let page = gifs[searchTerm] ? gifs[searchTerm].length : 0;
    const fetchedGifs = yield call(searchGifs, page, searchTerm);
    yield put(loadGifs(fetchedGifs, searchTerm));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchGifSearch() {
  yield takeEvery(GIFS.SEARCH, handleGifSearch);
}
