import { NavLink } from 'react-router-dom';

const { default: styled } = require('styled-components');

export const Header = styled.header`
  position: fixed;
  z-index: 1;
  background-color: #500;
  top: 0;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  height: 55px;
  display: flex;
  align-items: center;

  > nav {
    display: flex;
    gap: 40px;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 4px;
  color: #fff;
  font-weight: 500;

  &.active {
    background-color: #fff;
    color: #000;
  }
`;

export const Container = styled.div`
  padding-top: 75px;
  padding-left: 15px;
  padding-right: 15px;
`;
