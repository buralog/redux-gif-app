import { takeEvery, select, call, put } from "redux-saga/effects";
import { TRENDINGS } from "../constants";
import { getTrendingGifs } from "../API";
import { loadTrendingGifs, setError } from "../actions";

export const getPage = state => state.nextPage;

export function* handleGifsLoad() {
  try {
    const page = yield select(getPage);
    const gifs = yield call(getTrendingGifs, page);
    yield put(loadTrendingGifs(gifs));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchGifsLoad() {
  yield takeEvery(TRENDINGS.LOAD, handleGifsLoad);
}
