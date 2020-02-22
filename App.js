/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './src/views/landing/login';
import Register from './src/views/landing/Registration';
import Products from './src/views/productViews/products';
import Profile from './src/views/profile/profile';
import AboutProduct from './src/views/productViews/aboutProduct';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const API = 'http://beauty-mate-api.azurewebsites.net/api';

function HomeTabs() {
  //whatever comes before render

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Products"
        component={Products}
        options={{title: 'Products'}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{title: 'Profile'}}
      />
    </Tab.Navigator>
  );
}
function App() {
  global.API = API;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{title: 'Register'}}
        />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="About" component={AboutProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
