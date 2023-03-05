import * as React from 'react';
import { useEffect, useState } from 'react';
import { Box } from 'native-base';
import rq from 'ruby-questions';
import { DEBUG } from 'app/contants';
import { TQuizState, useStore } from 'app/store/quizState';
import {
  TImportedChoices,
  TImportedRubyQueistion,
} from 'app/types/tImportedQubyQuestions';
import { TChoice, TQuizItem } from 'app/types/tQuizItem';

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

function transformChoices(choices: TImportedChoices): TChoice[] {
  const entries = Object.entries(choices);
  // return entries.map(transformChoice);
  return entries.map(([index, value]) => ({ index, value }));
}

function transformRubyQuestion(
  rubyQuestion: TImportedRubyQueistion,
): TQuizItem {
  return {
    ...rubyQuestion,
    choices: transformChoices(rubyQuestion.choices),
  } as TQuizItem;
}

function transformRubyQuestions(
  rubyQuestions: TImportedRubyQueistion[],
): TQuizItem[] {
  return rubyQuestions.map(transformRubyQuestion);

  // const mapper = (choiceIndex) => {
  //   return { index: choiceIndex, value: choices[choiceIndex] };
  // };
}

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
  const currentQuizItem = useStore((state: TQuizState) => state.current);

  const [shuffledArray, setSuffledArray] = useState<TQuizItem[]>([]);
  useEffect(() => {
    console.log('Quiz useEffect');
    setSuffledArray(
      transformRubyQuestions(rq.ruby).sort(() => 0.5 - Math.random()),
    );
  }, []);

  if (shuffledArray.length === 0) {
    return null;
  }

  const items = shuffledArray.slice(0, 10);

  console.log('Quiz:', currentQuizItem, items[currentQuizItem]);
  const bg = DEBUG ? 'secondary.300' : null;
  return (
    <Box bg={bg} p="1" h="100%" display="flex" flexDirection="column">
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
