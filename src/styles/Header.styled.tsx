import styled from 'styled-components';

const HeaderStyle = styled.header`
  padding-block: 3rem;
  width: 100%;
  background-color: white;
  position: sticky;
  z-index: 10;
  top: 0;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: min(95%, 128rem);
    margin-inline: auto;
  }

  .icon-menu {
    display: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      /* display: block; */
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: absolute;
      z-index: 5;
      width: 2.3rem;
      height: 1.80rem;
      right: 4%;

      span {
        display: block;
        height: 0.2rem;
        background-color: #333d4b;
        transition: transform 0.3s ease, translate 0.3s ease, opacity 0.3s ease;
        /* margin-bottom: 0.5rem; */

        &:first-of-type {
          transform-origin: 0% 0%;
        }

        &:last-of-type {
          transform-origin: 0% 100%;
        }
      }

      &.active {
        span:first-of-type {
          transform: rotate(45deg);
        }

        span:nth-of-type(2) {
          opacity: 0;
        }

        span:last-of-type {
          transform: rotate(-45deg);
          /* margin-bottom: 0rem; */
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
        color: ${({ theme }) => theme.colors.darkGrey};
        text-transform: capitalize;
        font-family: ${({ theme }) => theme.fonts.fraunces};
        font-size: 2.4rem;
        font-weight: 900;
      }
    }
  }
`;

export default HeaderStyle;
