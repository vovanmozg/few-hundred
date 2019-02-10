import * as React from 'react';
import { Text, View } from 'react-native';
import HTML from 'react-native-render-html';

class Question extends React.Component {
  render() {
    return (<HTML html={this.props.text} />)
    // return (<View><Text>{this.props.text}</Text></View>);
  }
}

export default Question;