import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
var isMarkupPresent = document.getElementById('root').hasChildNodes();
isMarkupPresent ? ReactDom.hydrate(<App />, document.getElementById('root')) : ReactDom.render(<App />, document.getElementById('root'))
