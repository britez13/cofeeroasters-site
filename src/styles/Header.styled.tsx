import styled from 'styled-components';
import iconHamburger from '../assets/shared/mobile/icon-hamburger.svg';

const HeaderStyle = styled.header`
  margin-inline: auto;
  margin-block: 3rem;
  width: min(95%, 128rem);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon-menu {
    display: none;

    /* @media(max-width: ${({theme})=>theme.breakpoints.tablet}) {
      display: block;
      position: absolute;
      z-index: 5;
      right: 1rem;
      width: 5rem;
      height: 5rem;
      background-image: url({iconHamburger});
      background-size: cover;
      background-repeat: no-repeat;
      background-color: gray;
    } */
    

  }





`;

export default HeaderStyle;
