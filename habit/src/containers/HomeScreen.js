import React from 'react';
import { View } from 'react-native'
import TextView from '../components/TextView';

import styles from '../styles/common'

export default function Home(props){
    let [input, setInput] = React.useState('')
    return(
        <View style={styles.page}>
            <TextView text={'Home'} />
        </View>
    )
}