import styled from 'styled-components';

const HeaderStyle = styled.header`
  margin-inline: auto;
  padding-inline: 2.5%;
  padding-block: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 10;
  background-color: white;
  min-height: 3rem;
  top: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: min(95%, 128rem);
    padding-inline: 0;
  }

  .icon-menu {
    display: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: absolute;
      z-index: 5;
      width: 2.3rem;
      height: 1.7rem;
      right: 3%;

      span {
        display: block;
        height: 0.2rem;
        background-color: #333d4b;
        transition: transform 0.3s ease, translate 0.3s ease, opacity 0.3s ease;
      }

      &.active {
        span:first-of-type {
          transform: rotate(45deg);
          translate: 0 0.5rem;
        }

        span:nth-of-type(2) {
          opacity: 0;
        }

        span:last-of-type {
          transform: rotate(-45deg);
          translate: 0 -0.9rem;
        }
      }
    }
  }

  .navbar {
    ul {
      display: flex;
      flex-direction: row;
      gap: 2rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding-top: 4rem;
      visibility: hidden;
      opacity: 0;
      transition: opacity 1s ease;
      flex-direction: column;
      align-items: center;
      gap: 5rem;
      position: fixed;
      z-index: 15;
      background-image: linear-gradient(
        white 0%,
        white 50%,
        #ffffffe1 55%,
        #ffffff63 75%,
        #ffffff37 95%
      );
      left: 0;
      width: 100%;
      bottom: 0;
      top: 8rem;

      ul {
        flex-direction: column;
        align-items: center;
        transform: scale(0);
      }
    }

    &.active {
      visibility: visible;
      opacity: 1;

      ul {
        transform: scale(1);
        li {
          transform: translate(0rem, 0rem);
        }
      }
    }

    &__link {
      color: ${({ theme }) => theme.colors.grey};
      text-transform: uppercase;
      font-family: ${({ theme }) => theme.fonts.barlow};
      font-size: 1.2rem;
      font-weight: 700;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        /* color: ${({ theme }) => theme.colors.darkGreyBlue}; */
        color: ${({ theme }) => theme.colors.darkGrey};
        text-transform: capitalize;
        font-family: ${({ theme }) => theme.fonts.fraunces};
        font-size: 2.4rem;
        font-weight: 900;
      }
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

export default HeaderStyle;
