import * as React from 'react';
import { StyleSheet } from 'react-native'; // add TouchableHighlight
import { ListItem, Text } from 'native-base';
import { choiceType } from '../../../types';

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'red',
    // alignSelf: 'stretch',
    width: '95%',
  },
});

function Choise({ children }) {
  const onPressButton = () => {
    //console.warn(children);
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

export default Choise;
