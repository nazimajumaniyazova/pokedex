import './SearchBar.scss';
import { useState, useRef } from 'react';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';

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
  };

  const onClickSearchBtn = () => {
    if (searchValue === '') {
      ref.current.focus();
    }
  };
  return (
    <form className='search-bar'>
      <input
        ref={ref}
        type='text'
        className='search-bar__input'
        placeholder='Search'
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
