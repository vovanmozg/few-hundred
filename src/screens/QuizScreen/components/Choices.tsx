import * as React from 'react';
import { useEffect, useState } from 'react';
import { Box, Radio } from 'native-base';
import { DEBUG } from 'app/contants';
import { TQuizState, useStore } from 'app/store/quizState';
import type { TChoice, TQuizItem } from 'app/types/tQuizItem';

import { Choice } from './Choice';

type TProps = {
  quizItem: TQuizItem;
};

const randSort = () => Math.random() - 0.5;

export function Choices({ quizItem }: TProps) {
  const [choices, setChoices] = useState<TChoice[]>([]);
  const [value, setValue] = useState(null); // value={value}

  useEffect(() => {
    console.log('useEffect');
    const c = quizItem.choices;
    setChoices(c.sort(randSort));
  }, [quizItem.choices]);

  const bg = DEBUG ? 'blue.400' : null;
  return (
    <Box bg={bg}>
      <Radio.Group
        name="myRadioGroup"
        accessibilityLabel="favorite number"
        // onChange={onSelectAnswer}
      >
        {choices.map((choice: TChoice) => {
          return (
            <Choice key={choice.index} quizItem={quizItem} answer={choice} />
          );
        })}
      </Radio.Group>
    </Box>
  );
}
