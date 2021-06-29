import * as React from 'react';
import {
  Container, Content, Footer, Header, Text,
} from 'native-base';
import { SafeAreaView } from 'react-native';

import rq from 'ruby-questions';

import QuizItem from './QuizItem';
import Next from './QuizItem/components/Next';
import { connect } from 'react-redux';
import Question from './QuizItem/components/Question';


const getQuizItem = (id) => {
  // const item = rq.ruby[Math.floor(Math.random() * rq.ruby.length)];
  return Object.assign(rq.ruby[id], { id: id });
};

const questionText = (id) => {
  quizItem = getQuizItem(id);
  console.log('>>>', id, quizItem.question)
  return quizItem.question

};

const QuizScreen = (props) => (
  <Container>
    <Header><Question text={questionText(props.current)} /></Header>
    <Content padder>
      <SafeAreaView style={{ flex: 1 }}>
        <QuizItem item={getQuizItem(props.current)} />
      </SafeAreaView>
    </Content>
    <Footer>
      <Next />
    </Footer>
  </Container>
);

const mapStateToProps = state => {
  console.log('state', state)
  return {
    current: state.current
  }
};

export default connect(mapStateToProps, null)(QuizScreen);
