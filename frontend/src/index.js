import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
// Hydrate will pick up from where html left off and render client side
ReactDom.hydrate(<App />,document.getElementById('root'))
