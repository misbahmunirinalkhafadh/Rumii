import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { FocusAwareStatusBar } from '../../hooks/useIsFocused';
import { RootStackParamList } from '../RootStackParams';
import { StackNavigationProp } from '@react-navigation/stack';

type signUpScreenProp = StackNavigationProp<RootStackParamList, 'Registration'>;;

export default function SignUp() {
    const navigation = useNavigation<signUpScreenProp>();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    // const { signIn } = React.useContext(AuthContext);

    return (
        <View style={styles.container}>
            <FocusAwareStatusBar barStyle="dark-content" />
            <TextInput
                style={styles.input}
                placeholder="Nama Lengkap"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registration')} >
                <Text style={styles.text_button}>SIGN UP</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 25,
        justifyContent: 'center'
    },
    input: {
        backgroundColor: '#EDEDED',
        borderColor: '#444444',
        borderWidth: 1,
        padding: 14,
        fontSize: 16,
        marginTop: 4,
        marginBottom: 4,
        borderRadius: 10
    },
    button: {
        backgroundColor: '#DA0037',
        borderRadius: 10,
    },
    text_button: {
        fontWeight: 'bold',
        padding: 12,
        color: '#EDEDED',
        textAlign: 'center'
    }
})
