import * as React from 'react';
import { List } from 'native-base';
import type { TChoice, TQuizItem } from 'app/types/tQuizItem';

import { Choice } from './Choice';

type TProps = {
  quizItem: TQuizItem;
};

const randSort = () => Math.random() > 0.5;

export function Choices({ quizItem }: TProps) {
  return (
    <List>
      {quizItem.choices.sort(randSort).map((choice: TChoice) => {
        return (
          <Choice key={choice.index} quizItem={quizItem} answer={choice} />
        );
      })}
    </List>
  );
}
