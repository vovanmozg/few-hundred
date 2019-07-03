import * as React from 'react';
import { Container, Content, Footer, Header } from "native-base";
import { SafeAreaView } from 'react-native';


import QuizItem from './QuizItem';
import Next from './QuizItem/components/Next';


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