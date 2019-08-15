import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Text } from 'native-base';
//import mapDispatchToProps from "react-redux/es/connect/mapDispatchToProps";


class Next extends React.Component {
  render() {
    const onPress = () => {
      console.warn(1);
      //this.props.next();
    };

    return(<Button onPress={onPress} ><Text>Next</Text></Button>);
  }
}

const mapDispatchToProps = dispatch => ({
  next: () => dispatch({ type: 'NEXT_QUESTION'}),
});

export default connect(null, mapDispatchToProps)(Next);
