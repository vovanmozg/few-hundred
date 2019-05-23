/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import { SafeAreaView } from 'react-native';

import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';

import QuizItem from './screens/QuizItem';

// you can set your style right here, it'll be propagated to application
const uiTheme = {
  palette: {
    primaryColor: COLOR.blue50,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};


export default class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value={getTheme(uiTheme)}>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#4ff' }}>
          <QuizItem />
        </SafeAreaView>
      </ThemeContext.Provider>

    );
  }
}
