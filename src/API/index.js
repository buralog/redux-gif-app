const KEY = process.env.REACT_APP_GIPHY_KEY;
const BASE_URL = `https://api.giphy.com/v1/gifs/`;

const getTrendingGifs = async page => {
  const response = await fetch(
    `${BASE_URL}trending?api_key=${KEY}&offset=${page}&limit=3`
  );
  const result = await response.json();
  if (response.status >= 400) {
    throw new Error(result.errors);
  }

  return result.data;
};

const searchGifs = async (page, searchTerm) => {
  const response = await fetch(
    `${BASE_URL}search?api_key=${KEY}&q=${searchTerm}&offset=${page}&limit=3`
  );

  const result = await response.json();
  if (response.status >= 400) {
    throw new Error(result.errors);
  }

  return result.data;
};

export { getTrendingGifs, searchGifs };
