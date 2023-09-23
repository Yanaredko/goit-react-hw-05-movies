import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  SearchBar,
  SerchForm,
  Input,
  SearchBtn,
  SerchFormBtnLabel,
} from './SearchForm.styled';

export const SearchForm = ({ onChangeQuery }) => {
  const [text, setText] = useState('');

  const hendleChange = event => {
    setText(event.target.value);
  };

  const hendleSubmit = event => {
    event.preventDefault();
    if (!text.trim()) {
      alert('enter text');
      return;
    }
    onChangeQuery(text);
    setText('');
  };

  return (
    <>
      <SearchBar>
        <SerchForm className="form" onSubmit={hendleSubmit}>
          <SearchBtn type="submit" className="button">
            <SerchFormBtnLabel>Search</SerchFormBtnLabel>
          </SearchBtn>

          <Input
            value={text}
            className="input"
            type="text"
            placeholder="Search images and photos"
            onChange={hendleChange}
          />
        </SerchForm>
      </SearchBar>
    </>
  );
};

SearchForm.propTypes = {
  onChange: PropTypes.func,
};