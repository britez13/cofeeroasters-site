import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        min-height: 100vh;
        background-color: white;
        scroll-behavior: smooth;
    }

    h1, h2, h3, h4, p, ul{
        margin: 0;
        padding: 0;
    }

    h1, h2, h3, h4 {
        text-align: center;
        font-family: ${({ theme }) => theme.fonts.fraunces};
        font-weight: 900;
    }

    p {
        text-align: center;
        font-family: ${({ theme }) => theme.fonts.barlow};
        font-weight: 400;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: black;
        
        :hover, :visited, :active {
            color: black;
        }
    } 
`;

export default GlobalStyle;
