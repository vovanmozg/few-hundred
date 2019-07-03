import * as React from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import { Button, Text, Container, Content, Footer, Header } from 'native-base';
import QuizItem from "./QuizScreen";


class MainScreen extends React.PureComponent {
  render() {
    const onPress = () => this.props.navigation.navigate('Quiz');

    return (
      <Container style={{}} >


      <Content padder style={{}} contentContainerStyle={{  flex: 1 }}>

        <SafeAreaView style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', }}>

            <Image
              source={require('../assets/img/ruby.png')}
              style={{width: 117, height: 92,justifyContent: 'center',}}
            />
            <Button style={{ alignSelf: 'center', marginTop: 20 }} onPress={onPress}><Text>Play!</Text></Button>





        </SafeAreaView>
      </Content>
      <Footer>

      </Footer>
    </Container>
    );
  }
}

export default MainScreen;
