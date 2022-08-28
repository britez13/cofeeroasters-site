import HeaderStyle from '../styles/Header.styled';
import logo from '../assets/shared/desktop/logo.svg'
import Navbar from './Navbar';

const Header = () => {
  return (
    <HeaderStyle>
      <img src={logo} alt="Cofeeroaster logo" />
      <Navbar />
    </HeaderStyle>
  );
};

export default Header;


