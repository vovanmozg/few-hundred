import PropTypes from 'prop-types';

export const choiceType = PropTypes.shape({
  index: PropTypes.string,
  value: PropTypes.string,
});

export const quizItem = PropTypes.shape({
  question: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  choices: PropTypes.arrayOf(choiceType),
  answer: PropTypes.number,
  tags: PropTypes.arrayOf(PropTypes.string),
  explanation: PropTypes.string,
});
