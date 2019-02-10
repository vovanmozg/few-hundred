import * as React from 'react';
import { Text, View } from 'react-native';
import Choice from './Choice';

class Choices extends React.Component {
  render() {
    console.warn(this.props)
    return (
      <View>
        {
          // this.props.choices.map((choice) => {
          //   return (<Choice text={ choice }></Choice>)
          // })
        }
      </View>
    );

  }
}

export default Choices;