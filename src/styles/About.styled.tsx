import styled from 'styled-components';

const AboutStyled = styled.main`
  width: min(95vw, 128rem);
  margin-inline: auto;

  .hero {
    height: 40rem;
    width: min(100%, 128rem);
    margin-inline: auto;
    background-image: url('/assets/about/mobile/image-hero-whitecup.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      background-image: url('/assets/about/tablet/image-hero-whitecup.jpg');
      align-items: flex-start;
      padding-left: 5rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      background-image: url('/assets/about/desktop/image-hero-whitecup.jpg');
      height: 45rem;
      padding-left: 8.5rem;
    }

    &__title {
      text-transform: capitalize;
      font-size: 2.8rem;
      color: ${({ theme }) => theme.colors.lightCream};

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: start;
        font-size: 3.2rem;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 4rem;
      }
    }

    &__description {
      margin-top: 3rem;
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
        max-width: 44.5rem;
        font-size: 1.6rem;
        line-height: 2.6rem;
      }
    }
  }

  .commitment {
    margin-top: 8rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      flex-direction: row;
      align-items: center;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      max-width: 111rem;
      justify-content: space-between;
      margin-inline: auto;
    }

    &__image {
      display: block;
      height: 40rem;
      border-radius: 0.7rem;
      object-fit: cover;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: 47rem;
        width: 28.1rem;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        height: 52rem;
        width: 44.5rem;
      }
    }

    &__info {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        gap: 4rem;
        max-width: 33.9rem;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        max-width: 54rem;
      }
    }

    &__subheading {
      font-size: 3.2rem;
      color: ${({ theme }) => theme.colors.darkGreyBlue};

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: start;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 4rem;
      }
    }

    &__description {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.darkGreyBlue};
      line-height: 2.5rem;
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

  .quality {
    margin-top: 12rem;
    height: 50.9rem;
    background-color: ${({ theme }) => theme.colors.darkGreyBlue};
    border-radius: 0.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      height: 48.8rem;
      margin-top: 28rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      flex-direction: row-reverse;
      justify-content: center;
      align-items: flex-start;
      gap: 10rem;
      height: 47.4rem;
    }

    &__image {
      width: 27.9rem;
      height: 15.6rem;
      background-image: url('/src/assets/about/mobile/image-quality.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 0.7rem;
      margin-top: -8rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 57.3rem;
        height: 32rem;
        background-image: url('/assets/about/tablet/image-quality.jpg');

        margin-top: -15rem;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        width: 44.5rem;
        height: 47.4rem;
        background-image: url('/assets/about/desktop/image-quality.jpg');
        margin-top: -8rem;
      }
    }

    &__info {
      max-width: 27.9rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        max-width: 54rem;
        margin-top: 8rem;
      }
    }

    &__subheading {
      font-size: 2.8rem;
      line-height: 2.8rem;
      color: ${({ theme }) => theme.colors.lightCream};

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 3.2rem;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        text-align: start;
        font-size: 4rem;
      }
    }

    &__description {
      margin-top: 3rem;
      font-size: 1.5rem;
      line-height: 2.5rem;
      color: ${({ theme }) => theme.colors.lightCream};
      mix-blend-mode: normal;
      opacity: 1;

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        text-align: start;
        font-size: 1.6rem;
        line-height: 2.6rem;
      }
    }
  }

  .headquarters {
    margin-top: 10rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      max-width: 104.5rem;
      margin-inline: auto;
    }

    &__subheading {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.grey};

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: start;
      }
    }

    &__main-wrapper {
      margin-top: 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin-top: 5.5rem;
        flex-direction: row;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        gap: 12rem;
      }
    }

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        align-items: flex-start;
        gap: 4rem;
      }
    }

    &__secondary-wrapper {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        gap: 3rem;
      }
    }

    &__image {
      width: 4.1rem;
      height: 4.9rem;
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

    &__info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        gap: 0.8rem;
      }
    }

    &__description {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.darkGreyBlue};

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: start;
      }
    }
  }
`;
export default AboutStyled;
