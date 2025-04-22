import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { MusicProvider } from './contexts/MusicContext';
import GlobalStyle from './styles/globalStyles';
import { lightTheme, darkTheme } from './styles/theme';
import AppRoutes from './routes';

const ThemedApp = () => {
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;
  
  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <AppRoutes />
    </StyledThemeProvider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <MusicProvider>
          <Router>
            <ThemedApp />
          </Router>
        </MusicProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;