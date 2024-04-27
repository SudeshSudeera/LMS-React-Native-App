import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {

    useEffect(()=>{
        AsyncStorage.getItem('token').then(token=>{
            if(token){
                navigation.navigate('UserDashboard');
            }
        }).catch(error=>{
            console.log(error);
        })
    }, []);

    let [username, setUserName] = useState('');
    let [password, setPassword] = useState('');

    const login=()=>{

        const userData = {
            username: username,
            password: password,
        }

        fetch(`http://192.168.1.114/8089/api/v1/users/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`, {
            method:'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        }).then(response=>{
            if (!response.ok){
                throw new Error("Network response was not ok");
            }
            return response.json();
        }).then(data => {
            AsyncStorage.setItem('token', data.access_token)
        }).catch(error=>{
            console.log('Error logging in: ', error);
        })
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.flatList}>
                <View style={{alignItems:'center',marginTop:50, marginBottom:50}}>
                    <Text style={{fontSize:30}}>Login</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        mode='outlined'
                        outlineColor='#ecf0f1'
                        label="username"
                        autoCapitalize={'none'}
                        value={username}
                        onChangeText={text => setUserName(text)}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        mode='outlined'
                        outlineColor='#ecf0f1'
                        label="password"
                        autoCapitalize={'none'}
                        value={password}
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                    />
                </View>
                <View>
                    <TouchableOpacity  onPress={login} style={styles.button}>
                        <Text style={{color:'white'}}>Login</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('SignupScreen')} style={[styles.button,{backgroundColor: 'white'}]}>
                    <Text style={{color:'#16a085',textDecorationLine:'underline'}}>Don't have an Account?</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3498db',
        width: '100%',
        height: 50,
        borderRadius:3,
        alignItems:'center',
        justifyContent:'center'
    },
    container: {
        flex: 1,
    },
    input: {
        marginBottom:25
    },
    flatList: {
        padding: 20,
        backgroundColor:'white'
    },
});

export default LoginScreen;
