import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Plan from './pages/Plan';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import GlobalStyle from './styles/Global.styled';
import Header from './components/Header';
import Footer from './components/Footer';

const theme: DefaultTheme = {
  colors: {
    darkCyan: '#0E8784',
    lightCyan: '#66D2CF',
    darkGreyBlue: '#333D4B',
    paleOrange: '#FDD6BA',
    lightCream: '#FEFCF7',
    grey: '#83888F',
    darkGrey: '#2C343E',
    lightGrey: '#E2DEDB',
    smoke: '#F4F1EB',
    white: '#FFFFFF',
  },

  fonts: {
    barlow: "'Barlow', sans-serif",
    fraunces: "'Fraunces', serif",
  },

  breakpoints: {
    tablet: '600px',
    desktop: '992px',
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
        <Route path="plan" element={<Plan />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
