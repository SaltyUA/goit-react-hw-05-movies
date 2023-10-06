import styled from 'styled-components';

export const ReviewCard = styled.div`
  width: 900px;
  border-radius: 5px;
  padding: 5px 10px;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);

  & .author {
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  & .overview {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  & .created_at {
    font-size: 0.6rem;
    opacity: 0.8;
  }
`;
