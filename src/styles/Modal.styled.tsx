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

  .container {
    width: min(90%, 54rem);
    border-radius: 0.8rem;

    .heading {
      height: 10rem;
      background-color: ${({ theme }) => theme.colors.darkGreyBlue};
      display: flex;
      align-items: center;

      h1 {
        color: ${({ theme }) => theme.colors.white};
        font-weight: 900;
        font-size: 4rem;
        margin-left: 5.6rem;
      }
    }

    .body {
      padding: 5.6rem;
      background-color: ${({ theme }) => theme.colors.white};

      .summary {
        text-align: left;
        font-style: normal;
        font-weight: 900;
        font-size: 2.4rem;
        line-height: 3rem;
        color: #83888f;

        span {
          color: ${({ theme }) => theme.colors.darkCyan};
        }
      }

      .guide {
        margin-top: 1rem;
        text-align: left;
        font-size: 1.6rem;
        line-height: 2.6rem;
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
          font-size: 3.2rem;
          color: #333d4b;
        }

        button {
          background-color: ${({ theme }) => theme.colors.darkCyan};
          color: ${({ theme }) => theme.colors.white};
          padding: 1.5rem 6.4rem;
          border-radius: 0.6rem;
          font-style: normal;
          font-weight: 900;
          font-size: 1.8rem;
          border: none;
        }
      }
    }
  }
`;

export default Modal;
