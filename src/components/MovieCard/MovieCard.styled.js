import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 5px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  border: 1px solid #000;
  border-radius: 5px;
  margin-bottom: 10px;

  &:hover {
    color: #fff;
    background-color: #500;
  }
`;

export const MoviePosterContainer = styled.div`
  width: 300px;
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: 20px;

  & h3 {
    margin-bottom: 5px;
  }

  & p {
    max-width: 700px;
    margin-bottom: 10px;
  }
`;

export const OriginalTitle = styled.p`
  color: grey;
  opacity: 0.8;
  margin-bottom: 10px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 4px;

  & > p {
    opacity: 0.7;
    font-size: 0.7rem;
  }
`;

export const Tagline = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const AdditionalInfo = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > p {
    font-weight: 500;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  & > ul {
    display: flex;
    gap: 20px;
  }
`;

export const AdditionalInfoLink = styled(NavLink)`
  padding: 4px 8px;
  text-decoration: none;
  border-radius: 4px;
  color: #000;
  font-weight: 500;
  border: 1px solid #000;

  &.active {
    background-color: #000;
    color: #fff;
  }
`;

export const AdditionalInfoTitle = styled.h3`
  text-align: center;
  margin-bottom: 5px;
`;
