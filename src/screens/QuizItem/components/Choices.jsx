import * as React from 'react';
import { List } from 'native-base';
import PropTypes from 'prop-types';
import { choiceType } from '../../../types';
import Choice from './Choice';

const randSort = () => Math.random() > 0.5;

const Choices = ({ choices }) => (
  <List>
    {
      choices.sort(randSort).map((choice) => {
        choice.key = 'key' + Math.random();
        return (<Choice>{choice}</Choice>);
      })
    }
  </List>
);

Choices.propTypes = {
  choices: PropTypes.arrayOf(choiceType).isRequired,
};

export default Choices;
