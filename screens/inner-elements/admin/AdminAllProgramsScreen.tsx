import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ProgramWidget from '../../../widgets/ProgramWidget';
import { Icon } from "react-native-paper";

const AdminAllProgramsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.add}>
                <Icon color={'white'} size={20} source='plus' />
            </TouchableOpacity>

            <ScrollView style={styles.container}>
                <ProgramWidget navigation={navigation} />
                <ProgramWidget navigation={navigation} />
                <ProgramWidget navigation={navigation} />
                <ProgramWidget navigation={navigation} />
                <ProgramWidget navigation={navigation} />
                <ProgramWidget navigation={navigation} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    add: {
        width: 45,
        height: 45,
        backgroundColor: '#c0392b',
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 1,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        flex: 1,
        padding: 10
    }
})

export default AdminAllProgramsScreen;
