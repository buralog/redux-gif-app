import { all } from "redux-saga/effects";

import trendingSaga from "./trendingSaga";
import gifsSaga from "./gifsSaga";

function* rootSaga() {
  yield all([trendingSaga(), gifsSaga()]);
}

export default rootSaga;
