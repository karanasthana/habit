import Login from './containers/login/LoginScreen';
import Home from './containers/HomeScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';

let LoginStack = createStackNavigator(
    {
        Login: {
            screen: Login,
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

export const createRootSwitchNavigator = (signedOut = false, allProjectObjects = {}) => {
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
