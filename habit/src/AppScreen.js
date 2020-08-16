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
    this.checkCredentialsAndUpdate();
    // NOTE: This is to forcefully make the SplashScreen last for 2 seconds
    setTimeout(() => {
      this.setState({ isTimeDone: true });
    }, 2000);
  }

  async checkCredentialsAndUpdate() {
    // TODO KARAN 16-08-2020  getGenericPassword is an async function, hence need the parent function to be async
    // const credentials = await Keychain.getGenericPassword();
    // if (!_.isEmpty(credentials.username)) {

    // TODO KARAN 16-08-2020 use this if-else to decide where to go, Login OR Home
    if (false) {
      const pwd = {}; // JSON.parse(credentials.password);
      global.authorization; // assign the JWT here
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
