import React from 'react';
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

// function Registration() {
//   return (
//     <View>

//     </View>
//   );
// }

export default class Register extends React.Component {
  state = {
    username: '',
    password: '',
    email: '',
    phone_number: '',
  };
  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };
  signUp = async () => {
    const {username, password, email, phone_number} = this.state;
    try {
      // here place your signup logic
      console.log('user successfully signed up!: ', success);
    } catch (err) {
      console.log('error signing up: ', err);
    }
  };

  render() {
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
                onChangeText={val => this.onChangeText('username', val)}
              />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                secureTextEntry={true}
                autoCapitalize="none"
                placeholderTextColor=""
                onChangeText={val => this.onChangeText('password', val)}
              />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Email"
                textContentType="emailAddress"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor=""
                onChangeText={val => this.onChangeText('email', val)}
              />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Phone Number"
                autoCapitalize="none"
                placeholderTextColor=""
                onChangeText={val => this.onChangeText('phone_number', val)}
              />
            </View>
            <TouchableOpacity style={styles.signupButton}>
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
}

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
