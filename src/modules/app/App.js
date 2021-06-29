import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppWithNavigation from './AppWithNavigation';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const initialState = { current: 0, answers: [] };

const reducer = (state = initialState, action) => {
  if (action.type === 'NEXT_QUESTION') {
    const newState = { current: state.current + 1 };
    return { ...state, ...newState }
  }
  if (action.type === 'ANSWER') {
    console.log('answer', action.choice)

    const right = action.quizItemId.answer === action.choice.index;
    const answer = {}
    answer[action.quizItemId.id] = {
      right,
      choice: action.choice,
      question: action.quizItemId,
    };
    const newState = { answers: { ...state.answers, ...answer } };
    return { ...state, ...newState };

  }
  return state;
};

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
