import React, { Component, useState, useEffect, } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import { Button, Header, Image } from 'react-native-elements';
import { useForm, FormContext } from 'react-hook-form';
import axios from 'axios';

function OrderDetail({ navigation, route }) {

  const obj = route.params.item;

  const [firstLastName, setFirstLastName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');


  function orderPress() {
    console.log('I am called');
    axios
      .post(global.API + '/Order/Purchase', {
        Products: [{
          ProductId: obj.id,
          Quantity: 1
        }
        ],
        Email: emailAddress
      })
      .then(res => {
        console.log(res.data);
        navigation.navigate('HomeTabs');
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (

    <KeyboardAvoidingView style={styles.forMainView} behavior="padding" enabled>
      <Text style={styles.screenTitle}>Delivery Information</Text>

      <Text style={styles.descprition}>First and Last Name</Text>

      <TextInput
        style={styles.textInput}
        placeholder="John Smith"
        blurOnSubmit
        onChangeText={text => setfirstLastName(text)}
        value={firstLastName}
      />



      <Text style={styles.descprition}>Street Address</Text>
      <TextInput
        style={styles.textInput}
        placeholder="10 John Street"
        blurOnSubmit
        onChangeText={text => setStreetAddress(text)}
        value={streetAddress}
      />


      <View style={styles.nested}>

        <Text style={styles.descprition}>City</Text>
        <TextInput
          style={styles.InnerTextInput}
          placeholder="Toronto"
          blurOnSubmit
          onChangeText={text => setCity(text)}
          value={city}
        />
        <Text style={{ marginLeft: 50 }}>
        </Text>

        <Text style={styles.InnerDescprition}>Postal Code</Text>
        <TextInput
          style={styles.InnerTextInput}
          placeholder="A1A1A1"
          blurOnSubmit
          onChangeText={text => setPostalCode(text)}
          value={postalCode}
        />
      </View>
      <View style={styles.nested}>

        <Text style={styles.InnerDescprition}>Province</Text>
        <TextInput
          style={styles.InnerTextInput}
          placeholder="ON"
          blurOnSubmit
          onChangeText={text => setProvince(text)}
          value={province}
        />

        <Text style={{ marginLeft: 50 }}>
        </Text>

        <Text style={styles.InnerDescprition}>Phone#</Text>
        <TextInput
          style={styles.InnerTextInput}
          placeholder="3211233212"
          blurOnSubmit
          onChangeText={text => setPhoneNumber(text)}
          value={phoneNumber}
        />
      </View>

      <Text style={styles.descprition}>Email </Text>
      <TextInput
        style={styles.textInput}
        placeholder="10John@gmail.com"
        blurOnSubmit
        onChangeText={text => setEmailAddress(text)}
        value={emailAddress}
      />

      <Button style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 0, paddingTop: 0 }}
        title="PLACE ORDER"
        onPress={orderPress}>
      </Button>

    </KeyboardAvoidingView>
  );

}

export default OrderDetail;

const styles = {

  nested: {
    width: 300,
    flexDirection: 'row'
  },
  InnerDescprition: {
    fontSize: 16,
    marginBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: 'auto',
    zIndex: 1000
  },
  InnerTextInput: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    marginBottom: 10,
    padding: 5,
    fontSize: 18,
    color: '#3F4EA5',
    marginLeft: 10
  },
  forMainView: {
    marginLeft: 5,
    marginTop: 5,
    flex: 1,
    backgroundColor: '#fff',
    width: 400
  },

  container: {
    flex: 1,
    flexDirection: 'row',
  },
  container2: {

  },

  textInputWrapper: {
    flex: 1,
    height: 50,
    borderColor: '#FFF',
    borderWidth: 1,
    paddingBottom: 10
  },

  textInput: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    marginBottom: 20,
    padding: 5,
    fontSize: 18,
    color: '#3F4EA5',
  },
  screenTitle: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
    marginBottom: 10,
    color: '#000',
  },

  descprition: {
    fontSize: 16,
    marginBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'center',
    zIndex: 1000
  },
  Header: {
    fontSize: 16,
    fontFamily: 'Cochin'
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#7f8c8d',
    position: 'absolute',
    top: '52%'
  },
  border: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(253, 253, 253, 0.2)'
  },
  logo: {
    width: 300,
    height: 400
  }
}

/**
function OrderDetail() {
return (
<View>
      <Text>HI</Text>
    </View>
    );
  }
  */
