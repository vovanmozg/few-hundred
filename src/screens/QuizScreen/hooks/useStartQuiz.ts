import { useEffect, useState } from 'react';
import rq from 'ruby-questions';
import { TQuizState, useStore } from 'app/store/quizState';
import {
  TImportedChoices,
  TImportedRubyQueistion,
} from 'app/types/tImportedQubyQuestions';
import { TChoice, TQuizItem } from 'app/types/tQuizItem';

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

export function useStartQuiz() {
  // const currentQuizItem = useStore((state: TQuizState) => state.current);
  // const setQuizItems = useStore((state: TQuizState) => state.setQuizItems);
  // const quizItems = useStore((state: TQuizState) => state.quizItems);
  const [quizItems, setQuizItems] = useStore((state: TQuizState) => [
    state.quizItems,
    state.setQuizItems,
  ]);
  // const [shuffledArray, setSuffledArray] = useState<TQuizItem[]>([]);
  useEffect(() => {
    setQuizItems(
      transformRubyQuestions(rq.ruby)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3),
    );
  }, []);

  return quizItems;
  // if (shuffledArray.length === 0) {
  //   return null;
  // }
  //
  // return shuffledArray.slice(0, 3);
}
