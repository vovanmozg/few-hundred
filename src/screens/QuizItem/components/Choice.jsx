import PropTypes from 'prop-types';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem } from 'react-native-material-ui';

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#707',
    backgroundColor: '#f00',
  },
});

function Choise({ children }) {
  return (
    <View style={style.container}>
      <ListItem>
      <Text>{children}</Text>
      </ListItem>
    </View>
  );
}

Choise.propTypes = {
  text: PropTypes.string.isRequired,
};


export default Choise;
