import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: '08ec4e59f499add965d7cf699a6d8de7',
  language: 'uk-UA',
};

export async function getTrendingMovies(timePeriod) {
  const response = await axios('trending/movie/day', {
    time_window: timePeriod,
  });
  return response.data;
}

export async function getMovieByID(id) {
  const response = await axios(`movie/${id}`);
  return response.data;
}

export async function getMovieCast(id) {
  const response = await axios(`movie/${id}/credits`);
  return response.data;
}

export async function getMovieReviews(id) {
  const response = await axios(`movie/${id}/reviews`);
  return response.data;
}
