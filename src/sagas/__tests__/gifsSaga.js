import { runSaga } from "redux-saga";

import { loadGifs, setError } from "../../actions";
import { handleGifSearch, getSearchTerm, getStateGifs } from "../gifsSaga";
import * as API from "../../API";

test("selector gives back the getSearchTerm", () => {
  const searchTerm = "term";
  const state = { searchTerm };
  const res = getSearchTerm(state);
  expect(res).toBe(searchTerm);
});

test("selector gives back the getStateGifs", () => {
  const gifs = {};
  const state = { gifs };
  const res = getStateGifs(state);
  expect(res).toBe(gifs);
});

test("should search API with given search term and return results", async () => {
  const dispatchedActions = [];

  const searchTerm = "car";
  const gifs = {
    car: [{ type: "gif", id: "1" }, { type: "gif", id: "2" }]
  };

  const mockedData = {
    car: [{ type: "gif", id: "1" }, { type: "gif", id: "2" }]
  };

  API.searchGifs = jest.fn(() => Promise.resolve(mockedData));

  const mockedStore = {
    getState: () => ({ searchTerm: "car", gifs: {} }),
    dispatch: action => dispatchedActions.push(action)
  };

  await runSaga(mockedStore, handleGifSearch).done;
  expect(API.searchGifs.mock.calls.length).toBe(1);
  expect(dispatchedActions).toContainEqual(loadGifs(gifs, searchTerm));
});

test("should throw error in case of failure", async () => {
  const dispatchedActions = [];

  const error = "Error";

  API.searchGifs = jest.fn(() => Promise.reject(error));

  const mockedStore = {
    getState: () => ({ searchTerm: "car", gifs: {} }),
    dispatch: action => dispatchedActions.push(action)
  };

  await runSaga(mockedStore, handleGifSearch).done;
  expect(API.searchGifs.mock.calls.length).toBe(1);
  expect(dispatchedActions).toContainEqual(setError(error));
});
