import styled from 'styled-components';

const NavbarStyle = styled.nav`
  .navbar {
    display: flex;
    gap: 2rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: none;
      }

    __link {
      color: ${({ theme }) => theme.colors.grey};
      text-transform: uppercase;
      font-family: ${({ theme }) => theme.fonts.barlow};
      font-size: 1.2rem;
      font-weight: 700;

      /* @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        color: ${({ theme }) => theme.colors.darkGreyBlue};
        text-transform: capitalize;
        font-family: ${({ theme }) => theme.fonts.fraunces};
        font-size: 2.4rem;
        font-weight: 900;
      } */
    }

    /* @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      position: absolute;
      z-index: 4;
      flex-direction: column;
      gap: 5rem;
      align-items: center;
      padding-top: 7rem;
      top: 8rem;
      right: 0;
      left: 0;
      background-color: ${({ theme }) => theme.colors.lightCream};
      min-height: 90%;
    } */
  }
`;

export default NavbarStyle;
