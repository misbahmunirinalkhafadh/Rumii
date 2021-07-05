import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FocusAwareStatusBar, ProfileUser } from '../../hooks/useIsFocused';

const Profile = () => {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
            <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
            <Text>Profile</Text>
            <ProfileUser />
        </SafeAreaView>
    )
}
export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})