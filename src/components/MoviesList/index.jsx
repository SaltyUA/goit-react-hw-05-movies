import { useLocation } from 'react-router-dom';
import { ListCard, MovieLink, MovieName, StyledList } from './MovieList.styled';
import { getPoster } from 'service/getImage';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <StyledList>
      {movies.map(movie => {
        const poster = getPoster(movie.poster_path, 200);
        return (
          <li key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <ListCard>
                <img src={poster} alt={movie.title} />
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
