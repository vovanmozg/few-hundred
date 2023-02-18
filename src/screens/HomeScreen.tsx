import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ruby from 'app/assets/img/ruby.png';
import type { RootStackParamList } from 'app/modules/app/AppWithNavigation';
import { Button, Center, Image } from 'native-base';
import React from 'react';

export function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPress = () => {
    navigation.navigate('Quiz');
  };

  return (
    <Center h="100%" w="100%" alignSelf="center">
      <Image alt="123" mb="10" source={ruby} width={117} height={92} />

      <Button onPress={onPress}>Play</Button>
    </Center>
  );
}
