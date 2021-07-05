import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FocusAwareStatusBar } from '../../hooks/useIsFocused';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Home() {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
            <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" />
            <Text>Home Screens</Text>
            <MaterialCommunityIcons name="home" color="#000" size={23} />
            <Ionicons name="ios-book" color="#000" size={23} />
            <Feather name="book" color="#000" size={23} />
            <FontAwesome5 name="book" color="#000" size={23} />
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
