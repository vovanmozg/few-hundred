import React from 'react';
import { HeaderBackButton } from '@react-navigation/elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import { HomeScreen } from 'app/screens/HomeScreen';
import { ProgressMapScreen } from 'app/screens/ProgressMapScreen';
import { QuizScreen } from 'app/screens/QuizScreen';
import { ResultQuizScreen } from 'app/screens/ResultQuizScreen';
import { RootStackParamList } from 'app/types/app';

const Stack = createNativeStackNavigator<RootStackParamList>();

const commonOptions = {
  headerStyle: {
    backgroundColor: '#e0f2fe', // info.100
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
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Quiz"
            component={QuizScreen}
            options={commonOptions}
          />
          <Stack.Screen
            name="ResultQuiz"
            component={ResultQuizScreen}
            options={({ navigation }) => ({
              ...commonOptions,
              headerLeft: () => (
                <HeaderBackButton
                  onPress={() => {
                    navigation.navigate('Home');
                  }}
                />
              ),
            })}
          />
          <Stack.Screen
            name="ProgressMap"
            component={ProgressMapScreen}
            options={commonOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
