import { getMoviesByQuery } from 'service/themoviedbAPI';
import MoviesList from 'components/MoviesList';
import Searchbar from 'components/Searchbar';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [findedMovies, setFindedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery || searchQuery === '') return;
    setIsLoading(true);
    setFindedMovies([]);
    getMoviesByQuery(searchQuery)
      .then(data => {
        if (data.results.length === 0) {
          toast.warn(`Не вдалось знайти фільми за цим запитом`);
          return;
        }
        setFindedMovies(data.results);
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [searchQuery]);

  const onSubmit = query => {
    if (query.trim().length === 0) {
      toast.warning(`Введіть запит`);
      return;
    }
    setSearchParams({ query: query });
  };

  return (
    <main>
      <Searchbar onSubmit={onSubmit} />
      {isLoading && <Skeleton count={20} />}
      {findedMovies.length > 0 && <MoviesList movies={findedMovies} />}
      <ToastContainer />
    </main>
  );
};

export default Movies;
