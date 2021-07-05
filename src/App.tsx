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
} from './screens';

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
      icons: {
        focus: 'home-variant',
        infocus: 'home-variant-outline'
      },
    },
    {
      key: 2,
      name: 'Notifications',
      component: NotificationsScreen,
      icons: {
        focus: 'bell',
        infocus: 'bell-outline'
      },
      options: {
        tabBarBadge: 3
      }
    },
    {
      key: 3,
      name: 'Profile',
      component: ProfileScreen,
      icons: {
        focus: 'account-circle',
        infocus: 'account-circle-outline'
      },
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

let authScreens = screens.auth.map(function (obj) {
  return (<Stack.Screen name={obj.name} component={obj.component} key={obj.key} />)
})
let tabsScreens = screens.tabs.map(function (obj) {
  return (<Tab.Screen name={obj.name} component={obj.component} options={obj.options} key={obj.key} />)
})
let userScreens = screens.user.map(function (obj) {
  return (<Stack.Screen name={obj.name} component={obj.component} key={obj.key} />)
})

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName={screens.tabs[0].name}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";

          if (route.name === screens.tabs[0].name) {
            iconName = focused
              ? screens.tabs[0].icons.focus
              : screens.tabs[0].icons.infocus;
          } else if (route.name === screens.tabs[1].name) {
            iconName = focused
              ? screens.tabs[1].icons.focus
              : screens.tabs[1].icons.infocus;
          } else if (route.name === screens.tabs[2].name) {
            iconName = focused
              ? screens.tabs[2].icons.focus
              : screens.tabs[2].icons.infocus;
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
