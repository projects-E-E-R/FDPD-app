import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'antd/dist/antd.css';
import 'utils/prototypes';
import './assets/tailwind.css';
import App from './App';
import 'settings/i18n';
import GlobalStyle from './style';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <link href="/dist/output.css" rel="stylesheet"></link>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
