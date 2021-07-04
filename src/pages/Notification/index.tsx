import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FocusAwareStatusBar } from '../../hooks/useIsFocused';

export default function Notifications() {
    return (
        <SafeAreaView style={styles.container}>
            <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
            <Text>Notifications</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})