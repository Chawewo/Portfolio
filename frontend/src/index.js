import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
ReactDom.hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  )
