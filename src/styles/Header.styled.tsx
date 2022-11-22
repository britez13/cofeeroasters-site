import styled from 'styled-components';

const HeaderStyle = styled.header`
  margin-inline: auto;
  margin-block: 3rem;
  width: min(95%, 128rem);
  display: flex;
  justify-content: space-between;
  align-items: center;

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
          translate: 0 .5rem;
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
`;

export default HeaderStyle;
