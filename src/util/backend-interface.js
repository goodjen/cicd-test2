import axios from 'axios';

const BACKEND_URL = 'http://localhost:9010';

const createInsertRequestBody = (title, genre) => ({
  type: 'INSERT',
  payload: { title, genre }
});

export const insertMovie = (title, genre) => axios.put(
  BACKEND_URL,
  createInsertRequestBody(title, genre)
);

export const getMovies = getSearchString => axios.get(`${BACKEND_URL}?q=${getSearchString()}`);

export default {};
