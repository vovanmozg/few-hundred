import * as React from 'react';
import { Box } from 'native-base';
import { Explanation } from 'app/screens/QuizScreen/components/Explanation';
import { Question } from 'app/screens/QuizScreen/components/Question';
import { TQuizState, useStore } from 'app/store/quizState';
import { TQuizItem } from 'app/types/TQuizItem';

import { Choices } from './Choices';

type TProps = {
  quizItem: TQuizItem;
};

export function QuizItem({ quizItem }: TProps) {
  // let text =
  //   'In Ruby, the === operator is used for pattern matching, and it is implemented differently depending on the type of object being compared.' +
  //   '\n' +
  //   'When using the === operator with a range object like (1...10), it checks if the right-hand side object is an element within the range. In this case, 5 is indeed an element within the range from 1 to 10 (excluding 10), so the expression (1...10) === 5 returns true.' +
  //   '\n' +
  //   'Note that if you use the == operator instead of ===, the expression would return false because a range object is not equal to any of its elements.' +
  //   '\n' +
  //   'Note that if you use the == operator instead of ===, the expression would return false because a range object is not equal to any of its elements.' +
  //   '\n' +
  //   '<a href="https://ruby-doc.org/core-2.7.1/Range.html#method-i-3D-3D-3D">https://ruby-doc.org/core-2.7.1/Range.html#method-i-3D-3D-3D</a>';
  // text =
  //   'The code will return an array containing the values of ' +
  //   'the a property for each object in the original array.\n' +
  //   'In this case, the original array is [{ a: 1 }, { a: 2 }], which ' +
  //   'contains two objects with the property a. The map method is called ' +
  //   'on this array and a lambda function (also known as a <em>stabby lambda' +
  //   '</em> in Ruby) is passed as an argument.\n' +
  //   'The lambda function takes a single parameter x, which represents each' +
  //   ' object in the original array. The function returns the value of the ' +
  //   'a property for each object.\n' +
  //   'So, the output of the code will be the array [1, 2], which contains ' +
  //   'the values of the a property for each object in the original array.';

  const answers = useStore((state: TQuizState) => state.answers);

  return (
    <Box>
      <Box mb="10">
        <Question text={quizItem.question} />
      </Box>
      <Choices quizItem={quizItem} />
      {answers[quizItem.question] && quizItem.explanation && (
        <Explanation text={quizItem.explanation} />
      )}
    </Box>
  );
}
