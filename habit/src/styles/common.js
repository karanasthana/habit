const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // TODO KARAN Move this to styles/login.js
    loginContainer: {
        width: '100%',
    },
    // TODO KARAN Move this to styles/splashScreen.js
    splashScreen: {
        backgroundColor: '#178be7',
    }
});