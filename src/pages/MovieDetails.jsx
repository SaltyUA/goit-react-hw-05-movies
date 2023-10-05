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
    <main>
      <Link to="/">Назад</Link>
      {movie && (
        <article>
          <MovieCard movie={movie} />
          <div>
            <p>Додаткова інформація</p>
            <ul>
              <li>
                <Link to="cast">В ролях</Link>
              </li>
              <li>
                <Link to="reviews">Огляди</Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </article>
      )}
    </main>
  );
};

export default MovieDetails;
