import React from 'react'
import { View, Text } from 'react-native'

interface Separator {
    height: Number;
    width: Number;
}
export default function Separation(props: Separator) {
    const h = props.height;
    const as = '';
    return (
        <View>
            <Text></Text>
        </View>
    )
}