import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import { HomeScreen } from 'app/screens/HomeScreen';
import { QuizScreen } from 'app/screens/QuizScreen';
import { ResultQuizScreen } from 'app/screens/ResultQuizScreen';
import { RootStackParamList } from 'app/types/app';

const Stack = createNativeStackNavigator<RootStackParamList>();

const commonOptions = {
  headerStyle: {
    backgroundColor: '#e0f2fe',
  },
};

export function AppWithNavigation() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={commonOptions}
          />
          <Stack.Screen
            name="Quiz"
            component={QuizScreen}
            options={commonOptions}
          />
          <Stack.Screen
            name="ResultQuiz"
            component={ResultQuizScreen}
            options={commonOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
