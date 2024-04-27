import UserPaymentCard from "../../../widgets/UserPaymentCard.tsx";
import {StyleSheet, ScrollView} from 'react-native';

const UserPaymentsScreen = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <UserPaymentCard navigation={navigation}/>
            <UserPaymentCard navigation={navigation}/>
            <UserPaymentCard navigation={navigation}/>
            <UserPaymentCard navigation={navigation}/>
            <UserPaymentCard navigation={navigation}/>
            <UserPaymentCard navigation={navigation}/>
            <UserPaymentCard navigation={navigation}/>
            <UserPaymentCard navigation={navigation}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10
    }
})

export default UserPaymentsScreen;
