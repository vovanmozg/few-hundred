import React from 'react';
import { HeaderBackButton } from '@react-navigation/elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton, useColorModeValue, useToken } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HomeScreen } from 'app/screens/HomeScreen';
import { ProgressMapScreen } from 'app/screens/ProgressMapScreen';
import { QuizScreen } from 'app/screens/QuizScreen';
import { ResultQuizScreen } from 'app/screens/ResultQuizScreen';
import { SettingsScreen } from 'app/screens/SettingsScreen';
import { headerIconStyle, headerStyle } from 'app/theme/theme';
import type { RootStackParamList } from 'app/types/app';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppWithNavigation() {
  const commonOptions = {
    headerStyle: {
      backgroundColor: useToken(
        'colors',
        useColorModeValue(
          headerStyle.backgroundColor[0],
          headerStyle.backgroundColor[1],
        ),
      ),
    },
    headerTintColor: useToken(
      'colors',
      useColorModeValue(headerStyle.color[0], headerStyle.color[1]),
    ),
  };

  const resultQuizHeaderStyle = {
    tintColor: useToken(
      'colors',
      useColorModeValue(headerStyle.color[0], headerStyle.color[1]),
    ),
  };

  const iconColor = useToken(
    'colors',
    useColorModeValue(headerIconStyle.color[0], headerIconStyle.color[1]),
  );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerTitle: () => null,
            headerTransparent: true,
            // eslint-disable-next-line react/no-unstable-nested-components
            headerRight: () => (
              <IconButton
                variant="ghost"
                icon={<Icon name="settings" size={30} color={iconColor} />}
                onPress={() => {
                  navigation.navigate('Settings');
                }}
              />
            ),
          })}
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
            // eslint-disable-next-line react/no-unstable-nested-components
            headerLeft: () => (
              <HeaderBackButton
                tintColor={resultQuizHeaderStyle.tintColor}
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
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={commonOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
