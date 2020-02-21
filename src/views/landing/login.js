import React, {Component} from 'react';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Button,
  Keyboard,
  Image,
} from 'react-native';

function Login({navigation}) {
  const Divider = props => {
    return (
      <View {...props}>
        <View style={styles.line}></View>
        <Text style={styles.TextOR}> OR </Text>
        <View style={styles.line}></View>
      </View>
    );
  };
  return (
    //Solution for not dismiss Keyboard when click outside of TextInput
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.up}>
          <Text style={styles.title}>Login page</Text>
        </View>
        <View style={styles.down}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              textContentType="emailAddress"
              keyboardType="email-address"
              placeholder="Enter your email"></TextInput>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              secureTextEntry={true}></TextInput>
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('HomeTabs')}>
            <Text style={styles.loginButtonTitle}>LOGIN</Text>
          </TouchableOpacity>
          <Divider style={styles.divider}></Divider>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.loginButtonTitle}>Register</Text>
          </TouchableOpacity>

          <Image
            source={require('../images/BeautyMate_v1.png')}
            style={styles.logo}></Image>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'rgb(234, 195, 176)',
  },
  up: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 30,
  },
  down: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'rgb(234, 195, 176)',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    width: 400,
    fontSize: 25,
  },
  textInputContainer: {
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  textInput: {
    width: 280,
    height: 45,
  },
  loginButton: {
    width: 250,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(221,97,97)',
  },
  loginButtonTitle: {
    fontSize: 18,
    color: 'white',
  },
  facebookButton: {
    width: 250,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#365899',
  },
  line: {
    height: 1,
    flex: 2,
    backgroundColor: 'black',
  },
  textOR: {
    flex: 1,
    textAlign: 'center',
  },
  divider: {
    flexDirection: 'row',
    height: 40,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 220,
    height: 220,
    borderRadius: 110,
    marginTop: 50,
  },
});
