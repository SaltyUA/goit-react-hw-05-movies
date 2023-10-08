export const getPoster = (url, width) =>
  url
    ? `https://image.tmdb.org/t/p/w${width}/${url}`
    : `https://fakeimg.pl/${width}x${width * 1.5}?text=No+poster`;
