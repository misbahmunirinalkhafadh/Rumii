import React from 'react'
import { TextInput } from 'react-native';
import { StyleSheet, Button, View } from 'react-native'

const SignIn = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    // const { signIn } = React.useContext(AuthContext);

    return (
        <View>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Sign in" onPress={() => console.log("press....")} />
        </View>
    )
}
export default SignIn;

const styles = StyleSheet.create({})
