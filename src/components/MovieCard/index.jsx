const MovieCard = ({ movie }) => {
  const {
    genres,
    original_title,
    overview,
    poster_path,
    release_date,
    title,
    tagline,
    vote_average,
    vote_count,
  } = movie;
  return (
    <article>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={`${title} poster`}
        />
        <h2>
          {title}
          <span>({original_title})</span>
          <span>{release_date.slice(0, 4)}</span>
        </h2>
        <p>{release_date}</p>
        <p>{tagline}</p>
        <p>
          Оцінка користувачів: {vote_average}({vote_count})
        </p>
        <h3>Опис</h3>
        <p>{overview}</p>
        <h3>Жанри</h3>
        <p>{genres.map(genre => `${genre.name}`).join(', ')}</p>
      </div>
    </article>
  );
};

export default MovieCard;
