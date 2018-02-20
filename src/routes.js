// src/routes.js
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// <Route path="/history/reflection" component={Fun}/>

import App from './components/App';
import About from './components/About';
// import Fun from './components/Fun';
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