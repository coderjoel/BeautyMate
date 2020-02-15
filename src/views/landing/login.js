import React from 'react';
import { Button } from 'native-base';
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Login({ navigation }) {
  return (
    <View>
      <Button onPress={() => navigation.dispatch(StackActions.replace('HomeTabs'))}><Text>Login</Text></Button>
      <Button onPress={() => navigation.navigate('Register')}><Text>Register</Text></Button>
    </View >
  );
}

export default Login;
