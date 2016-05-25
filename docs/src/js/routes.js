import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import Home from './home.js';
import Docs from './docs.js';
import Root from './root.js';

const Routes = (
    <Route path="/" component={Root} >
      <IndexRedirect to="/home" />
      <Route path="/home" component={Home} />
      <Route path="/docs" component={Docs} >
        <Route path="d3" active="d3" component={Docs} />
        <Route path="banner" active="banner" component={Docs} />
        <Route path="card" active="card" component={Docs} />
        <Route path="nav" active="nav" component={Docs} />
      </Route>
    </Route>
);

export default Routes;
