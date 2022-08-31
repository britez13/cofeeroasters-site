import styled from 'styled-components';
import hero from '../assets/home/mobile/image-hero-coffeepress.jpg';

const HomeStyled = styled.main`
  width: min(95%, 128rem);
  margin-inline: auto;

  .hero {
    /* margin-inline: auto;
    width: min(95%, 128rem); */
    height: 50rem;
    border-radius: 1rem;
    background-image: url('../../src/assets/home/mobile/image-hero-coffeepress.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      background-image: url('../../src/assets/home/tablet/image-hero-coffeepress.jpg');
      justify-content: flex-start;
      padding-left: 5rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      height: 60rem;
      background-image: url('../../src/assets/home/desktop/image-hero-coffeepress.jpg');
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        max-width: 39.8rem;
        align-items: flex-start;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        max-width: 50rem;
      }
    }

    &__title {
      color: ${({ theme }) => theme.colors.lightCream};
      font-size: 4rem;
      max-width: 27.9rem;
      line-height: 4rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: start;
        font-size: 4.6rem;
        max-width: 32.9rem;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        text-align: start;
        font-size: 7.2rem;
        line-height: 7.2rem;
        max-width: 49.3rem;
      }
    }

    &__description {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.lightCream};
      mix-blend-mode: normal;
      opacity: 0.8;
      line-height: 2.5rem;
      padding-inline: 2.5rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: start;
        padding: 0;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        max-width: 44.5rem;
        font-size: 1.6rem;
        line-height: 2.6rem;
        padding-right: 3rem;
      }
    }

    &__link {
      font-family: ${({ theme }) => theme.fonts.fraunces};
      background-color: ${({ theme }) => theme.colors.darkCyan};
      color: ${({ theme }) => theme.colors.lightCream};
      font-size: 2rem;
      padding-inline: 2.5rem;
      padding-block: 2rem;
      border-radius: 0.7rem;
    }
  }

  .collection {
    margin-top: 10rem;
    /* width: min(95%, 128rem); */
    margin-inline: auto;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      max-width: 111.1rem;
    }

    &__title {
      text-transform: lowercase;
      font-size: 4rem;
      color: ${({ theme }) => theme.colors.grey};

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 11rem;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 15rem;
      }
    }

    &__wrapper {
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin-top: -4.5rem;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
      }
    }

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 5.5rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        max-width: 57.3rem;
        flex-direction: row;
        align-items: flex-start;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        flex-direction: column;
        justify-content: flex-start;
      }
    }

    &__image {
      display: block;
      width: 20rem;
      height: 15.1rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 25.5rem;
        height: 19.3rem;
      }
    }

    &__subheading {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.darkGreyBlue};
      margin-top: 1rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: start;
        margin-top: 2rem;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        text-align: center;
      }
    }

    &__description {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.darkGreyBlue};
      line-height: 2.5rem;
      max-width: 28.2rem;
      margin-top: 1.5rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: start;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 1.6rem;
        max-width: 24.5rem;
        text-align: center;
      }
    }
  }

  .choose {
    margin-top: 15rem;
    margin-inline: auto;
    /* width: min(95%, 128rem); */
    background-color: ${({ theme }) => theme.colors.darkGrey};
    border-radius: 0.7rem;
    max-height: 90rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      max-height: 57.3rem;
      gap: 4rem;
    }

    &__subheading {
      padding-top: 5rem;
      font-size: 2.8rem;
      color: ${({ theme }) => theme.colors.lightCream};

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 3.2rem;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 4rem;
        padding-top: 10rem;
      }
    }

    &__description {
      max-width: 27.9rem;
      line-height: 2.5rem;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.lightCream};
      mix-blend-mode: normal;
      opacity: 0.8;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        max-width: 54rem;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 1.6rem;
        line-height: 2.6rem;
      }
    }

    &__wrapper {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin-top: 4rem;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        flex-direction: row;
        justify-content: center;
        /* flex-wrap: wrap; */
        gap: 3rem;
      }
    }

    &__item {
      height: 38.2rem;
      width: 27.9rem;
      background-color: ${({ theme }) => theme.colors.darkCyan};
      border-radius: 0.7rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 57.3rem;
        height: 18rem;
        flex-direction: row;
        justify-content: flex-start;
        padding-left: 8rem;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        width: 35rem;
        height: 38.2rem;
        flex-direction: column;
        justify-content: center;
        gap: 5rem;
        padding-left: 0;
      }
    }

    &__image {
      width: 7.2rem;
      height: 7.2rem;
      object-fit: contain;

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        margin-top: 3rem;
      }
    }

    &__name {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.lightCream};

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: start;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        text-align: center;
      }
    }

    &__characteristic {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.lightCream};
      line-height: 2.5rem;
      max-width: 21.2rem;
      margin-top: 3rem;
      mix-blend-mode: normal;
      opacity: 0.9;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: start;
        max-width: 34.4rem;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        text-align: center;
        font-size: 1.6rem;
        line-height: 2.6rem;
        max-width: 21.2rem;
      }
    }
  }

  .process {
    margin-top: 65rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-top: 40rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      margin-top: 30rem;
      max-width: 104.5rem;
      margin-inline: auto;
    }

    &__title {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.grey};

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: start;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 3.2rem;
      }
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
      z-index: -1;
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
      color: ${({ theme }) => theme.colors.darkGreyBlue};

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
      color: ${({ theme }) => theme.colors.darkGreyBlue};

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: start;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 1.6rem;
        line-height: 2.6rem;
      }
    }
  }
`;

export default HomeStyled;
