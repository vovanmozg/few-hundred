import * as React from 'react';
import { Text, View } from 'react-native';
import Question from './components/Question';
import Choices from './components/Choices';
import Next from './components/Next';

class QuizItem extends React.Component {


  render() {
    const quizItem = {
      'question': 'What will be the output of the following code?\n<code>2 ** (14 ** 10)</code>',
      'type': 'mc',
      'choices': {
        '1': 'Infinity',
        '2': 'Error',
        '3': '2E10000000000'
      },
      'answer': '1',
      'tags': [
        'beginner-level'
      ],
      'explanation': ''
    };

    return (
      <View style={ { backgroundColor: '#ff5' } }>
        <Question text={quizItem.question} />

        <Choices choices={quizItem.choices} answer={quizItem.answer} />
        <Next />
      </View>
    );
  }
}

export default QuizItem;
