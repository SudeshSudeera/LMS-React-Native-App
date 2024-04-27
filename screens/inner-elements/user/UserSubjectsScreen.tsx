import {StyleSheet, ScrollView} from 'react-native';
import SubjectCard from "../../../widgets/SubjectCard.tsx";

const UserSubjectsScreen = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <SubjectCard/>
            <SubjectCard/>
            <SubjectCard/>
            <SubjectCard/>
            <SubjectCard/>
            <SubjectCard/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10
    }
})

export default UserSubjectsScreen;
