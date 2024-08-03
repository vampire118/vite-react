import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import App from './App.tsx'
import './index.css'
import store from './redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

const theme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        {/* <ThemeProvider theme={theme}> */}
        <CssBaseline />
        <App />
        <ToastContainer />
        {/* </ThemeProvider> */}
      </StyledEngineProvider>

    </Provider>
  </React.StrictMode>,
)
