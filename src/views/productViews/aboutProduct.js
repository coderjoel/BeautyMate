import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native';
import { Button, Header, Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
class AboutProduct extends Component {

  prodcut = {
    name: "Product Name",
    id: 1,
    Img: "ProductImg.png",
    desc: "This is the desc of the product g g g .......... This is the desc of the product g g g........... This is the desc of the product g g g...........",
    price: 30.0
  }


  order() {
    const navigation = useNavigation();
    navigation.navigate('Register');
  }

  render() {
    return (
      <View>

        <Header
          centerComponent={{ text: this.prodcut.name }} style={styles.Header}
        />
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={{ uri: this.prodcut.Img }}
          />
        </View>

        <View style={{ alignItems: 'center', margin: 15 }}>
          <Text style={styles.price}>Price : {this.prodcut.price}$</Text>
        </View>

        <View style={{ alignItems: 'center', margin: 15 }}>
          <Text style={styles.descprition}>{this.prodcut.desc}</Text>
        </View>

        <Button style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 0, paddingTop: 0 }}
          title="ORDER"
          onPress={this.order}>
        </Button>

      </View>
    );
  }
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