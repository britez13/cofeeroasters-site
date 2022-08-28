import styled from 'styled-components';

const NavbarStyle = styled.nav`
  .navbar {
    display: flex;
    gap: 2rem;

    &__link {
      color: ${({ theme }) => theme.colors.grey};
      text-transform: uppercase;
      font-family: ${({ theme }) => theme.fonts.barlow};
      font-weight: 700;
      font-size: 1.2rem;
    }

    @media(max-width: 500px) {
        display: none;
    }
  }
`;

export default NavbarStyle;

