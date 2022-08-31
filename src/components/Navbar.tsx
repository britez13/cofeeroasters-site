import { NavLink } from 'react-router-dom';
import NavbarStyle from '../styles/Navbar.styled';

const Navbar = () => {
  return (
    <NavbarStyle>
      <ul className="navbar">
        <li className="navbar__list">
          <NavLink className="navbar__link" to="/">
            Home
          </NavLink>
        </li>

        <li className="navbar__list">
          <NavLink className="navbar__link" to="/about">
            About us
          </NavLink>
        </li>

        <li className="navbar__list">
          <NavLink className="navbar__link" to="/plan">
            Create your plan
          </NavLink>
        </li>
      </ul>
    </NavbarStyle>
  );
};

export default Navbar;
