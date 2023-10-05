import Castlist from 'components/CastList';
import SharedLayout from 'components/Header';
import ReviewsList from 'components/ReviewsList';
import Homepage from 'pages/Homepage';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Homepage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieID" element={<MovieDetails />}>
            <Route path="cast" element={<Castlist />} />
            <Route path="reviews" element={<ReviewsList />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
