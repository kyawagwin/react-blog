import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
import AppStore from './stores/AppStore';
import App from './components/App';
import Blog from './components/Pages/Blog';
import Default from './components/Pages/Default';
import Work from './components/Pages/Work';
import NoMatch from './components/Pages/NoMatch';

export default (
  <Route path="/" data={AppStore.data} component={App}>
    <IndexRoute component={Blog} />
    <Route path="about" component={Default} />
    <Route path="work" component={Work} />
    <Route path="contact" component={Default} />
    <Route path="/work/:slug" component={Work} />
    <Route path="/blog/:slug" component={Blog} />
    <Route path="*" component={NoMatch} />
  </Route>
)
