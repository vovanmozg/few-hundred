import * as React from 'react';
import { Box } from 'native-base';
import { bg } from 'app/debug';
import { useCurrentQuizItem } from 'app/screens/QuizScreen/hooks/useCurrentQuizItem';
import { useStartQuiz } from 'app/screens/QuizScreen/hooks/useStartQuiz';

import { Next } from './Next';
import { Question } from './Question';
import { QuizItem } from './QuizItem';

// function transformChoice(choice: TImportedChoice): TChoice {
//   const [index, value] = choice;
//   return {
//     index,
//     value,
//   };
// }

// const getQuizItem = item => {
//   return item;
//   // const item = rq.ruby[Math.floor(Math.random() * rq.ruby.length)];
//   console.log(id);
//
//   return Object.assign(rq.ruby[id], { id });
// };

// const questionText = id => {
//   const quizItem = getQuizItem(id);
//   return quizItem.question;
// };

export function Quiz() {
  const currentQuizItem = useCurrentQuizItem();
  const items = useStartQuiz();

  if (!items) {
    return null;
  }

  return (
    <Box
      bg={bg('secondary.300')}
      p="1"
      h="100%"
      display="flex"
      flexDirection="column">
      <Box mb="10">
        <Question text={items[currentQuizItem].question} />
      </Box>
      <Box>
        <QuizItem quizItem={items[currentQuizItem]} />
      </Box>
      <Box style={{ position: 'absolute', bottom: 0, right: 0 }}>
        <Next />
      </Box>
    </Box>
  );
}
