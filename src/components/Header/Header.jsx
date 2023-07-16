import './Header.scss';

import Logo from '../Logo/Logo';
import SearchBar from '../Search/SearchBar';

function AppHeader() {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <Logo />
        <SearchBar />
      </div>
    </header>
  );
}

export { AppHeader as Header };
