import React from 'react';
import { View } from 'react-native';
import TextView from '../components/TextView';

import style from '../styles/common';

export default class SplashScreen extends React.Component {
    static navigationOptions = {
        headerMode: 'none',
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[style.page, style.splashScreen]}>
                <TextView text={'SPLASH SCREEN'} />
            </View>
        );
    }
}