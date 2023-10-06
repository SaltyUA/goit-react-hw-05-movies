import SharedLayout from 'components/SharedLayout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Homepage = lazy(() => import('../pages/Homepage'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies'));
const Castlist = lazy(() => import('./CastList'));
const ReviewsList = lazy(() => import('./ReviewsList'));

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
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
