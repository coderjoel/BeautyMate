import React, { useState, useEffect } from 'react';
import {
    View,
    Text
} from 'react-native';
import { Button, List, ListItem, Card, CardItem } from 'native-base';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

function Products() {
    const [items, setItems] = useState([]);

    //call api to set objects
    useEffect(a => {
        getItems();
    }, []);

    async function getItems() {
        console.log('this is a', global.API + '/Order/ViewTransactionHistory');
        // setItems(listFromApi);
        const value = await AsyncStorage.getItem('@storage_Key')

        if (value != null) {
            var Concat = "Bearer " + value;
            console.log('this is a 2 ', value);
            axios.get(global.API + '/Order/ViewTransactionHistory', { headers: { Authorization: Concat } }).then(res => {
                console.log(res.data, typeof (res.data));
                setItems(res.data);
            });
        }
    }

    return (
        <View>
            <List
                dataArray={items}
                renderRow={rowData => (
                    <Card style={{ flexDirection: 'row' }}>
                        {/* <CardItem
                            style={{ width: '30%' }}
                        >
                            <View></View>
                        </CardItem> */}
                        <CardItem
                            style={{ width: '100%' }}>
                            <View style={{
                                width: "100%"
                            }}>
                                <Text>{rowData.productOrders}</Text>
                                <Text>Date: {rowData.purchaseDatetime}</Text>
                                <Text >Transaction id: {rowData.id}</Text>
                            </View>
                        </CardItem>
                    </Card>
                )}
            />
        </View>
    );
}

export default Products;