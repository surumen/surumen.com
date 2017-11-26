// src/routes.js
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';
import Blog from './components/Blog';

const Routes = (props) => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/about" component={About}/>
      <Route path="/blog/facial_recognition" component={Blog}/>
    </div>
  </Router>
);

export default Routes;