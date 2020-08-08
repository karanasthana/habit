import React from 'react';
import { createAppContainer } from 'react-navigation';

import { createRootSwitchNavigator } from './AppNavigation';
import SplashScreen from './containers/SplashScreen';

export default class AppScreen extends React.Component {
    state = {
        isLoading: true,
        isSignedOut: true,
        userToken: null,
        isTimeDone: false,
    };

    componentDidMount() {
        // eslint-disable-next-line consistent-this
        let self = this;
        this.checkCredentialsAndUpdate();
        // NOTE: This is to forcefully make the SplashScreen last for 2 minutes
        setTimeout(function() {
            self.setState({ isTimeDone: true });
        }, 2000);
    }

    async checkCredentialsAndUpdate() {
        // const credentials = await Keychain.getGenericPassword();
        // if (!_.isEmpty(credentials.username)) {
        // TODO Karan use this if-else to decide where to go, Login OR Home
        if (false) {
            const pwd = JSON.parse(credentials.password);
            global.authorization = `ApiKey ${pwd.username}:${pwd.apiKey}`;
            global.subdomain = pwd.accountSubdomain;
            global.baseUrl = `${PROTOCOL}${pwd.accountSubdomain}${ORGZIT_URL_APP_FLAVOUR}`;
            global.userId = pwd.id;
            global.userResourceUri = pwd.resourceUri;
            global.username = pwd.username;
            global.userEmail = pwd.email;
            this.setState({ isSignedOut: false });
            this.setState({ isLoading: false });
        } else {
            this.setState({ isLoading: false });
        }
    }

    render() {
        if (this.state.isLoading || !this.state.isTimeDone) {
            return <SplashScreen />;
        }

        let Layout = createRootSwitchNavigator(this.state.isSignedOut);
        let AppContainer = createAppContainer(Layout);
        return <AppContainer />;
    }
}
