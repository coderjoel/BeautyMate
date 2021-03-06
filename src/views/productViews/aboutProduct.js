import React, { useState, useEffect, Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native';
import { Button, Header, Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

function AboutProduct({ navigation, route }) {


  // const data = navigation.getParam('item', 'no info');
  const data = route.params.item;


  const [name, setName] = useState(data.name);
  const [id, setId] = useState(data.id);
  const [img, setImg] = useState(data.link);
  const [description, setdescription] = useState(data.description);
  const [price, setPrice] = useState(data.price);

  // useEffect(a => {
  //     console.log(res.data);
  //     setName(res.data);
  // }, []);

  async function addToCart() {
    //console.log('Order called', value);
    try {
      let value = await AsyncStorage.getItem('cart');
      console.log("I am value", value);
      if (value != null) {
        value = JSON.parse(value);
        value.push(data);
        AsyncStorage.setItem('cart', JSON.stringify(value));

      }
      else {
        let newAr = [data];
        AsyncStorage.setItem('cart', JSON.stringify(newAr));
        // do something else
      }
      navigation.navigate('Cart');
    }
    catch (error) {
      console.log('I am Error', error);
    }

  }


  // async function checkOut() {
  //   //console.log('Order called', value);
  //   try {
  //     let value = await AsyncStorage.getItem('cart');
  //     console.log("I am value", value);
  //     if (value != null) {
  //       value = JSON.parse(value);
  //       value.push(data);
  //       AsyncStorage.setItem('cart', JSON.stringify(value));

  //     }
  //     else {
  //       let newAr = [data];
  //       AsyncStorage.setItem('cart', JSON.stringify(newAr));
  //       // do something else
  //     }
  //     navigation.navigate('OrderDetail')
  //   }
  //   catch (error) {
  //     console.log('I am Error', error);
  //   }

  // }


  return (
    <View>

      <Header
        centerComponent={{ text: name }} style={styles.Header}
      />
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{ uri: img }}
        />
      </View>

      <View style={{ alignItems: 'center', margin: 15 }}>
        <Text style={styles.price}>Price : {price}$</Text>
      </View>

      <View style={{ alignItems: 'center', margin: 15 }}>
        <Text style={styles.description}>{description}</Text>
      </View>

      <Button style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 0, paddingTop: 0 }}
        title="ORDER"
        onPress={() => addToCart()}>
      </Button>

      <Button style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 0, paddingTop: 0 }}
        title="ADD TO CART"
        onPress={() => addToCart()}>
      </Button>

    </View>
  );
}

/*function Cart() {
  return (
    <View>
      <Text>HI</Text>
    </View>
  );
}*/


export default AboutProduct;

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    paddingLeft: 5,
    paddingRight: 5,
    zIndex: 1000,
    backgroundColor: '#fdfdfd'
  },
  descprition: {
    fontSize: 16,
    paddingLeft: 5,
    paddingRight: 5,
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