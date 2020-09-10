import React from 'react';
import { connect } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { bindActionCreators } from 'redux';

import { createRootSwitchNavigator } from './AppNavigation';
import SplashScreen from './containers/SplashScreen';

import * as userActions from './actions/user';

class AppScreen extends React.Component {
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
    // TODO- 16-08-2020 Karan getGenericPassword is an async function, hence need the parent function to be async
    // const credentials = await Keychain.getGenericPassword();
    // if (!_.isEmpty(credentials.username)) {

    // TODO- 16-08-2020 Karan use this if-else to decide where to go, Login OR Home
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
    return (
      <AppContainer
        screenProps={{
          userActions: this.props.userActions,
        }}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    userReducer: state.userReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppScreen);
