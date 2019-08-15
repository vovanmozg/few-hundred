import React, { Component } from 'react';
import  { Provider } from 'react-redux';
import AppWithNavigation from './AppWithNavigation';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const reducer = (state = {}, action) => {
  return state
}

const store = createStore(reducer, applyMiddleware(logger));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigation />
      </Provider>
    );
  }
}
