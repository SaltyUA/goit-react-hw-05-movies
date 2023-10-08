import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGVjNGU1OWY0OTlhZGQ5NjVkN2NmNjk5YTZkOGRlNyIsInN1YiI6IjY1MWM1M2Y1MDcyMTY2MDBmZjM3NDk0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.91Kw-tRHX8oTVWhdZCyNNS7crQr_H5V8KLPU4Fy9m1g';

axios.defaults.params = {
  language: 'uk-UA',
};

export async function getTrendingMovies() {
  const response = await axios('trending/movie/day');
  return response.data;
}

export async function getMoviesByQuery(query) {
  const response = await axios('search/movie', {
    params: {
      query,
    },
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

export async function getMovieReviews(id, language) {
  const response = await axios(`movie/${id}/reviews`, {
    params: {
      language,
    },
  });
  return response.data;
}
