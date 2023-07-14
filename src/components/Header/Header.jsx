import Logo from '../Logo/Logo';
import './Header.scss';
function AppHeader() {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <Logo />
      </div>
    </header>
  );
}

export { AppHeader as Header };
