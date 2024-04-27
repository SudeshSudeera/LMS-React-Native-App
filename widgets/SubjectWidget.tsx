import {StyleSheet, Text, View} from "react-native";

const SubjectWidget = ({navigation, subject}) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{subject}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    text:{
        color:'#000'
    },
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
        padding: 8,
        backgroundColor: '#16a085',
        borderRadius: 3,
        marginRight:10
    }
});

export default SubjectWidget;
