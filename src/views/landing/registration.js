import React, { useState, useEffect, Component } from 'react';
import {
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import axios from 'axios';

function Register({ navigation }) {
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhoneno] = useState('');
  function signupPress() {
    console.log('I am called - sign up');
    axios
      .post(global.API + '/Account/RegisterAccount', {
        FirstName: firstname,
        LastName: lastname,
        Email: email,
        Password: password,
        ConfirmPassword: password,
        UserName: username,
        PhoneNumber: phoneno,
        Enable2FA: true,
      })
      .then(res => {
        console.log(res);
        navigation.navigate('Login');
      })
      .catch(function (error) {
        console.log(error);
        navigation.navigate('Register');
      });
  }
  // {
  //   "FirstName": "string",
  //   "LastName": "string",
  //   "Email": "string",
  //   "Password": "string",
  //   "ConfirmPassword": "string",
  //   "UserName": "string",
  //   "PhoneNumber": "string",
  //   "Enable2FA": true
  // }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.up}>
          <Text style={styles.title}>Registration page</Text>
        </View>
        <View style={styles.down}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              autoCapitalize="none"
              placeholderTextColor=""
              onChangeText={text => setUsername(text)}></TextInput>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Firstname"
              autoCapitalize="none"
              placeholderTextColor=""
              onChangeText={text => setFirstname(text)}></TextInput>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Lastname"
              autoCapitalize="none"
              placeholderTextColor=""
              onChangeText={text => setLastname(text)}></TextInput>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize="none"
              placeholderTextColor=""
              onChangeText={text => setPassword(text)}></TextInput>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor=""
              onChangeText={text => setEmail(text)}></TextInput>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Phone Number"
              autoCapitalize="none"
              placeholderTextColor=""
              onChangeText={text => setPhoneno(text)}></TextInput>
          </View>
          <TouchableOpacity style={styles.signupButton} onPress={signupPress}>
            <Text style={styles.signupButtonTitle}>SIGN UP</Text>
          </TouchableOpacity>
          <Image
            source={require('../images/BeautyMate_v1.png')}
            style={styles.logo}></Image>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Register;

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
  signupButton: {
    width: 100,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#365899',
    marginTop: 0,
  },
  signupButtonTitle: {
    fontSize: 18,
    color: 'white',
  },
  logo: {
    width: 220,
    height: 220,
    borderRadius: 110,
    marginTop: 20,
  },
});
