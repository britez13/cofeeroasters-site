import styled from "styled-components";

const FooterStyled = styled.footer`
  /* position: relative;
  bottom: 10; */
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

  .first-wrapper {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

  .navbar {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;

    &__link {
      color: ${({ theme }) => theme.colors.grey};
      text-transform: uppercase;
      font-family: ${({ theme }) => theme.fonts.barlow};
      font-weight: 700;
      font-size: 1.2rem;
    }

  }

  .second-wrapper {
    display: flex;
    gap: 2rem;

    & a {
      display: inline-block;
    }
  }
`;

export default FooterStyled;