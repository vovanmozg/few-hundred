import PropTypes from 'prop-types';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#707',
    backgroundColor: '#f00',
  },
});

function Choise({ text }) {
  return (
    <View style={style.container}>
      <Text>{text}</Text>
    </View>
  );
}

Choise.propTypes = {
  text: PropTypes.string.isRequired,
};


export default Choise;
