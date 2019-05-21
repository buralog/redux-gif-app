import { runSaga } from "redux-saga";

import { loadTrendingGifs, setError } from "../../actions";
import { getPage, handleGifsLoad } from "../trendingSaga";
import * as API from "../../API";

test("selector gives back the getPage", () => {
  const nextPage = 1;
  const state = { nextPage };
  const res = getPage(state);
  expect(res).toBe(nextPage);
});

test("should get trending gifs and load them", async () => {
  const dispatchedActions = [];

  const mockedGifs = ["gif1", "gif2"];
  API.getTrendingGifs = jest.fn(() => Promise.resolve(mockedGifs));

  const fakeStore = {
    getState: () => ({ nextPage: 1 }),
    dispatch: action => dispatchedActions.push(action)
  };

  await runSaga(fakeStore, handleGifsLoad).done;
  expect(API.getTrendingGifs.mock.calls.length).toBe(1);
  expect(dispatchedActions).toContainEqual(loadTrendingGifs(mockedGifs));
});

test("should handle errors in case of failure", async () => {
  // dispatched actions
  const dispatchedActions = [];

  const error = "Some error is thrown";
  API.getTrendingGifs = jest.fn(() => Promise.reject(error));

  const fakeStore = {
    getState: () => ({ nextPage: 1 }),
    dispatch: action => dispatchedActions.push(action)
  };

  await runSaga(fakeStore, handleGifsLoad).done;
  expect(API.getTrendingGifs.mock.calls.length).toBe(1);
  expect(dispatchedActions).toContainEqual(setError(error));
});
