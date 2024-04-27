import {StyleSheet, ScrollView} from 'react-native';
import ProgramWidget from "../../../widgets/ProgramWidget.tsx";
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserAllProgramsScreen = ({navigation}) => {

    const [programs, setPrograms] = useState([]);
    const [token, setToken] = useState('');

    useEffect(()=>{
        AsyncStorage.getItem('token').then(value => {
            if(value){
                setToken(value);
            }
        });
        fetchData();
    });

    const fetchData = () => {
        const headers = {
            'Authorization': `bearer ${token}`,
            'Content-Type': 'application/json'
        };
        fetch('http://192.168.1.144:9090/api/v1/programs', {
            headers: headers
        }).then(response => {
            if(!response.ok){
                throw new Error('Something went wrong');
            }
            return response.json();
        }).then(obj => {
            setPrograms(obj.data);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <ScrollView style={styles.container}>
            {
                programs.map((program, index)=>{
                    <ProgramWidget key={index} navigation={navigation} data={program}/>
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10
    }
})

export default UserAllProgramsScreen;
