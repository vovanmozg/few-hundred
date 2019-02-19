/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import QuizItem from './screens/QuizItem';
import { SafeAreaView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
          <QuizItem />
        </SafeAreaView>
    );
  }
}
