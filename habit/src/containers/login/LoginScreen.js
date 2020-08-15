import React from 'react';
import { View } from 'react-native'
import CustomTextInput from '../../components/TextInput'
import * as CONSTANTS from '../../utils/string_constants'
import {Button} from 'react-native-elements'
import styles from '../../styles/login'

export default function Login(){

    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    handleLogin = () => {
        //logic
    }

    return(
        <View style={styles.loginContainer}>
            <CustomTextInput 
                placeholder = {CONSTANTS.USERNAME}
                value = {userName}
                onChangeText = { value => setUserName(value) }
            />
            <CustomTextInput 
                placeholder = {CONSTANTS.PASSWORD}
                value = {password}
                secureTextEntry={true}
                onChangeText = { value => setPassword(value) }
            />
            {/* TODO AYUSHI create a showPassword method */}
            <Button
                title="Login"
                type="clear"
                onPress= { () => this.handleLogin() }
            />

        </View>
    )
}