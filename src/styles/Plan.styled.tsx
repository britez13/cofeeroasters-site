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
      opacity: 0.8;

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
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
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
      opacity: 0.9;

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
    margin-top: 5rem;
    margin-inline: auto;
    opacity: 1;
    transition: opacity 0.5s;

    &__item {
      width: 100%;
    }

    &__button {
      all: unset;
      padding: 2rem 4rem;
    }

    &__subheading {
      font-size: 3.2rem;
      color: ${({ theme }) => theme.colors.grey};
      position: relative;

      &::after {
        content: '';
        position: absolute;
        display: block;
        width: 2rem;
        height: 2rem;
        background-image: url('../../src/assets/plan/desktop/icon-arrow.svg');
        background-repeat: no-repeat;
        top: 45%;
        right: -10rem;
      }
    }

    &__type {
      padding: 2rem 4rem;
      width: 100%;
      display: flex;
      gap: 1rem;

      &[data-visible='false'] {
        width: 0;
        padding: 0;
        margin: 0;
        height: 0;
        overflow: hidden;
        opacity: 0;

        /* &__subheading {
          padding: 0;
        } */
      }

      /* &[data-visible='true'] {
        display: flex;
      } */
    }

    &__name {
      all: unset;
      width: 22.3rem;
      height: 25rem;
      background-color: ${({ theme }) => theme.colors.smoke};
      border-radius: 0.7rem;
      padding-left: 2.5rem;

      &:hover {
        background-color: ${({ theme }) => theme.colors.paleOrange};
      }
    }

    &__h3 {
      text-align: start;
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.darkGreyBlue};
      font-style: normal;
    }

    &__description {
      text-align: start;
      font-size: 1.6rem;
      line-height: 2.6rem;
      color: ${({ theme }) => theme.colors.darkGreyBlue};
      max-width: 17.2rem;
      line-break: anywhere;
      margin-top: 2rem;
    }
  }
`;

export default PlanStyle;
