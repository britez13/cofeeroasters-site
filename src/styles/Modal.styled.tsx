import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  z-index: 100;
  inset: 0 0 0 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  font-family: ${({ theme }) => theme.fonts.fraunces};

  .container {
    width: min(90%, 54rem);
    border-radius: 0.8rem;

    .heading {
      height: 7rem;
      background-color: ${({ theme }) => theme.colors.darkGreyBlue};
      display: flex;
      align-items: center;

      h1 {
        color: ${({ theme }) => theme.colors.white};
        font-weight: 900;
        font-size: 2rem;
        margin-left: 2.3rem;
      }
    }

    .body {
      padding: 2.3rem;
      background-color: ${({ theme }) => theme.colors.white};

      .summary {
        display: inline-block;
        text-align: left;
        margin: 0;
        font-style: normal;
        font-weight: 900;
        line-height: 2.4rem;
        color: #83888f;
        font-family: ${({ theme }) => theme.fonts.fraunces};

        span {
          color: ${({ theme }) => theme.colors.darkCyan};
          font-size: 1.8rem;
        }

        p {
          display: inline-block;
          text-align: left;
          font-size: 1.8rem;
          color: #83888f;
        }
      }

      .guide {
        margin-top: 1rem;
        text-align: left;
        font-size: 1.5rem;
        line-height: 2rem;
        color: #333d4b;
        mix-blend-mode: normal;
        opacity: 0.8;
      }

      div {
        margin-top: 4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
          font-style: normal;
          font-weight: 900;
          font-size: 2.5rem;
          color: #333d4b;
          font-family: ${({ theme }) => theme.fonts.fraunces};
        }

        button {
          background-color: ${({ theme }) => theme.colors.darkCyan};
          color: ${({ theme }) => theme.colors.white};
          padding: 0.9rem 2.7rem;
          border-radius: 0.6rem;
          font-style: normal;
          font-weight: 900;
          font-size: 1.6rem;
          border: none;
          font-family: ${({ theme }) => theme.fonts.fraunces};
          transition: background-color 0.3s ease;

          :hover {
            background-color: ${({ theme }) => theme.colors.lightCyan};
          }
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    .container {
      .heading {
        height: 10rem;

        h1 {
          font-size: 4rem;
          margin-left: 5.6rem;
        }
      }

      .body {
        padding: 5.6rem;

        .summary {
          font-size: 2.4rem;
          line-height: 3rem;
        }

        .guide {
          font-size: 1.6rem;
          line-height: 2.6rem;
        }

        div {
          p {
            font-size: 3.2rem;
          }

          button {
            padding: 1.5rem 6.4rem;
            font-size: 1.8rem;
          }
        }
      }
    }
  }
`;

export default Modal;
