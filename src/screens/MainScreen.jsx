import * as React from 'react';
import { Image, SafeAreaView } from 'react-native';
import {
  Button, Text, Container, Content,
} from 'native-base';
import ruby from '../assets/img/ruby.png';

class MainScreen extends React.PureComponent {
  render() {
    const { props } = this;
    const onPress = () => props.navigation.navigate('Quiz');

    return (
      <Container style={{}}>

        <Content padder style={{}} contentContainerStyle={{ flex: 1 }}>

          <SafeAreaView style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', }}>

            <Image
              source={ruby}
              style={{ width: 117, height: 92, justifyContent: 'center', }}
            />
            <Button style={{ alignSelf: 'center', marginTop: 100 }} onPress={onPress}><Text>Play!</Text></Button>
          </SafeAreaView>
        </Content>
      </Container>
    );
  }
}

export default MainScreen;
