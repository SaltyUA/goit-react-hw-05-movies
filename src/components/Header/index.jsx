import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Додому</NavLink>
          <NavLink to="/movies">Фільми</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
