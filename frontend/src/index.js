import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Replace with your main component file

import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
