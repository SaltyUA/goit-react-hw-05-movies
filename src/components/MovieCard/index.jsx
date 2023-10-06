import {
  CardWrapper,
  MoviePosterContainer,
  OriginalTitle,
  Tagline,
  TitleWrapper,
} from './MovieCard.styled';

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
      <CardWrapper>
        <MoviePosterContainer>
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={`${title} poster`}
          />
        </MoviePosterContainer>
        <div>
          <TitleWrapper>
            <h2>{title}</h2>
            <p>{release_date.slice(0, 4)}</p>
          </TitleWrapper>
          <OriginalTitle>({original_title})</OriginalTitle>
          <Tagline>{tagline}</Tagline>

          <h3>Опис</h3>
          <p>{overview}</p>
          <h3>Жанри</h3>
          <p>{genres.map(genre => `${genre.name}`).join(', ')}</p>
          {vote_count > 0 && (
            <p>
              Оцінка користувачів: {vote_average}({vote_count})
            </p>
          )}
        </div>
      </CardWrapper>
    </article>
  );
};

export default MovieCard;
