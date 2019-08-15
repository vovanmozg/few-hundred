/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainScreen from '../../screens/MainScreen';
import QuizScreen from '../../screens/QuizScreen';

const AppNavigator = createStackNavigator({
  Home: MainScreen,
  Quiz: QuizScreen,
},
{
  initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);
