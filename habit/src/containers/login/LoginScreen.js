import React from 'react';
import { View } from 'react-native'
import CustomTextInput from '../../components/TextInput'
import * as CONSTANTS from '../../utils/string_constants'
import {Button} from 'react-native-elements'
import styles from '../../styles/login'

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            password: ''
        }
    }

    handleLogin(){
        //add logic
    }

    render(){
        return(
            <View style={styles.loginContainer}>
                <CustomTextInput 
                    placeholder = {CONSTANTS.USERNAME}
                    value = {this.state.firstname}
                    onChangeText = { value => this.setState({firstname: value}) }
                />
                <CustomTextInput 
                    placeholder = {CONSTANTS.PASSWORD}
                    value = {this.state.password}
                    secureTextEntry={true}
                    onChangeText = { value => this.setState({password: value}) }
                />
                <Button
                    title="Login"
                    type="clear"
                    onPress= { ()=> {this.handleLogin()}}
                />

            </View>
        )
    }
}