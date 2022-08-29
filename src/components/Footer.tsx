import { NavLink } from "react-router-dom";
import FooterStyled from "../styles/Footer.styled";

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
              <NavLink className="navbar__link" to="/subscribe">
                Create your plan
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="second__wrapper">
        <a href="/">fkfkjdf</a>
        <a href="/">ldfkld</a>
        <a href="/">dlfkal</a>
      </div>
    </FooterStyled>
  );
}

export default Footer;