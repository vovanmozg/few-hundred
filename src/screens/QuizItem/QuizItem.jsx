import * as React from 'react';
import { Card, CardItem } from 'native-base';
import Question from './components/Question';
import Choices from './components/Choices';


class QuizItem extends React.Component {


  render() {
    const quizItem = {
      question: 'What will be the output of the following code?\n<code>2 ** (14 ** 10)</code>',
      type: 'mc',
      choices: [
        { index: '1', value: 'Infinity' },
        { index: '2', value: 'Error' },
        { index: '3', value: '2E10000000000 What will be the output of the following code? What will be the output of the following code?' },
      ],
      answer: '1',
      tags: [
        'beginner-level',
      ],
      explanation: '',
    };

    // <Icon name="rocket" size={30} color="#900" />
    return (
      <Card>
        <CardItem header bordered>

          <Question text={quizItem.question} />

        </CardItem>
        <CardItem>
          <Choices choices={quizItem.choices} answer={quizItem.answer} />

        </CardItem>
        <CardItem>

        </CardItem>
      </Card>

    );
  }
}

export default QuizItem;


// Quizitem.propTypes = {
//   choices: PropTypes.arrayOf(PropTypes.shape({
//     question: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     choices: PropTypes.arrayOf(PropTypes.shape({
//       index: PropTypes.number,
//       value: PropTypes.string,
//     })),
//     answer: PropTypes.number,
//     tags: PropTypes.arrayOf(PropTypes.string),
//     explanation: PropTypes.string,
//   })).isRequired,
// };
