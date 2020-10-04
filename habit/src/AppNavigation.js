import Login from './containers/login/LoginScreen';
import Signup from './containers/signup/SignupScreen';
import Home from './containers/BottomNav';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';

let LoginStack = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Signup: {
      screen: Signup,
    },
    // ForgotPassword: {
    //     screen: ForgotPassword,
    // },
  },
  {
    defaultNavigationOptions: {
      // headerTintColor: '#444',
      // headerStyle: {
      //     backgroundColor: '#3a65a0',
      //     display: 'none',
      // },
      // headerTitleStyle: {
      //     color: 'white',
      // },
      headerShown: false,
    },
  },
);

let HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    // ForgotPassword: {
    //     screen: ForgotPassword,
    // },
  },
  {
    defaultNavigationOptions: {
      // headerTintColor: '#444',
      // headerStyle: {
      //     backgroundColor: '#3a65a0',
      //     display: 'none',
      // },
      // headerTitleStyle: {
      //     color: 'white',
      // },
      headerShown: false,
    },
  },
);

export const createRootSwitchNavigator = (signedOut = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: HomeStack,
      },
      SignedOut: {
        screen: LoginStack,
      },
    },
    {
      initialRouteName: signedOut ? 'SignedOut' : 'SignedIn',
    },
  );
};
