import React from 'react';
import { View } from 'react-native'
import CustomTextInput from '../../components/TextInput'
import * as CONSTANTS from '../../utils/string_constants'

import styles from '../../styles/common'

export default function Login(props){
    let [input, setInput] = React.useState('')
    return(
        <View style={styles.page}>
            <CustomTextInput 
                placeholder = {CONSTANTS.USERNAME}
                value = {input}
                onChangeText = { (value) => setInput(value) }
            />
        </View>
    )
}