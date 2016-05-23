import React, { Component } from 'react';

import AppDispatcher from '../dispatcher/AppDispatcher';

import AppStore from '../stores/AppStore';

import Nav from './Partials/Nav';
import Footer from './Partials/Footer';
import Loading from './Partials/Loading';

export default class App extends Component {
  componentDidMount() {
    AppStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    this.setState(AppStore);
  }

  getStore() {
    AppDispatcher.dispatch({
      action: 'get-app-store'
    })
  }

  render() {

  }
}
