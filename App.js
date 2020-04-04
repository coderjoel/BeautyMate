/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/views/landing/login';
import Register from './src/views/landing/registration';
import Products from './src/views/productViews/products';
import Profile from './src/views/profile/profile';
import Cart from './src/views/cart/cart';
import AboutProduct from './src/views/productViews/aboutProduct';
import OrderDetail from './src/views/productViews/orderDetail';
import FApage from './src/views/landing/FApage'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const API = 'http://beauty-mate-backend.azurewebsites.net/api';
global.Token; //only god will save my soul

function HomeTabs() {
  //whatever comes before render

  return (
    <Tab.Navigator>

      <Tab.Screen
        name="Products"
        component={Products}
        options={{ title: 'Products' }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{ title: 'Cart' }}
      />
      <Tab.Screen
        name="Transactions"
        component={Profile}
        options={{ title: 'Transactions' }}
      />

    </Tab.Navigator>
  );
}
function App() {
  global.API = API;
  return (
    //<OrderDetail />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: 'Register' }}
        />
        <Stack.Screen
          name="FApage"
          component={FApage}
          options={{ title: 'FApage' }}
        />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="About" component={AboutProduct} />
        <Stack.Screen name="OrderDetail" component={OrderDetail} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
