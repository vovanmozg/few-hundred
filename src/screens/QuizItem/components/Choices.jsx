import * as React from 'react';
import { Text, View } from 'react-native';
import Choice from './Choice';

class Choices extends React.Component {
  render() {
    const { choices } = this.props;


    return (
      <View style={{ backgroundColor: '#993' }}>

          {
            Object.entries(choices).map((choice) => {
              console.warn(choice)
              return (<Choice>{choice}</Choice>);
            })
          }

      </View>
    );
  }
}

export default Choices;
