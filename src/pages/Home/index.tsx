import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FocusAwareStatusBar } from '../../hooks/useIsFocused';
import { mdiAccount } from '@mdi/js'

const Home = () => {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
            <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" />
            <Text>Home Screens</Text>
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
