import * as React from 'react';
// import { Button } from 'react-native';
import { Button } from 'react-native-material-ui';

class Next extends React.Component {
  render() {
    const onPress = () => {};
    return(<Button onPress={onPress} raised primary text="Next" />);
  }
}

export default Next;