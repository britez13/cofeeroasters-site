import styled from 'styled-components';

const PlanStyle = styled.main`
  /* width: min(95vw, 128rem); */
  margin-inline: auto;

  .hero {
    width: min(95vw, 128rem);
    height: 40rem;
    margin-inline: auto;
    background-image: url('../../src/assets/plan/mobile/image-hero-blackcup.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      background-image: url('../../src/assets/plan/tablet/image-hero-blackcup.jpg');
      align-items: flex-start;
      padding-left: 7rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      background-image: url('../../src/assets/plan/desktop/image-hero-blackcup.jpg');
      height: 44.5rem;
      padding-left: 10rem;
      gap: 3rem;
    }

    &__title {
      font-size: 4rem;
      color: ${({ theme }) => theme.colors.lightCream};

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: start;
        font-size: 4.8rem;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 7.2rem;
      }
    }

    &__description {
      max-width: 27.9rem;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.lightCream};
      line-height: 2.5rem;
      mix-blend-mode: normal;
      opacity: 1;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: start;
        max-width: 39.8rem;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 1.6rem;
        line-height: 2.6rem;
        max-width: 44.5rem;
      }
    }
  }

  .process {
    margin-top: 10rem;
    padding-top: 2rem;
    padding-bottom: 7rem;
    background-color: ${({ theme }) => theme.colors.darkGreyBlue};
    /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
    border-radius: 0.7rem;
    width: min(99.7%, 128rem);
    margin-inline: auto;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-top: 15rem;
      padding-left: 4rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      padding-left: 8rem;
    }

    &__first-wrapper {
      display: none;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin-top: 5rem;
        display: flex;
        gap: 20.4rem;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        gap: 33rem;
      }
    }

    &__circle1,
    &__circle2,
    &__circle3 {
      width: 3.1rem;
      height: 3.1rem;
      border: 1px solid ${({ theme }) => theme.colors.darkCyan};
      border-radius: 50%;
      position: relative;
    }

    &__circle1::after,
    &__circle2::after {
      position: absolute;
      z-index: 1;
      content: '';
      display: block;
      width: 20.4rem;
      height: 0.2rem;
      background-color: ${({ theme }) => theme.colors.paleOrange};
      inset: 50% 0 0 100%;

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        width: 33.1rem;
      }
    }

    &__second-wrapper {
      margin-top: 5rem;
      display: flex;
      flex-direction: column;
      gap: 5rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: row;
        gap: 2rem;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        gap: 10rem;
      }
    }

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        gap: 4rem;
        align-items: flex-start;
        max-width: 21.5rem;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        max-width: 26rem;
      }
    }

    &__number {
      font-size: 7.2rem;
      color: ${({ theme }) => theme.colors.paleOrange};

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: start;
      }
    }

    &__name {
      font-size: 2.8rem;
      color: ${({ theme }) => theme.colors.white};

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: start;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 3.2rem;
      }
    }

    &__description {
      font-size: 1.5rem;
      line-height: 2.5rem;
      color: ${({ theme }) => theme.colors.white};
      max-width: 32.7rem;
      mix-blend-mode: normal;
      opacity: 1;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: start;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 1.6rem;
        line-height: 2.6rem;
      }
    }
  }

  .options {
    width: min(95vw, 128rem);
    margin-inline: auto;
    margin-top: 5rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      display: flex;
      justify-content: center;
      gap: 10rem;
    }

    .inside-nav {
      display: none;
      margin-top: 0.5rem;

      ol {
        width: 25.5rem;
        margin: 0;

        li {
          padding-block: 2.4rem;
          border-bottom: 1px solid rgba(134, 132, 132, 0.25);
          cursor: pointer;

          :first-of-type {
            padding-top: 0;
          }

          :last-of-type {
            border-bottom: none;
          }
        }

        span,
        p {
          font-family: inherit;
          font-size: 2.4rem;
          font-weight: 900;
          color: ${({ theme }) => theme.colors.grey};
        }

        span {
          &.selected {
            color: ${({ theme }) => theme.colors.darkCyan};

            &.close {
              color: ${({ theme }) => theme.colors.lightCyan};
              /* color: red; */
            }
          }
        }

        p {
          display: inline-block;
          margin-left: 2.8rem;

          &.active {
            color: ${({ theme }) => theme.colors.darkGrey};
          }
        }
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        display: flex;
      }
    }
  }

  form {
    width: min(95vw, 128rem);
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    scroll-behavior: smooth;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      max-width: 73rem;
      margin-inline: 0;
    }
  }

  legend {
    /* margin-bottom: 5.6rem; */
    margin-bottom: 3.2rem;
    font: inherit;
    /* font-size: 3rem; */
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.grey};
    cursor: pointer;
    position: relative;
    width: 100%;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 3.2rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 4rem;
    }

    .arrow {
      position: absolute;
      border: solid grey;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
      right: 0;
      top: 50%;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      transition: transform ease 0.5s, border-color 0.5s ease;

      &.active {
        transform: rotate(220deg);
        border-color: ${({ theme }) => theme.colors.darkCyan};
      }
    }
  }

  .radio-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* flex-basis: 200px; */
    position: relative;
    gap: 1.6rem;
    /* gap: 2rem; */
    /* transform: scaleY(0);
    transform-origin: top; */
    max-height: 0rem;
    transition: max-height 0.7s ease-in-out;
    overflow: hidden;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      flex-direction: row;
    }

    label {
      width: 100%;
      height: 14rem;
      background-color: ${({ theme }) => theme.colors.smoke};
      cursor: pointer;
      transition: background-color 0.2s ease;
      border-radius: 0.8rem;
      padding: 2.4rem 2.5rem 0;

      h3 {
        font-size: 2.4rem;
        font-weight: 900;
        text-align: left;
        color: ${({ theme }) => theme.colors.darkGreyBlue};
        transition: color 0.2s ease;
      }

      p {
        /* margin-top: 2.4rem; */
        margin-top: 0.8rem;
        font-size: 1.6rem;
        text-align: left;
        line-height: 2.6rem;
        transition: color 0.2s ease;
      }

      :hover {
        background-color: ${({ theme }) => theme.colors.paleOrange};
      }

      &.active {
        background-color: ${({ theme }) => theme.colors.darkCyan};

        h3 {
          color: ${({ theme }) => theme.colors.white};
        }

        p {
          color: ${({ theme }) => theme.colors.white};
        }
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: 25rem;
        padding: 3.2rem 2.5rem 0;

        h3 {
          font-size: 3.2rem;
        }

        p {
          margin-top: 2.4rem;
        }
      }
    }

    /* h3, p {
      display: inline-block;
    } */

    input {
      appearance: none;
    }
  }

  .radio-container.active {
    /* transform: scaleY(1);
    transform-origin: top; */
    /* max-height: 25rem; */
    max-height: 45.2rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      max-height: 25rem;
    }
  }

  .order {
    background-color: ${({ theme }) => theme.colors.darkGrey};
    padding: 3.2rem 2.5rem;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.white};

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      border-radius: 0;
    }

    .subheading {
      font-size: 1.6rem;
      text-transform: uppercase;
      mix-blend-mode: normal;
      opacity: 1;
      text-align: left;
    }

    .summary {
      font-family: inherit;
      text-align: left;
      margin-top: 0.8rem;
      font-style: normal;
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 4rem;

      span {
        color: ${({ theme }) => theme.colors.darkCyan};

        &.incomplete {
          width: 6rem;
          border-bottom: 1px solid ${({ theme }) => theme.colors.darkCyan};
          display: inline-block;
        }
      }
    }
  }

  .submit-btn {
    /* all: unset; */
    max-width: 21.7rem;
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.darkCyan};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 0.6rem;
    padding: 1.5rem 3.5rem;
    font-family: inherit;
    font-weight: 900;
    font-size: 1.8rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.lightCream};
    margin-inline: auto;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-inline: 0;
      margin-left: auto;
    }
  }
`;

export default PlanStyle;
