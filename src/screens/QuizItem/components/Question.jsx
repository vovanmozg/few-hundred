import * as React from 'react';
import { Text, View } from 'react-native';
import HTML from 'react-native-render-html';

class Question extends React.Component {
  render() {
//     const htmlContent = `
//     <h1>This HTML snippet is now rendered with native modules !</h1>
//     <h2>Enjoy a webview-free and blazing fast application</h2>
//     <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
//     <em style="textAlign: center;">Look at how happy this native cat is</em>
// `;


    return (<HTML html={this.props.text} />)
    // return (<View><Text>{this.props.text}</Text></View>);
  }
}

export default Question;
