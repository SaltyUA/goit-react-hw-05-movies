import { Link } from 'react-router-dom';

const { default: styled } = require('styled-components');

export const StyledList = styled.ul`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px 10px;
`;

export const MovieName = styled.div`
  width: 200px;
  min-height: 40px;
  padding: 5px;
  border: 1px solid #e7e9fc;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  & > p {
    color: #000;
    text-align: center;
    font-weight: 500;
  }
`;

export const MovieLink = styled(Link)`
  display: block;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:is(:hover, :focus) {
    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
      0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  }

  &:is(:hover, :focus) ${MovieName} {
    border: 1px solid #f4f4fd;
  }
`;

export const ListCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fffdfc;
`;
