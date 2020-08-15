import React from 'react';
import { View, Text} from 'react-native'
import CustomTextInput from '../../components/TextInput'
import * as CONSTANTS from '../../utils/string_constants'
import {Button} from 'react-native-elements'
import commonStyles from '../../styles/common'
import styles from '../../styles/login'

export default function Login(){

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    handleLogin = () => {
        //logic
    }

    return(
        <View style={commonStyles.page}>
            {/* TODO AYUSHI- 16-08-2020 add an image here and a pretty background */}
            <Text style={styles.headline}>Log in to start tracking your habits</Text>
            <CustomTextInput 
                placeholder = {CONSTANTS.EMAIL}
                value = {email}
                onChangeText = { value => setEmail(value) }
            />
            <CustomTextInput 
                placeholder = {CONSTANTS.PASSWORD}
                value = {password}
                secureTextEntry={true}
                onChangeText = { value => setPassword(value) }
            />
            {/* TODO AYUSHI- 16-08-2020 create a showPassword method */}
            <Button
                title="Login"
                type="outline"
                onPress= { () => this.handleLogin() }
            />

        </View>
    )
}