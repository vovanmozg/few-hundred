import * as React from 'react';
import { useEffect, useState } from 'react';
import { Box, Radio } from 'native-base';
import { bg } from 'app/debug';
import type { TChoice } from 'app/types/TQuizItem';

import { useCurrentQuizItem } from '../hooks/useCurrentQuizItem';
import { Choice } from './Choice';

const randSort = () => Math.random() - 0.5;

export function Choices() {
  const [choices, setChoices] = useState<TChoice[]>([]);
  const { currentQuizItem } = useCurrentQuizItem();
  useEffect(() => {
    if (!currentQuizItem) {
      return;
    }

    setChoices(currentQuizItem.choices.sort(randSort));
  }, [currentQuizItem?.choices]);

  if (!currentQuizItem) {
    return null;
  }

  return (
    <Box bg={bg('blue.400')}>
      <Radio.Group name="choices" accessibilityLabel="choices">
        {choices.map((choice: TChoice) => {
          return (
            <Choice
              key={choice.index}
              quizItem={currentQuizItem}
              choice={choice}
            />
          );
        })}
      </Radio.Group>
    </Box>
  );
}
