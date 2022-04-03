import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

//import {HomeScreen, ScanScreen} from '../screens';

import HomeScreen from '../screens/HomeScreen';
import ScanScreen from '../screens/ScanScreen';
import {COLORS, icons} from '../constants';
import Svg, {Path} from 'react-native-svg';
import {isIphoneX} from 'react-native-iphone-x-helper';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        headerShown="false"
        screenOptions={{headerTitle: 'Test', headerShown: false}}
      />
      <Tab.Screen
        name="ScanScreen"
        component={ScanScreen}
        headerShown="false"
      />
      <Tab.Screen name="User" component={HomeScreen} headerShown="false" />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
