import React from 'react';
import { View, StyleSheet } from 'react-native';
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
                <TextView text={'habit'} style={styles.text} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 22,
        fontWeight: '600',
    }
})