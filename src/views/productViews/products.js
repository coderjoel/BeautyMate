import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, ListView } from 'react-native';
import { Button, List, ListItem, Card, CardItem, } from 'native-base';

function Products({ navigation }) {



  //call api to set objects
  //temp code
  var obj1 = {
    Name: "Abc",
    Price: "123",
    Description: "ADBAHSdb kjasdn askjdsandjlasn djknasjk ndjkasnd jknaskdnkasndknasdasdaskjdjasdknasd.sadjasdkasjdioijasldaslkdla."
  }
  var obj2 = {
    Name: "Dbc",
    Price: "256",
    Description: "ADBAHSdb kjasdn askjdsandjlasn djknasjk ndjkasnd jknaskdnkasndknasdasdaskjdjasdknasd.sadjasdkasjdioijasldaslkdla."
  }
  var listFromApi = [
    obj1, obj2, obj1, obj2
  ];
  ///
  const [items, setItems] = useState(listFromApi);


  // useEffect((a) => {
  //   console.log("this is a", items);
  //   // setItems(listFromApi);
  // }, []);


  return (
    <View>

      <List
        dataArray={items}
        renderRow={(rowData) => (
          <Card style={{ flexDirection: 'row' }} >
            <CardItem style={{ width: "50%" }} button onPress={() => navigation.navigate("About")}>
              <View>
                {/* Image goes here */}
              </View>
            </CardItem>
            <CardItem style={{ width: "50%" }} button onPress={() => navigation.navigate("About")}>
              <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text>{rowData.Name}</Text>
                  <Text>Price: {rowData.Price}</Text>
                </View>
                <Text>{rowData.Description}</Text>
              </View>
            </CardItem>
          </Card>
        )
        }
      />
    </View>
  );
}

export default Products;