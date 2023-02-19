import * as React from 'react';
import { Center } from 'native-base';
import rq from 'ruby-questions';
import { TQuizState, useStore } from 'app/store/quizState';
import {
  TImportedChoice,
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

function transformChoices(choices: TImportedChoice): TChoice[] {
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
  const cart = useStore(state => state.cart);
  const currentQuizItem = useStore((state: TQuizState) => state.current);

  console.log(cart);
  const shuffledArray = transformRubyQuestions(rq.ruby).sort(
    () => 0.5 - Math.random(),
  );

  const items = shuffledArray.slice(0, 3);

  return (
    <Center>
      <Question text={items[currentQuizItem].question} />
      <QuizItem quizItem={items[currentQuizItem]} />
      <Next />
    </Center>
  );
}
