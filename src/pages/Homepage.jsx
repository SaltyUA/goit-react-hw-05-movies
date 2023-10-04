import { getTrendingMovies } from 'api/themoviedbAPI';
import TrandingsList from 'components/TrendingsList';
import React, { useEffect, useState } from 'react';

const Homepage = () => {
  const [trendings, setTrendings] = useState([]);
  useEffect(() => {
    getTrendingMovies('day')
      .then(data => setTrendings(data.results))
      .catch(error => {
        console.log(error);
        window.alert('Something went wrong, try to reload');
      });
  }, []);
  console.log(trendings);
  return (
    <main>
      <h2>Trending today</h2>
      <TrandingsList movies={trendings} />
    </main>
  );
};

export default Homepage;
