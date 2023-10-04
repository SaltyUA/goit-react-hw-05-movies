import { getMovieByID } from 'api/themoviedbAPI';
import MovieCard from 'components/MovieCard';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieID } = useParams();

  useEffect(() => {
    getMovieByID(movieID)
      .then(data => setMovie(data))
      .catch(error => console.log(error));
  }, [movieID]);

  return (
    <>
      <Link to="/">Go back</Link>
      {movie && (
        <article>
          <MovieCard movie={movie} />
          <div>
            <p> Additional information</p>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="Reviews">Reviews</Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </article>
      )}
    </>
  );
};

export default MovieDetails;
