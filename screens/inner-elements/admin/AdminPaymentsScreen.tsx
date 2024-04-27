
import {StyleSheet, ScrollView} from 'react-native';
import UserPaymentCard from '../../../widgets/UserPaymentCard';

const AdminPaymentsScreen = ({navigation}) => {
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

export default AdminPaymentsScreen;
