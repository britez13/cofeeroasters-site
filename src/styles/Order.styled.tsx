import styled from "styled-components";

const OrderStyle = styled.div`
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
      color: grey;
    }

    .summary {
      text-align: left;
      margin-top: 0.8rem;
      font-style: normal;
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 4rem;
      font-family: ${({ theme }) => theme.fonts.fraunces};

      span {
        color: ${({ theme }) => theme.colors.darkCyan};

        &.incomplete {
          width: 6rem;
          border-bottom: 1px solid ${({ theme }) => theme.colors.darkCyan};
          display: inline-block;
        }
      }
    }

    span,
    p:not(.subheading) {
      display: inline-block;
      font-family: ${({ theme }) => theme.fonts.fraunces};
      text-align: left;
    }
  }
`;

export default OrderStyle;