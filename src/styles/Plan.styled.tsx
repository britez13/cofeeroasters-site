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

  .try {
    background-color: red;
    height: 50rem;
    width: 100%;
    margin-inline: auto;
  }
`;

export default PlanStyle;
