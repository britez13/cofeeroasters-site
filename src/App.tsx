import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Subscribe from './pages/Subscribe';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import GlobalStyle from './styles/Global.styled';
import Header from './components/Header';
import Footer from './components/Footer';

const theme = {
  colors: {
    darkCyan: '#0E8784',
    lightCyan: '#66D2CF',
    darkGreyBlue: '#333D4B',
    paleOrange: '#FDD6BA',
    lightCream: '#FEFCF7',
    grey: '#83888F',
    darkGrey: '#2C343E',
    lightGrey: '#E2DEDB',
    idk: '#F4F1EB',
  },

  fonts: {
    barlow: "'Barlow', sans-serif",
    fraunces: "'Fraunces', serif",
  },

  // classes: {
  //   container: '12.8rem'
  // },

  breakpoints: {
    tablet: '600px',
    desktop: '992px',
    // lgDesktop: '1200px',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="subscribe" element={<Subscribe />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
