import './SearchBar.scss';

import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { SearchOutlined, CloseOutlined } from '@ant-design/icons';

import { fetchPokemons } from '../../store/pokemonsSlice';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [isDisplayCancelBtn, setIsDisplayCancelBtn] = useState(false);

  const ref = useRef(null);

  const onInputChange = (event) => {
    setIsDisplayCancelBtn(true);
    setSearchValue(event.target.value);
    if (event.target.value === '') {
      setIsDisplayCancelBtn(false);
    }
  };

  const onClickCancelBtn = () => {
    setSearchValue('');
    setIsDisplayCancelBtn(false);
    dispatch(fetchPokemons({ name: '' }));
  };

  const onClickSearchBtn = () => {
    if (searchValue === '') {
      ref.current.focus();
    }
  };

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchPokemons({ name: searchValue }));
  };
  return (
    <form className='search-bar' onSubmit={handleSearch}>
      <input
        ref={ref}
        type='text'
        className='search-bar__input'
        placeholder='Search by name'
        onInput={onInputChange}
        value={searchValue}
      />
      <SearchOutlined
        className='search-bar__search-icon'
        onClick={onClickSearchBtn}
      />
      {isDisplayCancelBtn && (
        <CloseOutlined
          className='search-bar__cancel-icon'
          onClick={onClickCancelBtn}
        />
      )}
    </form>
  );
}

export default SearchBar;
