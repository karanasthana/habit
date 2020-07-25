import React from 'react';
import { View, Text } from 'react-native'
import CustomTextInput from '../../TextInput'

export default function Login(props){
    let input
    return(
        <View>
            <Text>Hello login form</Text>
            <CustomTextInput 
                style={{flex: 1}}
                placeholder = 'Username'
                ref={value => input = value}
            />
        </View>
    )
}