import * as React from 'react';
import { useEffect, useState } from 'react';
import { Box, Radio } from 'native-base';
import { bg } from 'app/debug';
import type { TChoice, TQuizItem } from 'app/types/TQuizItem';

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

  return (
    <Box bg={bg('blue.400')}>
      <Radio.Group
        name="myRadioGroup"
        accessibilityLabel="favorite number"
        // onChange={onSelectAnswer}
      >
        {choices.map((choice: TChoice) => {
          return (
            <Choice key={choice.index} quizItem={quizItem} choice={choice} />
          );
        })}
      </Radio.Group>
    </Box>
  );
}
