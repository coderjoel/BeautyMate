import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { List, Card, CardItem } from 'native-base';

import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

function Cart({ navigation }) {

    async function getItems() {
        let temp = await AsyncStorage.getItem('cart');
        temp = JSON.parse(temp)
        console.log("I should be array", temp, typeof (temp));
        setItems(temp);
    }

    useEffect(a => {
        getItems();
    }, []);

    const [items, setItems] = useState([]);



    return (
        < View >
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
                            <View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                    <Text>{rowData.name}</Text>
                                    <Text>Price: {rowData.price}</Text>
                                </View>
                                <Text>{rowData.description}</Text>
                            </View>
                        </CardItem>
                    </Card>
                )}
            />
            <Button style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 0, paddingTop: 0 }}
                title="Check out"
                onPress={() => navigation.navigate('OrderDetail')}>
            </Button>
        </View >
    );
}

export default Cart;