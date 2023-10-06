import { useLocation } from 'react-router-dom';
import { ListCard, MovieLink, MovieName, StyledList } from './MovieList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <StyledList>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <ListCard>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
                <MovieName>
                  <p>{movie.title}</p>
                </MovieName>
              </ListCard>
            </MovieLink>
          </li>
        );
      })}
    </StyledList>
  );
};

export default MoviesList;
