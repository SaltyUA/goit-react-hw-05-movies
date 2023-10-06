const { default: styled } = require('styled-components');

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  padding: 5px 10px;
  min-width: 200px;
`;

export const SubmitButton = styled.button`
  padding: 5px 10px;
  background-color: #500;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;
