import { GIFS, TRENDINGS } from "../constants";

const searchGifs = searchTerm => ({
  type: GIFS.SEARCH,
  searchTerm
});

const loadGifs = (gifs, searchTerm) => ({
  type: GIFS.LOAD,
  gifs,
  searchTerm
});

const getTrendingGifs = () => ({
  type: TRENDINGS.LOAD
});

const loadTrendingGifs = gifs => ({
  type: TRENDINGS.LOAD_SUCCESS,
  gifs
});

const setError = error => ({
  type: GIFS.LOAD_FAIL,
  error
});

export { getTrendingGifs, setError, loadTrendingGifs, searchGifs, loadGifs };
