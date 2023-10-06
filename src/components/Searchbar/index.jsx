import { useState } from 'react';
import { StyledForm, StyledInput, SubmitButton } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleChange = ({ target: { value } }) => setQuery(value);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        autoFocus
        value={query}
        onChange={handleChange}
        name="name"
        type="text"
        placeholder="Який фільм шукаєте?"
      />
      <SubmitButton type="submit">Search</SubmitButton>
    </StyledForm>
  );
};

export default Searchbar;
