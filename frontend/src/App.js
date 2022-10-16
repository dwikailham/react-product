import Product from './containers/Product';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Product />
    </ThemeProvider>
  );
}

export default App;
