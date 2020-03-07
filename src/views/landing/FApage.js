import React, { useState, useEffect, Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    Button,
    Keyboard,
    Image,
} from 'react-native';
import axios from 'axios';

function FApage({ navigation, route }) {
    console.log('I am here');
    const [password, setPassword] = useState(route.params.password);
    const [login, setLogin] = useState(route.params.login);
    const [code, setCode] = useState('');


    function loginPress() {

        axios
            .post(global.API + '/Account/Login', {
                EmailOrUsername: login,
                Password: password,
                Code: code,
            })
            .then(res => {
                console.log(res.data);
                saveFunc(res);
            })
            .catch(error => {
                console.log(error.data);
            });
    }

    async function saveFunc(res) {
        try {
            console.log("I am res" + res.data.token);
            let emtAr = [];
            await AsyncStorage.setItem('@storage_Key', res.data.token);
            await AsyncStorage.setItem('cart', JSON.stringify(emtAr));
        } catch (e) {
            console.log(e);
            // saving error
        }
        navigation.navigate('HomeTabs');
    }

    return (
        //Solution for not dismiss Keyboard when click outside of TextInput
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.up}>
                    <Text style={styles.title}>Enter code from Email</Text>
                </View>
                <View style={styles.down}>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter code"
                            onChangeText={text => setCode(text)}></TextInput>
                    </View>
                    <TouchableOpacity style={styles.loginButton} onPress={loginPress}>
                        <Text style={styles.loginButtonTitle}>LOGIN</Text>
                    </TouchableOpacity>

                    <Image
                        source={require('../images/BeautyMate_v1.png')}
                        style={styles.logo}></Image>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default FApage;

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
    loginButton: {
        width: 250,
        height: 45,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(221,97,97)',
    },
    loginButtonTitle: {
        fontSize: 18,
        color: 'white',
    },
    facebookButton: {
        width: 250,
        height: 45,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#365899',
    },
    line: {
        height: 1,
        flex: 2,
        backgroundColor: 'black',
    },
    textOR: {
        flex: 1,
        textAlign: 'center',
    },
    divider: {
        flexDirection: 'row',
        height: 40,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 220,
        height: 220,
        borderRadius: 110,
        marginTop: 50,
    },
});
