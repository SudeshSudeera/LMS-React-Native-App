import {ScrollView, StyleSheet, Text, View} from "react-native";
import SubjectWidget from "./SubjectWidget.tsx";
import moment from 'moment'

const ProgramWidget = ({navigation, data}) => {
    return (
        <View style={styles.view}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.amount}>{data.price}</Text>

            <View style={styles.date}>
                <Text style={{color: 'white'}}>{moment(data.startDate).format('yyyy-mm-dd')}</Text>
            </View>

            <ScrollView style={styles.scroll} horizontal={true}>
                {
                    data.subjects?.map((subject, index)=>{
                        <SubjectWidget key={index} navigation={navigation} subject={subject.name}/>
                    })
                }
            </ScrollView>

        </View>
    )
};

const styles = StyleSheet.create({
    scroll: {
        marginTop: 20,
    },
    date: {
        width: 120,
        height: 35,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#d35400',
        borderRadius: 50,
        marginTop: 15,
    },
    amount: {
        color: '#c0392b'
    },
    name: {
        fontSize: 20,
        color: '#000'
    },
    view: {
        width: '100%',
        padding: 8,
        backgroundColor: '#bdc3c7',
        borderRadius: 3,
        marginBottom:10
    }
});

export default ProgramWidget;
