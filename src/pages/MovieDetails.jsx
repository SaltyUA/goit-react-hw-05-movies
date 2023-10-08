import { getMovieByID } from 'service/themoviedbAPI';
import MovieCard from 'components/MovieCard';
import {
  AdditionalInfo,
  AdditionalInfoLink,
  GoBackLink,
} from 'components/MovieCard/MovieCard.styled';
import { Suspense, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieID } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  useEffect(() => {
    getMovieByID(movieID)
      .then(data => setMovie(data))
      .catch(error => console.log(error));
  }, [movieID]);

  return (
    <main>
      <GoBackLink to={backLinkHref}>&#171; Повернутись назад</GoBackLink>
      {movie && (
        <article>
          <MovieCard movie={movie} />
          <AdditionalInfo>
            <p>Додаткова інформація</p>
            <ul>
              <li>
                <AdditionalInfoLink to="cast" state={{ from: backLinkHref }}>
                  В ролях
                </AdditionalInfoLink>
              </li>
              <li>
                <AdditionalInfoLink to="reviews" state={{ from: backLinkHref }}>
                  Огляди
                </AdditionalInfoLink>
              </li>
            </ul>
          </AdditionalInfo>
          <Suspense fallback={<Skeleton count={3} />}>
            <Outlet />
          </Suspense>
        </article>
      )}
    </main>
  );
};

export default MovieDetails;
