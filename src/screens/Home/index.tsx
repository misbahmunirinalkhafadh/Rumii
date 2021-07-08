import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FocusAwareStatusBar } from '../../hooks/useIsFocused';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../RootStackParams';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootBottomTabParamList } from '../RootBottomTabParams';

type HomeScreenProp = CompositeNavigationProp<
    StackNavigationProp<RootStackParamList, 'Tabs'>,
    BottomTabNavigationProp<RootBottomTabParamList, 'Home'>
>;

export default function Home() {
    const navigation = useNavigation<HomeScreenProp>();
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
            <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" />
            <Text>Home Screens</Text>
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
