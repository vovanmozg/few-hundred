import * as React from 'react';
import { StyleSheet } from 'react-native'; // add TouchableHighlight
import { ListItem, Text } from 'native-base';
import { choiceType } from '../../../types';
import { connect } from 'react-redux';

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'red',
    // alignSelf: 'stretch',
    width: '95%',
  },
});

function Choise({ children, quizItemId, answer }) {
  const onPressButton = () => {
    answer(quizItemId, children);
  };

  return (
    <ListItem onPress={onPressButton} style={style.container}>
      <Text>{children.value}</Text>
    </ListItem>

  );
}

Choise.propTypes = {
  children: choiceType.isRequired,
};

const mapDispatchToProps = dispatch => ({
  answer: (quizItemId, choice) => dispatch({ type: 'ANSWER', quizItemId, choice }),
});

export default connect(null, mapDispatchToProps)(Choise);
