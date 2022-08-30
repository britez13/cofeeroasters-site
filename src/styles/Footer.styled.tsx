import styled from 'styled-components';

const FooterStyled = styled.footer`
  width: min(95%, 128rem);
  min-height: 34.6rem;
  background-color: ${({ theme }) => theme.colors.darkGreyBlue};
  margin-inline: auto;
  margin-block: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 27rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: 12rem;
    flex-direction: row;
    justify-content: space-between;
    padding-inline: 10rem;
  }

  .first-wrapper {
    display: flex;
    flex-direction: column;
    gap: 5rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      gap: 3rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      flex-direction: row;
      align-items: center;
      gap: 10rem;
    }
  }

  .navbar {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      flex-direction: row;
      gap: 4rem;
    }

    &__link {
      color: ${({ theme }) => theme.colors.grey};
      text-transform: uppercase;
      font-family: ${({ theme }) => theme.fonts.barlow};
      font-weight: 700;
      font-size: 1.2rem;
      letter-spacing: 0.92px;
    }
  }

  .second__wrapper {
    display: flex;
    gap: 2rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      gap: 3rem;
    }

    &-image {
      width: 2.4rem;
      height: 2.4rem;
      object-fit: fill;
    }
  }
`;

export default FooterStyled;
