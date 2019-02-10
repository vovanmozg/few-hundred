import * as React from 'react';
import { Text, View } from 'react-native';

class Choise extends React.Component {
  render() {
    return(<View><Text>{this.props.text}</Text></View>);
  }
}

export default Choise;