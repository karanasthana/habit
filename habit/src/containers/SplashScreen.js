import React from 'react';
import { View } from 'react-native';
import TextView from '../components/TextView';

export default class SplashScreen extends React.Component {
    static navigationOptions = {
        headerMode: 'none',
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#178be7' }}>
                <TextView text={'SpPLASH SCREEN'} />
            </View>
        );
    }
}