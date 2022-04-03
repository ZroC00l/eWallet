import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
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
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'transparent',
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        screenOptions={{headerShown: false}}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.more}
              resizeMode="contain"
              style={{width: 20, height: 20}}
            />
          ),
        }}
        headerShown={false}
      />
      <Tab.Screen
        name="ScanScreen"
        component={ScanScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.scan}
              resizeMode="contain"
              style={{width: 20, height: 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.user}
              resizeMode="contain"
              style={{width: 20, height: 20}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabBottomStyle: {},
});
