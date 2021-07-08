import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../RootStackParams';
import { useColors, useStyles } from '../../styles';

type welcomeScreenProp = StackNavigationProp<RootStackParamList, 'Welcome'>;
const styless:any = useStyles();
const colors = useColors();

export default function Welcome() {
    const navigation = useNavigation<welcomeScreenProp>()
  
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: 'center', marginBottom: 100 }}>
                <Text style={{ fontWeight: '500', fontSize: 40 }}>Welcome!</Text>
                <Text style={{ color: 'grey', marginTop: 20, fontFamily: 'arial' }}>Sign in or create new account</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')} >
                <Text style={styles.text_button}>SIGN IN</Text>
            </TouchableOpacity>
            <View style={[styles.buttonOutline, { marginTop: 15 }]}>
                <Text>
                    No account yet? <Text style={colors.primary} onPress={() => navigation.navigate('Registration')}>Sign Up</Text>
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 25,
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#DA0037',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonOutline: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    text_button: {
        fontWeight: 'bold',
        color: '#EDEDED',
    },
})