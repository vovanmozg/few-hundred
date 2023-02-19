import * as React from 'react';
import { Card, CardItem } from 'native-base';
import rq from 'ruby-questions';
import { TQuizState, useStore } from 'app/store/quizState';
import { TQuizItem } from 'app/types/tQuizItem';

import { Choices } from './Choices';

type TProps = {
  quizItem: TQuizItem;
};
// function transformChoices(choices) {
//   // const mapper = (choiceIndex) => {
//   //   return { index: choiceIndex, value: choices[choiceIndex] };
//   // };
//
//   return Object.keys(choices).map(choiceIndex => ({
//     index: choiceIndex,
//     value: choices[choiceIndex],
//   }));
// }

export function QuizItem({ quizItem }: TProps) {
  return <Choices quizItem={quizItem} />;
}
