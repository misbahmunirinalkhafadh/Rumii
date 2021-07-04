import React from 'react';
import { StatusBar, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

function FocusAwareStatusBar({ ...props }) {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar {...props} /> : null;
}

function ProfileUser() {
    // This hook returns `true` if the screen is focused, `false` otherwise
    const isFocused = useIsFocused();

    return <Text>{isFocused ? 'focused' : 'unfocused'}</Text>;
}

export { FocusAwareStatusBar, ProfileUser }