import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { FocusAwareStatusBar } from '../../hooks/useIsFocused';

export default function SignIn() {
    const navigation = useNavigation();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    // const { signIn } = React.useContext(AuthContext);

    return (
        <View style={styles.container}>
            <FocusAwareStatusBar barStyle="dark-content" />
            <Text style={{ fontWeight: 'bold', fontSize: 29, marginBottom: 25 }}>Welcome!</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
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
            <TouchableOpacity style={[styles.button, { marginTop: 30 }]} onPress={() => navigation.navigate('Tabs')} >
                <Text style={styles.text_button}>SIGN IN</Text>
            </TouchableOpacity>
            <Text style={{ margin: 10, textAlign: 'center' }}>Or</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registration')} >
                <Text style={styles.text_button}>SIGN UP</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
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
