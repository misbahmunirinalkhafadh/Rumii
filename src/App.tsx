import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  ProfileScreen,
  NotificationsScreen,
  HomeScreen,
  SignInScreen,
  SignUpScreen,
  WelcomeScreen,
  SplashScreen
} from './pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const authScreens = {
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
};

const userScreens = {
  Home: HomeTabs
}

function HomeTabs() {
  return (
    <Tab.Navigator initialRouteName="Home" >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notification" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="none" >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Registration" component={authScreens.SignUp} />
          <Stack.Screen name="Login" component={authScreens.SignIn} />
          <Stack.Screen name="Home" component={userScreens.Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
