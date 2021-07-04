import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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

const screens = {
  auth: [
    {
      key: 1,
      name: 'Login',
      component: SignInScreen,
    },
    {
      key: 2,
      name: 'Registration',
      component: SignUpScreen,
    },
  ],
  tabs: [
    {
      key: 1,
      name: 'Home',
      component: HomeScreen,
    },
    {
      key: 2,
      name: 'Notifications',
      component: NotificationsScreen,
      options: {
        tabBarBadge: 3
      }
    },
    {
      key: 3,
      name: 'Profile',
      component: ProfileScreen,
    },
  ],
  user: [
    {
      key: 1,
      name: 'Splash',
      component: SplashScreen,
    },
    {
      key: 2,
      name: 'Welcome',
      component: WelcomeScreen,
    },
    {
      key: 3,
      name: 'Tabs',
      component: MyTabs,
    },
  ]
}

let authScreens = screens.auth.map(obj => {
  return (<Stack.Screen name={obj.name} component={obj.component} key={obj.key} />)
})
let tabsScreens = screens.tabs.map(obj => {
  return (<Tab.Screen name={obj.name} component={obj.component} options={obj.options} key={obj.key} />)
})
let userScreens = screens.user.map(obj => {
  return (<Stack.Screen name={obj.name} component={obj.component} key={obj.key} />)
})

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";

          if (route.name === 'Home') {
            iconName = focused
              ? 'home-variant'
              : 'home-variant-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'bell' : 'bell-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account-circle' : 'account-circle-outline';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      {tabsScreens}
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tabs" headerMode="none" >
          {authScreens}
          {userScreens}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;
