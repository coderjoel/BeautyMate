import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native';
import { Button } from 'native-base';

function Products({ navigation }) {

  const [items, setItems] = useState(0);

  useEffect((a) => {
    console.log("this is a", items);
  }, []);


  return (
    <View>
      <Text>HI</Text>
      <Button onPress={() => navigation.navigate("OrderDetail")}><Text>This button will lead you to about page</Text></Button>
    </View>
  );
}

export default Products;