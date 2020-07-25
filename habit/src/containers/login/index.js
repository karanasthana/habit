import React from 'react';
import { View } from 'react-native'
import CustomTextInput from '../../components/TextInput'

export default function Login(props){
    let [input, setInput] = React.useState('')
    return(
        <View>
            <CustomTextInput 
                style={{flex: 1}}
                placeholder = 'Username'
                value = {input}
                onChangeText = { (value) => setInput(value) }
            />
        </View>
    )
}