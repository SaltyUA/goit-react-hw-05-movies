import { getTrendingMovies } from 'api/themoviedbAPI';
import MoviesList from 'components/MoviesList';
import React, { useEffect, useState } from 'react';

const Homepage = () => {
  const [trendings, setTrendings] = useState([]);
  useEffect(() => {
    getTrendingMovies()
      .then(data => setTrendings(data.results))
      .catch(error => {
        console.log(error);
        window.alert('Something went wrong, try to reload');
      });
  }, []);
  return (
    <main>
      <h2>Популярні сьогодні</h2>
      <MoviesList movies={trendings} />
    </main>
  );
};

export default Homepage;
