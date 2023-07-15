import Logo from '../Logo/Logo';
import SearchBar from '../Search/SearchBar';
import './Header.scss';
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
