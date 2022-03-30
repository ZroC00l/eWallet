/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import SignUpScreen from './screens/SignUpScreen';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const StackNav = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <StackNav.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={SignUpScreen}>
        <StackNav.Screen name="SignUpScreen" component={SignUpScreen} />
      </StackNav.Navigator>
    </NavigationContainer>
  );
};

export default App;
