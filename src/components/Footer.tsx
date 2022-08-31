import { NavLink } from 'react-router-dom';
import FooterStyled from '../styles/Footer.styled';
import facebookIcon from '../assets/shared/desktop/icon-facebook.svg'
import twitterIcon from '../assets/shared/desktop/icon-twitter.svg'
import instagramIcon from '../assets/shared/desktop/icon-instagram.svg'

const Footer = () => {
  return (
    <FooterStyled>
      <div className="first-wrapper">
        <img
          className="first-wrapper__image"
          src="../../src/assets/shared/desktop/logo-footer.svg"
          alt="Cofeeroaster logo"
        />

        <nav>
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
        </nav>
      </div>
      <div className="second__wrapper">
        <img
          className="second__wrapper-image"
          src={facebookIcon}
          alt="Facebook icon"
        />
        <img
          className="second__wrapper-image"
          src={twitterIcon}
          alt="Twitter icon"
        />
        <img
          className="second__wrapper-image"
          src={instagramIcon}
          alt="Instgram icon"
        />
      </div>
    </FooterStyled>
  );
};

export default Footer;
