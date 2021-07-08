import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './screens/RootStackParams';
import { RootBottomTabParamList } from './screens/RootBottomTabParams';
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

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootBottomTabParamList>();

// interface AuthKey {
//   key: number;
//   name: string;
//   component: () => string;
// }

const screens = {
  auth: [
    {
      key: 1,
      name: 'Welcome',
      component: WelcomeScreen,
    },
    {
      key: 2,
      name: 'Login',
      component: SignInScreen,
    },
    {
      key: 3,
      name: 'Registration',
      component: SignUpScreen,
    },
  ],
  tab: [
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
        tabBarBadge: 3,
      }
    },
    {
      key: 3,
      name: 'Profile',
      component: ProfileScreen,
      icons: {
        focus: 'account',
        infocus: 'account-outline'
      },
    },
  ],
  main: [
    {
      key: 1,
      name: 'Splash',
      component: SplashScreen,
    },
    {
      key: 2,
      name: 'Tabs',
      component: MyTabs,
      options: {
        headerShown: false
      }
    },
  ]
}

const authScreens = screens.auth.map(obj => {
  return <Stack.Screen name={obj.name} component={obj.component} options={{ headerShown: false }} key={obj.key} />
});
const tabsScreens = screens.tab.map(function (obj) {
  return (<Tab.Screen name={obj.name} component={obj.component} options={obj.options} key={obj.key} />)
})
const mainScreens = screens.main.map(function (obj) {
  return (<Stack.Screen name={obj.name} component={obj.component} options={obj.options} key={obj.key} />)
})

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName={screens.tab[0].name}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";

          if (route.name === screens.tab[0].name) {
            iconName = focused
              ? screens.tab[0].icons.focus
              : screens.tab[0].icons.infocus;
          } else if (route.name === screens.tab[1].name) {
            iconName = focused
              ? screens.tab[1].icons.focus
              : screens.tab[1].icons.infocus;
          } else if (route.name === screens.tab[2].name) {
            iconName = focused
              ? screens.tab[2].icons.focus
              : screens.tab[2].icons.infocus;
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

export default function() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" >
          {authScreens}
          {mainScreens}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}