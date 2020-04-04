import React, { useState, useEffect } from 'react';
import {
  View,
  Text
} from 'react-native';
import { Button, List, ListItem, Card, CardItem } from 'native-base';
import axios from 'axios';

function Products({ navigation }) {
  const [items, setItems] = useState([]);

  //call api to set objects
  useEffect(a => {
    console.log('this is a', global.API + '/Product/GetProducts');
    // setItems(listFromApi);

    axios.get(global.API + '/Product/GetProducts').then(res => {
      console.log(res.data, typeof (res.data));
      setItems(res.data);
    });
  }, []);

  return (
    <View>
      <List
        dataArray={items}
        renderRow={rowData => (
          <Card style={{ flexDirection: 'row' }}>
            <CardItem
              style={{ width: '30%' }}
              button
              onPress={() => navigation.navigate('About', {
                item: rowData
              })}>
              <View>{/* Image goes here */}</View>
            </CardItem>
            <CardItem
              style={{ width: '70%' }}
              button
              onPress={() => navigation.navigate('About', {
                item: rowData
              })}>
              <View style={{
                width: "100%"
              }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: "100%"
                  }}>
                  <Text>{rowData.name}</Text>
                  <Text style={{
                    position: "absolute",
                    right: 0
                  }}>Price: {rowData.price}</Text>
                </View>
                <Text>{rowData.description}</Text>
              </View>
            </CardItem>
          </Card>
        )}
      />
    </View>
  );
}

export default Products;
