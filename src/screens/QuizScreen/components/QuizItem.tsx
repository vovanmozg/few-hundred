import * as React from 'react';
import { Box } from 'native-base';
import { Explanation } from 'app/screens/QuizScreen/components/Explanation';
import { Question } from 'app/screens/QuizScreen/components/Question';
import { useCurrentQuizItem } from 'app/screens/QuizScreen/hooks/useCurrentQuizItem';

import { Choices } from './Choices';

export function QuizItem() {
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

  const { currentQuizItem, isAnswerSelected } = useCurrentQuizItem();

  return (
    <Box>
      <Box mb="10">
        <Question text={currentQuizItem.question} />
      </Box>
      <Choices quizItem={currentQuizItem} />
      {isAnswerSelected && currentQuizItem.explanation && (
        <Explanation text={currentQuizItem.explanation} />
      )}
    </Box>
  );
}
