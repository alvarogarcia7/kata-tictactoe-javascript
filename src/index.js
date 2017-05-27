import React from 'react';
import ReactDOM from 'react-dom';
import FullApp from './FullApp'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render((
  <BrowserRouter>      
    <FullApp /> 
  </BrowserRouter>),
  document.getElementById('root'));
registerServiceWorker();
