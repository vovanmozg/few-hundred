/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import { SafeAreaView } from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
} from 'native-base';

import QuizItem from './screens/QuizItem';
import Next from './screens/QuizItem/components/Next';

export default () => (
  <Container>
    <Header />
    <Content padder>
      <SafeAreaView style={{ flex: 1 }}>
        <QuizItem />
      </SafeAreaView>
    </Content>
    <Footer>
      <Next />
    </Footer>
  </Container>
);
