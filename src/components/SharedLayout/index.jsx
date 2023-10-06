import { Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Outlet } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css';
import { Container, Header, StyledLink } from './Header.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <StyledLink to="/">Додому</StyledLink>
          <StyledLink to="/movies">Фільми</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={<Skeleton count={10} />}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};

export default SharedLayout;
