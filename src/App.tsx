import React from 'react'
import { View, Text } from 'react-native'
import { Home, Login, Registration, Splash } from './pages'

export default function App() {
  return (
    <View>
      <Text>Hello</Text>
      <Login/>
      <Splash/>
      <Registration/>
      <Home/>
    </View>
  )
}
