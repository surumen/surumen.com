import React from 'react';
import ReactDOM from 'react-dom';
import {createHistory as browserHistory } from 'history/createBrowserHistory';

import Routes from './routes';


ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
