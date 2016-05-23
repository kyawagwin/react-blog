import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import routes from './routes';

const history = createBrowserHistory();

const Routes = (
  <Router history={history}>
    { routes }
  </Router>
)

const app = document.getElementById('app');

render(Routes, app);
