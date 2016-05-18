import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Home from './home.js';
import Docs from './docs.js';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/docs" component={Docs} >
      <Route path="d3" active="d3" component={Docs} />
      <Route path="banner" active="banner" component={Docs} />
      <Route path="card" active="card" component={Docs} />
      <Route path="nav" active="nav" component={Docs} />
    </Route>
  </Router>
), document.getElementById('react-root'));
