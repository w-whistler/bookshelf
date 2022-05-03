import { ThemeProvider } from '@mui/material';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './containers/App/App';
import './index.css';
import store from './redux/store';
import { theme } from './theme/theme';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
