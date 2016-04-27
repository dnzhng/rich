import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Home from './home.js';
import Docs from './docs.js';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/docs" component={Docs} />
  </Router>
), document.getElementById('react-root'));
