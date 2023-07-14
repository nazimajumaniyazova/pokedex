import './Logo.scss';
import LogoImg from '../../assets/img/logo.png';
function Logo() {
  return (
    <a className='logo' href='./'>
      <img className='logo__img' src={LogoImg} alt='logo' />
      <span className='logo__text'>Pokedex</span>
    </a>
  );
}

export default Logo;
